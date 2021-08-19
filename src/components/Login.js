import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function Login() {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onFinish = async (values) => {
    try {
      setError("");
      setLoading(true);
      await login(values.username, values.password);
      history.push("/");
    } catch (e) {
      setError(`Sikertelen bejelentkezés: ${e.message}`);
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {error && <Alert style={{ maxWidth: 300, margin: "auto", marginBottom: 25 }} message={error} type="warning" />}
      <Form
        style={{ maxWidth: 300, margin: "auto" }}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Add meg az email címed!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email cím"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Add meg a jelszavad!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Jelszó"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
            loading={loading}
          >
            Bejelentkezés
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
