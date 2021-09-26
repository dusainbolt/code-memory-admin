import { FC, ReactNode } from 'react';
import React from 'react';
import { getListTagRequest } from '../../graphql/tagRequest';
import { SearchTagOutput, Tag, TagStatus } from '../../models/TagModel';
import { setNotifySlice } from '../../redux/slices/layoutSlice';
import { NotifySystem, TypeNotify } from '../../models/LayoutModel';
import { BoxIconAndName } from '../../components/Tag/BoxIconAndName';
import { FieldInputProps, FormikProps } from 'formik';
import { DrawerTagForm } from '../../components/Tag/DrawerTagForm';
import { useFormTag } from '../../hooks/useTag';
import { SelectSearch } from './SelectSearch';

export const renderOption = data => {
  return data.map((item: Tag) => ({
    label: (
      <BoxIconAndName
        classNameWrap="handle-drag"
        size={25}
        name={item.title}
        thumbnail={item.thumbnail}
        updatedAt={item.updatedAt}
      />
    ),
    value: item.id,
    key: item.id,
  }));
};
interface SelectValue {
  key?: string;
  label: string | ReactNode;
  value: string;
}

async function fetchTagList(key: string, dispatch: any): Promise<SelectValue[]> {
  try {
    const data: SearchTagOutput = await getListTagRequest({
      key,
      status: [TagStatus.ACTIVE],
      limit: 10,
      offset: 0,
      count: false,
    });
    return renderOption(data.dataTags);
  } catch (error: any) {
    dispatch(
      setNotifySlice({
        messageNotify: error?.message,
        typeNotify: TypeNotify.ERROR,
        createTime: new Date().getTime(),
      } as NotifySystem)
    );
  }
}

export const FiledTagSelect: FC<{
  field?: FieldInputProps<any>;
  form?: FormikProps<any>;
  label?: string;
  placeholder?: string;
  classNameWrap?: string;
}> = ({ ...props }) => {
  const { openFormModal, visibleFormTag, setVisible } = useFormTag();

  return (
    <>
      <SelectSearch {...props} fetchData={fetchTagList} openFormAdd={openFormModal} renderOption={renderOption} />
      <DrawerTagForm callbackSubmit={null} visible={visibleFormTag} setVisible={setVisible} />
    </>
  );
};
