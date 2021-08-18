import { ModalCommon } from '.';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/rootStore';
import { getLayoutSlice, setProcessUploadSlice } from '../../redux/slices/layoutSlice';
import { useTranslation } from 'react-i18next';
import { AppSpinning } from '../Spining';
import Paragraph from 'antd/lib/typography/Paragraph';
import Box from '../Box';

export const ModalProcessUpload = () => {
  const { t } = useTranslation();
  const { loadingUpload, visibleProcessModal, messageUpload, uploadDone } = useAppSelector(getLayoutSlice).processUpload;
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(setProcessUploadSlice({}));
  };
  return (
    <ModalCommon className="modal-upload-process" closable={!loadingUpload} visible={visibleProcessModal} onCancel={onClose}>
      {loadingUpload && (
        <Box className="flx-center column">
          <Paragraph className="dec-upload">{t(uploadDone ? 'common.upload_s3_dec.upload_s3_success' : 'common.upload_s3_dec')}</Paragraph>
          <AppSpinning loading={true} />
        </Box>
      )}
      {!!messageUpload && <Paragraph>{messageUpload}</Paragraph>}
    </ModalCommon>
  );
};
