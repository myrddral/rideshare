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
import RideDetails from "./RideDetails";
import AddRide from "./AddRide";
import Logo from "../assets/logo-text.png";

const RideShare = () => {
  const { currentUser } = useAuth();
  const { Header, Content } = Layout;

  return (
    <Router>
      {currentUser !== null && (
        <Header
          style={{
            // display: "flex",
            // justifyContent: "space-between",
            // color: "white",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <img className="logo" src={Logo} alt="logo"/>
        </Header>
      )}
      <Layout>
        {currentUser !== null && <Sidebar />}
        <Content>
          <div style={{height: "calc(100vh - 64px)"}} className="container">
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/reservations" component={MyReservations} />
            <PrivateRoute path="/profile" component={UpdateProfile} />
            <PrivateRoute path="/events/:id" component={EventDetails} />
            <PrivateRoute exact path="/rides/new" component={AddRide} />
            <PrivateRoute path="/rides/:id" component={RideDetails} />
            <Route path="/login" component={Welcome} />
            <Route path="*" component={NotFound} />
          </Switch>
          </div>
        </Content>
        {/* <Footer
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            textAlign: "center",
          }}
        >
          RideShare - 2021
        </Footer> */}
      </Layout>
    </Router>
  );
};

export default RideShare;
