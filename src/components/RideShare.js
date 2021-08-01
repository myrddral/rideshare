import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Layout } from "antd";
import Welcome from "./Welcome";
import PrivateRoute from "./PrivateRoute";
import MyReservations from "./MyReservations";
import UpdateProfile from "./UpdateProfile";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import EventDetails from "./EventDetails";
import Logo from "../assets/logo-text.png";
import RideDetails from "./RideDetails";

const RideShare = () => {
  const { currentUser } = useAuth();
  const { Header, Content, Footer } = Layout;

  return (
    <Router>
      {currentUser !== null && (
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 0,
            color: "white",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <div className="logo">
          <img
            src={Logo}
            alt="logo"
            style={{
              width: 350,
              display: "block"
            }}
          />
          </div>
          <div>
            <small> Bejelentkezve, mint: {currentUser.email}</small>
          </div>
        </Header>
      )}
      <Layout>
        {currentUser !== null && <Sidebar />}
        <Content>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/reservations" component={MyReservations} />
            <PrivateRoute path="/profile" component={UpdateProfile} />
            <PrivateRoute path="/events/:id" component={EventDetails} />
            <PrivateRoute path="/rides/:id" component={RideDetails} />
            <Route path="/login" component={Welcome} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Content>
        <Footer
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            textAlign: "center",
          }}
        >
          RideShare - 2021
        </Footer>
      </Layout>
    </Router>
  );
};

export default RideShare;
