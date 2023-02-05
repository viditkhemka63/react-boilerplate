import React, { useState } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import { Layout, Menu, Avatar } from "antd";
import "./sidebar.scss";
import { useAuth } from "src/modules/auth/data/useAuth";
const { Sider } = Layout;

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

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}: SidebarProps) => {
  const { handleLogout } = useAuth();
  const [collapsed] = useState(true);

  return (
    <Sider
      collapsed={collapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
      }}
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
        <Dropdown
          placement="topLeft"
          menu={{ items: avatarMenuItems }}
          trigger={["click"]}
        >
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
  );
};

export default Sidebar;
