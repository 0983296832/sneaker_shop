import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGlobleContext } from "../hooks/useGlobal";


export default function PrivateRoute({ component: Component, ...rest }) {
  const { displayName } = useGlobleContext();
 
  return (
    <Route
      {...rest}
      render={(props) => {
        return displayName ? (
          <Component {...props} />
        ) : (
          <>
            <Redirect to="/" />
          </>
        );
      }}
    ></Route>
  );
}
