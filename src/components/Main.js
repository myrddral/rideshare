import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import UpdateProfile from "./UpdateProfile";
import MyReservations from "./MyReservations";
import { Layout } from "antd";
import useLocalStorage from "../useLocalStorage";
import { useAuth } from "../contexts/AuthContext";


const Main = () => {
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
        <Content style={{ paddingTop: 20, paddingLeft: 20, minHeight: "85vh" }}>
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
