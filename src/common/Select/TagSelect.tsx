import { Select, Spin, Typography } from 'antd';
import { SelectProps } from 'antd/es/select';
import debounce from 'lodash/debounce';
import { ReactNode, useMemo, useRef, useState } from 'react';
import React from 'react';
import { getListTagRequest } from '../../graphql/tagRequest';
import { SearchTagOutput, Tag, TagStatus } from '../../models/TagModel';
import store, { useAppDispatch } from '../../redux/rootStore';
import { setNotifySlice } from '../../redux/slices/layoutSlice';
import { NotifySystem, TypeNotify } from '../../models/LayoutModel';
import Box from '../Box';
import { BoxIconAndName } from '../../components/Tag/BoxIconAndName';

export interface DebounceSelectProps<ValueType = any> extends Omit<SelectProps<ValueType>, 'options' | 'children'> {
  fetchOptions: (search: string, dispatch: any) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

function DebounceSelect<ValueType extends { key?: string; label: ReactNode; value: string | number } = any>({
  fetchOptions,
  debounceTimeout = 800,
  ...props
}: DebounceSelectProps) {
  const dispatch = useAppDispatch();
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value, dispatch).then(newOptions => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select<ValueType>
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

// Usage of DebounceSelect
interface UserValue {
  label: string | ReactNode;
  value: string;
}

async function fetchUserList(username: string, dispatch: any): Promise<UserValue[]> {
  console.log('fetching user', username);
  try {
    const data: SearchTagOutput = await getListTagRequest({ key: username, status: [TagStatus.ACTIVE], limit: 10, offset: 0 });
    console.log(data);
    return data.dataTags.map((item: Tag) => ({
      label: <BoxIconAndName size={25} name={item.title} thumbnail={item.thumbnail} updatedAt={item.updatedAt} />,
      value: item.id,
    }));
  } catch (error: any) {
    dispatch(setNotifySlice({ messageNotify: error?.message, typeNotify: TypeNotify.ERROR, createTime: new Date().getTime() } as NotifySystem));
  }
}

export const DemoTagSelect = () => {
  const [value, setValue] = useState<UserValue[]>([]);

  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Select users"
      fetchOptions={fetchUserList}
      onChange={newValue => {
        setValue(newValue);
      }}
      style={{ width: '100%' }}
    />
  );
};
