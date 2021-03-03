import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

function PrivateRoute({ children, path, redirect = "/login", exact = true }) {
  const { isauth } = React.useContext(AuthContext);
  //   console.log("hi");
  //   console.log(isauth);
  return isauth ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Redirect to={redirect} />
  );
}

export default PrivateRoute;
