import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";
import PrivateRoute from "./PrivateRoute";
import MyReservations from "./MyReservations";
import UpdateProfile from "./UpdateProfile";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import { useAuth } from "../contexts/AuthContext";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import EventDetails from "./EventDetails";

const RideShare = () => {
  const { currentUser } = useAuth();
  const { Header, Content, Footer } = Layout;

  return (
    <Router>
      {currentUser !== null && (
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
      )}
      <Layout>
        {currentUser !== null && <Sidebar />}
        <Content>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/reservations" component={MyReservations} />
            <PrivateRoute path="/profile" component={UpdateProfile} />
            <PrivateRoute path="/events/:id" component={EventDetails} />
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
