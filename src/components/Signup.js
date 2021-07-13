import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { Form, Input, Button } from "antd";
import { Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function Signup() {
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const onFinish = async (values) => {
    if (values.password !== values.passwordConf) {
      return setError("A megadott jelszó nem egyezik")
    }

      setError("")
      setLoading(true)
      await signup(values.username, values.password)
      setLoading(false)
      history.push("/")
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setError("Nem sikerült létrehozni a fiókot")
  };


  return (
    <>
    {error && <Alert message={error} type="warning" />}
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
              Regisztráció
            </Button>
          </Form.Item>
        </Form>

      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div> */}
    </>
  )
}