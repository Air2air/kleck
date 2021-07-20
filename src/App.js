import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserPage from "./pages/User";
import AdminPage from "./pages/Admin";

import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

const App = () => {
  //const [showAdminPage, setShowAdminPage] = useState(false);
  // const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  // useEffect(() => {
  //   if (currentUser) {
  //     setShowAdminPage(currentUser.roles.includes("ROLE_ADMIN"));
  //   }
  // }, [currentUser]);


  return (
    <Router history={history}>
      <Header />
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path={"/login"} component={Login} />
          <Route path={"/register"} component={Register} />
          <Route path={"/profile"} component={Profile} />
          <Route path={"/user"} component={UserPage} />
          <Route path={"/admin"} component={AdminPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
