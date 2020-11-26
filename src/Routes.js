import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./Component/SignUp/SignUp";
import Home from "./Pages/Store/Home/Home";
import Login from "./Component/Login/Login";
import Ootd from "./Pages/Ootd/Ootd";
import Cart from "./Component/Cart/Cart";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import SearchPage from "./Component/SearchPage/SearchPage";
import Unisex from "./Pages/Store/Unisex/Unisex";
import NavbarOotd from "./Common/Navbar/NavbarOotd/NavbarOotd";
import NavbarStore from "./Common/Navbar/NavbarStore/NavbarStore";
// import Login from "./Component/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route exact path="/NavbarOotd" component={NavbarOotd} />
          <Route exact path="/NavbarStore" component={NavbarStore} />
          <Route exact path="/Ootd" component={Ootd} />
          {/* <Route exact path="/Ootd/Main" component={Main} /> */}
          <Route exact path="/NavbarOotd" component={NavbarOotd} />
          <Route exact path="/NavbarStore" component={NavbarStore} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/ProductDetail" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
