import React, { useState } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import { Layout, Menu, theme, Avatar } from "antd";
import "./sidebar.scss";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const avatarMenuItems: MenuItem[] = [
  getItem("Logout", "1", <LogoutOutlined />),
];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const sidebarMenuList: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
];

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }: SidebarProps) => {
  const [collapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
        }}

        // onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <div className="sidebar-content-wrapper">
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={sidebarMenuList}
          />
          <Dropdown menu={{ items: avatarMenuItems }} trigger={["click"]}>
            <div className="avatar-wrapper">
              <Avatar
                style={{
                  background: "#000",
                }}
                size={{ xs: 12, sm: 16, md: 20, lg: 32, xl: 40, xxl: 50 }}
              >
                V
              </Avatar>
            </div>
          </Dropdown>
        </div>
      </Sider>
      <Layout className="layout-main">
        <Header
          style={{ padding: 0, color: "#fff", background: colorBgContainer }}
        >
          <div className="header">
            <div className="title">Cockpit View</div>
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
