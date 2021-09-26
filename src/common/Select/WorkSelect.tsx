import { FC, ReactNode } from 'react';
import React from 'react';
import { getListTagRequest } from '../../graphql/tagRequest';
import { SearchTagOutput, Tag, TagStatus } from '../../models/TagModel';
import { setNotifySlice } from '../../redux/slices/layoutSlice';
import { NotifySystem, TypeNotify } from '../../models/LayoutModel';
import { Experience, ExperienceStatus, SearchExpOutput } from '../../models/ExperienceModel';
import { BoxIconAndName } from '../../components/Tag/BoxIconAndName';
import { FieldInputProps, FormikProps } from 'formik';
import { DrawerTagForm } from '../../components/Tag/DrawerTagForm';
import { useFormTag } from '../../hooks/useTag';
import { SelectSearch } from './SelectSearch';
import { DrawerExperienceForm } from '../../components/Profile/ExperienceList/DrawerExperienceForm';
import { useFormExp, useSearchExpList } from '../../hooks/useExperience';
import { getListExpRequest } from '../../graphql/ExperienceRequest';

export const renderOption = data => {
  console.log('render ===============> ', data);
  return data.map((item: Experience) => ({
    label: (
      <BoxIconAndName
        classNameWrap="handle-drag"
        size={25}
        name={item.nameVN}
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

async function fetchExpList(key: string, dispatch: any): Promise<SelectValue[]> {
  try {
    const data: SearchExpOutput = await getListExpRequest({
      key,
      status: [ExperienceStatus.ACTIVE],
      limit: 10,
      offset: 0,
      count: false,
      type: [],
    });
    console.log(data);
    return renderOption(data.dataExps);
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

export const FiledWorkSelect: FC<{
  field?: FieldInputProps<any>;
  form?: FormikProps<any>;
  label?: string;
  placeholder?: string;
  classNameWrap?: string;
}> = ({ ...props }) => {
  const { visibleFormExp, setVisible, openFormModal } = useFormExp();

  return (
    <>
      <SelectSearch {...props} fetchData={fetchExpList} openFormAdd={openFormModal} renderOption={renderOption} />
      <DrawerExperienceForm callbackSubmit={null} visible={visibleFormExp} setVisible={setVisible} />
    </>
  );
};
