import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import React, { useState } from 'react';
import { DesktopOutlined, PieChartOutlined, FileOutlined } from '@ant-design/icons';
import AntImage from '../Image/AntImage';
import LogoSider from '../../asset/image/logo_header.webp';

export const SiderAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapsed = () => {
    setCollapsed(state => !state);
  };

  return (
    <Sider trigger={null} className="sider" collapsible collapsed={collapsed} onCollapse={onCollapsed}>
      <AntImage src={LogoSider} wrapperClassName="logo-slider center-block" />
      <Menu defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
