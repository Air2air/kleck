import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";


import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Portfolio from "./pages/Portfolio";

const App = () => {
 

  return (
    <Router>
      <Header />
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path={"/mission"} component={Mission} />
          <Route path={"/portfolio"} component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
