import { Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import { Field, useFormikContext } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputComponent } from '../../common/Input';
import { TextAreaComponent } from '../../common/Input/TextAreaForm';
import { FieldUpload } from '../../common/Upload/FieldUpload';
import { fieldSeoHome } from '../../models/SeoHomeModel';

export const SeoHomeForm = () => {
  const { t } = useTranslation();
  const { social, image } = fieldSeoHome;

  return (
    <Row gutter={[32, 32]} className="container-md">
      <Col xs={12}>
        <Title className="title-form" level={3}>
          {t('seo.info_basic')}
        </Title>
        <Field {...fieldSeoHome.siteName} component={InputComponent} />
        <Field {...fieldSeoHome.title} component={InputComponent} />
        <Field {...fieldSeoHome.domain} component={InputComponent} />
        <Field {...fieldSeoHome.searchBoxUrl} component={InputComponent} />
        <Field {...fieldSeoHome.facebookChatPlugin} component={TextAreaComponent} />
        <Field {...fieldSeoHome.languageAlternates} component={InputComponent} />
      </Col>
      <Col xs={12}>
        <Title className="title-form" level={3}>
          {t('seo.image')}
        </Title>
        <FieldUpload isLoadingForm={false} {...image.faviconUrlICO} crop={false} />
      </Col>
      <Col xs={12}>
        <Title className="title-form" level={3}>
          {t('seo.social')}
        </Title>
        <Field {...social.facebookAppId} component={InputComponent} />
        <Field {...social.facebookPageUrl} component={InputComponent} />
        <Field {...social.youtubeUrl} component={InputComponent} />
        <Field {...social.twitterUrl} component={InputComponent} />
      </Col>
    </Row>
  );
};
