import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WineCellar from '../components/WineCellar/WineCellar';
import NewBottle from '../components/NewBottle/NewBottle';
import ListAddedBottle from '../components/ListAddedBottle/ListAddedBottle';
import Dashboard from '../components/Dashboard/Dashboard';
import Signup from '../components/Signup/Signup';
import PrivateRoute from '../Auth/PrivateRoute';
import TestLogin from '../components/Login/Login';
import Management from '../components/Management/Management';
import CreateCellar from "../components/CreateCellarsAndZones/CreateCellar";
import CreateCellarsAndZones from "../components/CreateCellarsAndZones/CreateCellarsAndZones";

function Routes(props) {
    return (
        <Switch>
            {/* Sans l'attribut Exact, si l'url correspond a deux ..<Route>...</Route>, les deux composants seront chargés */}
            <PrivateRoute exact path='/'>
                <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path='/cave'>
                <WineCellar />
            </PrivateRoute>
            <PrivateRoute exact path='/new_bottle'>
                <NewBottle />
            </PrivateRoute>
            <PrivateRoute exact path='/liste'>
                <ListAddedBottle />
            </PrivateRoute>
            <PrivateRoute exact path='/create_cellar_zones'>
                <CreateCellarsAndZones />
            </PrivateRoute>
            <PrivateRoute  exact path='/management'>
                <Management />
            </PrivateRoute>
            <Route path='/signup' component={Signup}/>
            <Route path='/login' component={TestLogin} />
        </Switch>
    )
}

export default Routes;