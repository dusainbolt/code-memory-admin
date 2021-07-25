import React from 'react';
import { useTranslation } from 'react-i18next';

export const DashboardPages = () => {
  const { t } = useTranslation();
  console.log('RENDER DASHBOARD');
  return <div>THIS IS DASHBOARD PAGE</div>;
};
