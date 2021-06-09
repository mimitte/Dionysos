import React from 'react';
import { Route, Switch, useLocation, Redirect, useHistory } from 'react-router-dom';
import WineCellar from '../components/WineCellar/WineCellar';
import NewBottle from '../components/NewBottle/NewBottle';
import ListAddedBottle from '../components/ListAddedBottle/ListAddedBottle';
import Dashboard from '../components/Dashboard/Dashboard';
import CreateCellarsAndZones from '../components/CreateCellarsAndZones/CreateCellarsAndZones'
import Signup from "../components/Signup/Signup";
import Protected from "../components/Protected/Protected";
import PrivateRoute from "../Auth/PrivateRoute";
import fakeAuth from "../Auth/fakeAuth";
import TestLogin from "../components/Login/Login";

function Login() {
  const [
    redirectToReferrer,
    setRedirectToReferrer
  ] = React.useState(false)

  const { state } = useLocation()

  const login = () => fakeAuth.authenticate(() => {
    setRedirectToReferrer(true)
  })

  if (redirectToReferrer === true) {
    return <Redirect to={state?.from || '/'} />
  }

  return (
    <div>
      <p>You must log in to view the page</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}

function AuthButton () {
  const history = useHistory()

  return fakeAuth.isAuthenticated === true
    ? <p>
      Welcome! <button onClick={() => {
      fakeAuth.signout(() => history.push('/'))
    }}>Sign out</button>
    </p>
    : <Login />
}

function Routes(props) {
  return (
    // Switch: les Routes sont testés une par une, si et seulement si, l'url ne correspond pas
    // on passe a la route suivante.
    <Switch>
      {/* Sans l'attribut Exact, si l'url correspond a deux ..<Route>...</Route>, les deux composants seront chargés */}
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/create_cellar" component={CreateCellarsAndZones}/>
      <Route exact path="/cave" component={WineCellar}/>
      <Route exact path="/new_bottle" component={ NewBottle }/>
      <Route exact path="/liste" component={ListAddedBottle}/>
      <PrivateRoute path="/protected">
        <Protected />
      </PrivateRoute>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={TestLogin} />
    </Switch>
  )
}

export default Routes;