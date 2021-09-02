import { Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import { Field, useFormikContext } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ButtonCommon from '../../common/Button';
import { InputComponent } from '../../common/Input';
import { TextAreaComponent } from '../../common/Input/TextAreaForm';
import { FieldUpload } from '../../common/Upload/FieldUpload';
import { fieldSeoHome } from '../../models/SeoHomeModel';

export const SeoHomeForm = () => {
  const { t } = useTranslation();
  const { social, image } = fieldSeoHome;
  const { handleSubmit } = useFormikContext();

  return (
    <Row gutter={[32, 32]} className="container-md">
      <Col xs={12}>
        <Title className="title-form" level={3}>
          {t('seo.info_basic')}
        </Title>
        <Field {...fieldSeoHome.siteName} component={InputComponent} />
        <Field {...fieldSeoHome.title} component={InputComponent} />
        <Field {...fieldSeoHome.description} component={InputComponent} />
        <Field {...fieldSeoHome.domain} component={InputComponent} />
        <Field {...fieldSeoHome.searchBoxUrl} component={InputComponent} />
        <Field {...fieldSeoHome.facebookChatPlugin} component={TextAreaComponent} />
        <Field {...fieldSeoHome.languageAlternates} component={InputComponent} />
        <Title className="title-form mt-30" level={3}>
          {t('seo.social')}
        </Title>
        <Field {...social.facebookAppId} component={InputComponent} />
        <Field {...social.facebookPageUrl} component={InputComponent} />
        <Field {...social.youtubeUrl} component={InputComponent} />
        <Field {...social.twitterUrl} component={InputComponent} />
        <ButtonCommon onClick={handleSubmit}>{t('common.txt_completed')}</ButtonCommon>
      </Col>
      <Col xs={12}>
        <Title className="title-form" level={3}>
          {t('seo.image')}
        </Title>
        <Field {...image.logoAlt} component={InputComponent} />
        <Row>
          <Col xs={12}>
            <FieldUpload isLoadingForm={false} {...image.faviconUrlICO} crop={false} />
          </Col>
          <Col xs={12}>
            <FieldUpload isLoadingForm={false} {...image.faviconUrlJPG} crop={false} />
          </Col>
        </Row>
        <FieldUpload isLoadingForm={false} {...image.logo400x400} crop={false} />
        <FieldUpload fullWidth isLoadingForm={false} {...image.logo800x600} crop={false} />
        <FieldUpload fullWidth isLoadingForm={false} {...image.logo1280x720} crop={false} />
      </Col>
    </Row>
  );
};
