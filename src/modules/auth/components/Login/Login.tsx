import { FC } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.scss";
import { useAuth } from "../../data/useAuth";

export interface LoginProps {}

export const LoginPage: FC<LoginProps> = (props: LoginProps) => {
  const { handleLogin, loginState } = useAuth();

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
    await handleLogin(values.email, values.password);
  };

  return (
    <div className="login-page">
      <div className="form-section">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              type="email"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              loading={loginState.isLoading}
              type="primary"
              htmlType="submit"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
