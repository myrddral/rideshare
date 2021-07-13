import {HomeOutlined, UserOutlined, LogoutOutlined, CarOutlined } from "@ant-design/icons";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

const Sidebar = (props) => {
  const { setNavState } = props
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();
  
  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Sikertelen kijelentkezés");
      console.log(`Error: ${error}`)
    }
  };
  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item  onClick={() => setNavState("mainpage")} key="1" icon={<HomeOutlined />}>Főoldal</Menu.Item>
          <Menu.Item  onClick={() => setNavState("reservations")} key="2" icon={<CarOutlined />}>Foglalásaim</Menu.Item>
          <Menu.Item  onClick={() => setNavState("profile")} key="3" icon={<UserOutlined />}>Profilom</Menu.Item>
          <Menu.Item onClick={handleLogout} key="4" icon={<LogoutOutlined />}>Kijelentkezés</Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
