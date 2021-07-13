import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./NotFound";
import Main from "./Main";
// import { useAuth } from "../contexts/AuthContext"

const RideShare = () => {
  // const { currentUser } = useAuth()
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Main} />
          <Route exact path="/login" component={Welcome} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default RideShare;
