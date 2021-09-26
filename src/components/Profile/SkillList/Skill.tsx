import { CloseCircleOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import Avatar from 'antd/lib/avatar/avatar';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { useTranslation } from 'react-i18next';
import { Image, Progress } from 'antd';
import { OPTION_FILTER_STATUS_SKILL, SkillStatus } from '../../../models/SkillModel';
import { isForStatement } from 'typescript';
import { useDispatch } from 'react-redux';
import { setCheckedSkill } from '../../../redux/slices/skillSlice';

export interface SkillInterface {
  data: any;
  index: number; 
}

export const Skill: FC<SkillInterface> = ({data, index}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch()

  const hanldeCheck = (data: any) => {
    if(data.target.checked) dispatch(setCheckedSkill({status: SkillStatus.ACTIVE, index}))
    else dispatch(setCheckedSkill({status: SkillStatus.INACTIVE, index}))
  }

  return (
    <div className="skill">
      <Image className="skill_thumbnail" src={data?.tagData.thumbnail} preview={false} />
      <div className="skill__content">
        <div className="show-in-profile">
          <Checkbox checked={data?.status===SkillStatus.ACTIVE} onChange={hanldeCheck}>{t('profile.show_in_profile')}</Checkbox>
        </div>
        <div className="name">{data?.tagData.title}</div>
        <Progress percent={data?.percent} />
      </div>
    </div>
  );
};
