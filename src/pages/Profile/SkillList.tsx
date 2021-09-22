import Title from 'antd/lib/typography/Title';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '../../common/Box';
import { Button, Col, Divider, message, Row, Skeleton } from 'antd';
import { Skill } from '../../components/Profile/SkillList/Skill';
import { PlusOutlined } from '@ant-design/icons';
import { ModalAddSkill } from '../../components/Profile/SkillList/ModalAddSkill';
import { useFormSkill } from '../../hooks/useSkill';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/rootStore';
import { getListSkillStart, getSkillSlice, updateSkill } from '../../redux/slices/skillSlice';
import { showNotification } from '../../common/Utils';

export const SkillList = () => {
  const { openFormModal, visibleFormSkill, setVisible, openFormEdit } = useFormSkill();
  const email = useAppSelector((state) => state.loginSlice.user.email);
  const { dataSkills, isLoadingList, disableButton } = useAppSelector(getSkillSlice);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    getListSkill()
  }, []);

  const getListSkill = () => {
    dispatch(getListSkillStart({ credential: email }));
  }

  const updateSkills = () => {
    dispatch(updateSkill({callback:(mess, type)=>showNotification(t(mess), type)}))
  }

  


  return (
    <Box className="admin__content skill-list">
      <Title className="title-page">{t('menu.skill_list')}</Title>
      <Divider />
      {!isLoadingList?<Box className="flx-center space-center control-top">
        <Row gutter={[12, 50]} className="list">
          {dataSkills.map((value, index) => {
            return (
              <Col xs={4} key={index}>
                <Skill data={value} index={index}/>
              </Col>
            );
          })}

          <Col xs={4}>
            <div className="btn-add-skill" onClick={openFormModal}>
              <PlusOutlined />
            </div>
          </Col>
        </Row>
      </Box>:<Skeleton active />}
      <Box className="btn-save">
        <Button disabled={disableButton} loading={isLoadingList} onClick={updateSkills} type="primary">{t('profile.save')}</Button>
      </Box>
      <ModalAddSkill visible={visibleFormSkill} setVisible={setVisible} callbackSubmit={getListSkill}/>
    </Box>
  );
};
