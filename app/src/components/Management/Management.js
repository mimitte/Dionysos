import { Component } from 'react';
import { connect } from "react-redux";
import store from "../../redux/store";
import { getCellarsOfUser } from "../../redux/GetCellarsOfUser/getCellarsOfUser.action";

function CellarCard(props) {
    const cellar = props.cellar;
    return (
        <>
            <div className="cellarCard">
                <div>
                    <h5>{ cellar.name }</h5>
                    <h6>{ cellar.description }</h6>
                    <p>{ cellar.description }</p>
                </div>
            </div>
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
                <h3>Ma page de gestion</h3>
                <div className="container md">
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