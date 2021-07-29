import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import { Row, Col } from "antd";
// import { Alert } from "antd";
import Logo from "../assets/logo-big.png";

export default function Welcome() {
  const [action, setAction] = useState("login");

  return (
    <>
      <Row justify="center">
        <Col span={12}>
          <img
            src={Logo}
            alt="logo"
            style={{
              display: "block",
              color: "white",
              width: "100%",
              maxWidth: 320,
              height: "auto",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={12}>
          {action === "login" && <Login />}
          {action === "signup" && <Signup />}
          {action === "forgot" && <ForgotPassword />}
        </Col>
      </Row>
      {action === "login" && <p style={{ padding: 10, textAlign: "center" }}>
        Nincs még fiókod?{" "}
        <span style={{ cursor: "pointer", color: "#1890ff" }} onClick={() => setAction("signup")}>
          Regisztrálj!
        </span>
      </p>}
      {action === "login" && <p
        style={{ cursor: "pointer", textAlign: "center", color: "#1890ff"}}
        onClick={() => setAction("forgot")}
      >
        Elfelejtett jelszó?
      </p>}
      {action === "signup" && <p style={{ padding: 10, textAlign: "center" }}>
        Van fiókom! {" "}
        <span style={{ cursor: "pointer", color: "#1890ff" }} onClick={() => setAction("login")}>
          Bejelentkezek!
        </span>
      </p>}
    </>
  );
}
