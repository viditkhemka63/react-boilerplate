import React, { FC } from "react";
import { Layout, theme } from "antd";
import { Sidebar } from "./sidebar/sidebar";

import "./layout.scss";
const { Header, Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}
export const MainLayout: FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

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
      </Layout>
    </Layout>
  );
};
