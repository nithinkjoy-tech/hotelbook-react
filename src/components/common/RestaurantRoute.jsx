import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const RestaurantRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.getCurrentUser()?.isRestaurant)
          return (
            <Redirect
              to={{
                pathname: "/restaurant/signin",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default RestaurantRoute;
