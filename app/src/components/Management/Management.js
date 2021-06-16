import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import store from "../../redux/store";
import { getCellarsOfUser } from "../../redux/GetCellarsOfUser/getCellarsOfUser.action";
import { NavLink } from "react-router-dom";
import CellarCard from '../CellarCard/CellarCard';

class Management extends Component {

    constructor(props) {
        super(props);
        store
            .dispatch(getCellarsOfUser())
            .then( (response) => console.log(response))
            .catch( (error) => console.log(error));
        this.state = {

        }
    }

    render() {
        console.log(this.props.cellarsOfUser);
        return (
            <>
                <div className="container md">
                    <h3>Mes caves</h3>
                    <NavLink to="/create_cellar_zones">créer une cave</NavLink>
                    {this.props.cellarsOfUser.map( (cellar, index) => {
                        return (
                            <CellarCard id={ index } cellar={ cellar }></CellarCard>
                        )
                    })}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.getCellarsOfUserReducer
    }
}

export default connect(mapStateToProps, (null, {})) (Management);