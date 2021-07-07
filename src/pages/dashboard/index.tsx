import React from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export const DashBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle =()=>{
    setCollapsed(!collapsed)
  }
  return (
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
             Users
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
             Post
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Demo smt
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
  )
}
