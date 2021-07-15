import { useAuth } from "../contexts/AuthContext";
import { Layout } from "antd";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import UpdateProfile from "./UpdateProfile";
import MyReservations from "./MyReservations";
import useLocalStorage from "../useLocalStorage";
import { BrowserRouter as Switch, Route, useRouteMatch } from "react-router-dom";



const Main = () => {
  let { path, url } = useRouteMatch();
  const { Header, Content, Footer } = Layout;
  //navigation state is stored in local storage so it persists through reloads
  //navigation state is managed by the Sidebar component
  const [navState, setNavState] = useLocalStorage("navState", "mainpage");
  const { currentUser } = useAuth();
  return (
    <>
      <Header style={{ padding: 0, paddingLeft: 20, paddingRight: 20, textAlign: "right" }}>
        <div>R I D E S H A R E<small> - Bejelentkezve, mint: {currentUser.email}</small></div>
      </Header>
      <Layout>
        <Sidebar setNavState={setNavState} />
        <Content style={{ minHeight: "85vh" }}>
          {navState === "mainpage" && <Dashboard />}
          {navState === "reservations" && <MyReservations />}
          {navState === "profile" && <UpdateProfile />}
        </Content>
        <Footer
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            textAlign: "center",
            background: "rgb(31, 31, 31)"
          }}
        >
          RideShare - 2021
        </Footer>
      </Layout>
    </>
  );
};

export default Main;