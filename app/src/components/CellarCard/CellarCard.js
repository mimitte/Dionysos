import { useState } from "react";
import { Modal } from "react-bootstrap";

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
                console.log(response.status);
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

            <Modal className="dio-modal" show={show} onHide={ (event) => handleClose(event) }>
                <Modal.Header id="dio-modal-header">
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

export default CellarCard;