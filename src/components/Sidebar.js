import {
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  CarOutlined,
} from "@ant-design/icons";
import { useAuth } from "../contexts/AuthContext";
import { useHistory, NavLink } from "react-router-dom";
import { useState } from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

const Sidebar = (props) => {
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
      console.log(`Error: ${error}`);
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
          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
          >
            <NavLink to="/" className="nav-text">
              Főoldal
            </NavLink>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<CarOutlined />}
          >
            <NavLink to="/reservations" className="nav-text">
              Foglalásaim
            </NavLink>
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<UserOutlined />}
          >
            <NavLink to="/profile" className="nav-text">
              Profilom
            </NavLink>
          </Menu.Item>
          <Menu.Item onClick={handleLogout} key="4" icon={<LogoutOutlined />}>
            Kijelentkezés
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
