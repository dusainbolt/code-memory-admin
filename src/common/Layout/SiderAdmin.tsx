import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import React, { ReactNode, useState } from 'react';
import { DesktopOutlined, PieChartOutlined, FileOutlined } from '@ant-design/icons';
import AntImage from '../Image/AntImage';
import LogoSider from '../../asset/image/logo_header.webp';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useTranslation } from 'react-i18next';
import { ROUTE } from '../../appRoutes';

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

const menuSider: IMenuSider[] = [
  {
    menu: {
      title: 'menu.blog',
      key: 'blog',
    },
    icon: <PieChartOutlined />,
    child: [
      {
        title: 'menu.blog_child_list',
        key: ROUTE.BLOG_ADD,
        url: ROUTE.BLOG_ADD,
      },
      {
        title: 'menu.blog_child_list',
        key: ROUTE.BLOG_LIST,
        url: ROUTE.BLOG_LIST,
      },
    ],
  },
  {
    menu: {
      title: 'menu.tag',
      key: 'tag',
    },
    icon: <PieChartOutlined />,
  },
];

export const SiderAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onCollapsed = () => {
    setCollapsed(state => !state);
  };

  return (
    <Sider trigger={null} className="sider" collapsible collapsed={collapsed} onCollapse={onCollapsed}>
      <AntImage src={LogoSider} wrapperClassName="logo-slider center-block" />
      <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
        {menuSider.map((item: IMenuSider) => {
          const { child, menu, icon } = item;
          return !!child?.length ? (
            <SubMenu key={menu.key} icon={icon} title={t(menu.title)}>
              {child.map((subMenu: IMenuItem) => (
                <Menu.Item key={subMenu.key}>
                  <a href={subMenu.url}>{t(subMenu.title)}</a>
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={menu.key} icon={icon}>
              {t(menu.title)}
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};
