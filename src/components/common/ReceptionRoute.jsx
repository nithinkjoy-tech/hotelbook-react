import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const ReceptionRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.getCurrentUser()?.isReception)
          return (
            <Redirect
              to={{
                pathname: "/reception/signin",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ReceptionRoute;
