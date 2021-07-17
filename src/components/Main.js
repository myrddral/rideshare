import { useAuth } from "../contexts/AuthContext";
import { Layout } from "antd";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import UpdateProfile from "./UpdateProfile";
import MyReservations from "./MyReservations";
import {
  BrowserRouter as Switch,
  Route
} from "react-router-dom";

const Main = () => {
  const { Header, Content, Footer } = Layout;
  //navigation state is stored in local storage so it persists through reloads
  //navigation state is managed by the Sidebar component
  const { currentUser } = useAuth();
  return (
    <>
      <Header
        style={{
          padding: 0,
          paddingLeft: 20,
          paddingRight: 20,
          textAlign: "right",
        }}
      >
        <div>
          R I D E S H A R E
          <small> - Bejelentkezve, mint: {currentUser.email}</small>
        </div>
      </Header>
      <Layout>
        <Sidebar />
        <Content style={{ minHeight: "85vh" }}>
          <Switch>
            <Route path="/">
              <Dashboard /> 
            </Route>
            <Route path="/reservations">
              <MyReservations />
            </Route>
            <Route path="/profile">
              <UpdateProfile />
            </Route>
          </Switch>
        </Content>
        <Footer
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            textAlign: "center",
            background: "rgb(31, 31, 31)",
          }}
        >
          RideShare - 2021
        </Footer>
      </Layout>
    </>
  );
};

export default Main;
