import React from 'react';
import { Route, Switch, useLocation, Redirect, useHistory } from 'react-router-dom';
import WineCellar from '../components/WineCellar/WineCellar';
import NewBottle from '../components/NewBottle/NewBottle';
import ListAddedBottle from '../components/ListAddedBottle/ListAddedBottle';
import Dashboard from '../components/Dashboard/Dashboard';
import CreateCellarsAndZones from '../components/CreateCellarsAndZones/CreateCellarsAndZones'
import Signup from "../components/Signup/Signup";
import PrivateRoute from "../Auth/PrivateRoute";
import TestLogin from "../components/Login/Login";
import Bottle from '../components/Bottle/Bottle';
function Routes(props) {
  return (
    // Switch: les Routes sont testés une par une, si et seulement si, l'url ne correspond pas
    // on passe a la route suivante.
    <Switch>
      {/* Sans l'attribut Exact, si l'url correspond a deux ..<Route>...</Route>, les deux composants seront chargés */}
      <PrivateRoute exact path="/">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute exact path="/create_cellar">
        <CreateCellarsAndZones />
      </PrivateRoute>
      <PrivateRoute exact path="/cave">
        <WineCellar />
      </PrivateRoute>
      <PrivateRoute exact path="/new_bottle">
        <NewBottle />
      </PrivateRoute>
      <PrivateRoute exact path="/liste">
        <ListAddedBottle />
      </PrivateRoute>
      <PrivateRoute exact path="/bottle">
        <Bottle />
      </PrivateRoute>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={TestLogin} />
    </Switch>
  )
}

export default Routes;