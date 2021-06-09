import { Route, Redirect } from "react-router-dom";
import fakeAuth from "./fakeAuth";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route {...rest} render={({ location }) => {
      return fakeAuth.isAuthenticated === true
        ? children
        : <Redirect to={{
          pathname: '/login',
          state: { from: location }
        }} />
    }} />
  )
}

export default PrivateRoute;