import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import DashboardMenu from '../DashboardMenu/DashboardMenu';

function Landing(props) {
    return (
        <React.Fragment>

            <h2>Bienvenue sur Dionysos !</h2>

            <Dashboard/>
            <DashboardMenu/>

        </React.Fragment>
    );
}

export default Landing;