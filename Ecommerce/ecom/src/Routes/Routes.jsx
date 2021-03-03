import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../Components/About";
import Career from "../Components/Career";
import Cart from "../Components/Cart";
import Contact from "../Components/Contact";
import Faq from "../Components/Faq";
import Home from "../Components/Home";
import Laptop from "../Components/Laptop";
import Login from "../Components/Login";
import Men from "../Components/Men";
import Mobile from "../Components/Mobile";
import PrivateRoute from "../Components/PrivateRoute";
import Productdetails from "../Components/Productdetails";
import Women from "../Components/Women";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/men">
          <Men />
        </Route>
        <Route exact path="/women">
          <Women />
        </Route>
        <Route exact path="/laptop">
          <Laptop />
        </Route>
        <Route exact path="/mobile">
          <Mobile />
        </Route>
        <PrivateRoute redirect="/login" exact path="/cart">
          <Cart />
        </PrivateRoute>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/career">
          <Career />
        </Route>
        <Route exact path="/:pro/:userid">
          <Productdetails />
        </Route>
      </Switch>
    </div>
  );
}
