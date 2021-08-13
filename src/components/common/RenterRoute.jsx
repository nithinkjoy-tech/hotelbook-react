import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const RenterRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.getCurrentUser()?.isRenter)
          return (
            <Redirect
              to={{
                pathname: "/renter/signin",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default RenterRoute;
