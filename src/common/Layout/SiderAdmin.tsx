import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import React, { ReactNode, useMemo, useState } from 'react';
import { PieChartOutlined } from '@ant-design/icons';
import AntImage from '../Image/AntImage';
import LogoSider from '../../asset/image/logo_header.webp';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useTranslation } from 'react-i18next';
import { ROUTE } from '../../appRoutes';
import { useGetActiveSider } from '../../hooks/useLayout';

interface IMenuItem {
  title: string;
  key: string;
  url?: string;
}

interface IMenuSider {
  menu: IMenuItem;
  icon: ReactNode;
  child?: IMenuItem[];
}

const getKeyMenu = (key: string): string => {
  return key.replace('/', '');
};

const menuSider: IMenuSider[] = [
  {
    menu: {
      title: 'menu.dashboard',
      key: getKeyMenu(ROUTE.DASHBOARD_BLOG),
      url: ROUTE.DASHBOARD_BLOG,
    },
    icon: <PieChartOutlined />,
    child: [
      {
        title: 'menu.blog_child_list',
        key: ROUTE.DASHBOARD_BLOG,
        url: ROUTE.DASHBOARD_BLOG,
      },
    ],
  },
  {
    menu: {
      title: 'menu.blog',
      key: getKeyMenu(ROUTE.BLOG_LIST),
    },
    icon: <PieChartOutlined />,
    child: [
      {
        title: 'menu.blog_child_list',
        key: ROUTE.BLOG_LIST,
        url: ROUTE.BLOG_LIST,
      },
      {
        title: 'menu.blog_child_list',
        key: ROUTE.BLOG_ADD,
        url: ROUTE.BLOG_ADD,
      },
    ],
  },
  {
    menu: {
      title: 'menu.tag',
      key: getKeyMenu(ROUTE.TAG_LIST),
      // url: ROUTE.TAG_LIST,
    },
    icon: <PieChartOutlined />,
    child: [
      {
        title: 'menu.blog_child_list',
        key: ROUTE.TAG_LIST,
        url: ROUTE.TAG_LIST,
      },
    ],
  },
];

export const SiderAdmin = () => {
  const { activeKey, activeSubKey, onChangeActiveKey } = useGetActiveSider();

  const { t } = useTranslation();

  return (
    <Sider trigger={null} className="sider" collapsible collapsed={false}>
      <AntImage src={LogoSider} wrapperClassName="logo-slider center-block" />
      <Menu selectedKeys={activeSubKey} onOpenChange={onChangeActiveKey} openKeys={activeKey} mode="inline">
        {menuSider.map((item: IMenuSider) => {
          const { child, menu, icon } = item;
          return (
            <SubMenu key={menu.key} icon={icon} title={t(menu.title)}>
              {child.map((subMenu: IMenuItem) => (
                <Menu.Item key={subMenu.key}>
                  <a href={subMenu.url}>{t(subMenu.title)}</a>
                </Menu.Item>
              ))}
            </SubMenu>
          );
        })}
      </Menu>
    </Sider>
  );
};
