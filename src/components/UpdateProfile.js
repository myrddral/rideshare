import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

export default function UpdateProfile() {
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onFinish = async (values) => {
    if (values.password !== values.passwordConf) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    console.log(values);

    if (values.email !== currentUser.email) {
      promises.push(updateEmail(values.email));
    }
    if (values.password) {
      promises.push(updatePassword(values.password));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2>Profilom</h2>
        </Col>
      </Row>
      {error && <Alert message={error} type="warning" />}
      <Form
        style={{ maxWidth: 300 }}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          // defaultValue={currentUser.email}
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
        <Form.Item
          name="passwordConf"
          rules={[{ required: true, message: "Add meg a jelszavad ismét!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Jelszó ismét"
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
            Adatok frissítése
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
