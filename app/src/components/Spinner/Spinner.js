import React,{Component} from 'react';
import { connect } from 'react-redux';
import loader from '../../images/loading.gif';
class Spinner extends Component {
    state = { }
    render(){
        return (
            <div className="loader-container">
                <div className="loader">
                    <img src={loader} alt="spinner de chargement" />
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({...state.bottlesCellarReducer});
export default connect(mapStateToProps);
