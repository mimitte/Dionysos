import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import store from "../../redux/store";
import { getCellarsOfUser } from "../../redux/GetCellarsOfUser/getCellarsOfUser.action";
import { Modal } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function CellarCard(props) {
    const [show, setShow] = useState(false);

    const handleClose = (event) => {
        if (event) event.preventDefault();
        setShow(false)
    };

    const handleShow = (event) => {
        if (event) event.preventDefault();
        setShow(true)
    };

    const handleDelete = (event, cellarId) => {
        if (event) event.preventDefault();
        fetch(`http://localhost:5000/api/cellar/${cellarId}`, {
            method: 'DELETE'
        }).then( (response) => {
            setShow(false);
        }).catch( (error) => {
            console.log(error);
        });
    }

    const handleConfirm = (event, cellarId) => {
        if (event) {
            event.preventDefault();
            let name = event.target[0].value;
            let description = event.target[1].value
            fetch(`http://localhost:5000/api/cellar/${cellarId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name
                })
            }).then( (response) => {
                console.log('Cave bien modifiée :', response.json());
                setShow(false);
            }).catch( (error) => {
                console.log(error);
            });
        }
    }

    const { name, description, _id } = props.cellar;
    return (
        <>
            <div className="cellarCard">
                <div id="fields">
                    <h5>{ name }</h5>
                    <h6>{ description }</h6>
                </div>
                <div id="buttons">
                    <input
                        type="submit"
                        value="Modifier"
                        className="dio-btn dio-btn-info"
                        onClick={ (event) => handleShow(event)}/>
                    <input
                        type="submit"
                        value="Supprimer"
                        className="dio-btn dio-btn-danger"
                        onClick={ (event) => handleDelete(event, _id)}/>
                </div>
            </div>

            <Modal show={show} onHide={ (event) => handleClose(event) }>
                <Modal.Header>
                    <Modal.Title>{ name }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="submit" onSubmit={ (event) => handleConfirm(event, _id)}>
                        <div>
                            <label htmlFor="name">Nom</label><br/>
                            <input type="text" className="text" defaultValue={ name } />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label><br/>
                            <input type="text" className="text" defaultValue={ description } />
                        </div>
                        <input
                            type="submit"
                            className="dio-btn dio-btn-danger"
                            onClick={ (event) => handleClose(event)}
                            value="Annuler" />
                        <input
                            type="submit"
                            className="dio-btn dio-btn-success"
                            value="Valider" />
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

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
                    {this.props.cellarsOfUser.length == 0 &&
                    <h4>
                        Vous n'avez pas de cave, mais vous pouvez en
                        <NavLink to="/create_cellar_zones"> créer </NavLink>
                        une.
                    </h4>
                    }
                    {this.props.cellarsOfUser.map( (cellar) => {
                        return (
                            <CellarCard cellar={cellar}></CellarCard>
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