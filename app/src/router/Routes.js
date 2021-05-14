import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bottle from '../components/Bottle/Bottle';
import Landing from '../components/Landing/Landing';
import NewBottle from '../components/NewBottle/NewBottle';

function Routes(props) {
    return (
        // Switch: les Routes sont testés une par une, si et seulement si, l'url ne correspond pas
        // on passe a la route suivante.
        <Switch>
            {/* Sans l'attribut Exact, si l'url correspond a deux ..<Route>...</Route>, les deux composants seront chargés */}
            <Route exact path="/" component={ Landing }/>
            <Route exact path="/new_bottle" component={NewBottle} />
            <Route exact path="/bottle" component={ Bottle }/>
        </Switch>
    )
}

export default Routes;