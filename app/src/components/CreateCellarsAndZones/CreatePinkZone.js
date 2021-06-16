import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { connect } from "react-redux";
import { createZoneAction } from '../../redux/CreateCellarsAndZones/createZone.action';

class CreatePinkZone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            rows:0,
            columns:7,
            isCheckedWhiteZone:false,
            color:"pink",
            user: localStorage.getItem('userId'),
            cellar:""
        };
    }
  
      handleChange = input => event =>{
        event.preventDefault();
        // console.log("voici les inputs",event.target.value);
        const valeurInput = event.target.type === "checkbox" ?
        !event.checked :
        event.target.value
        this.setState({
             [input]:valeurInput      
        })
    }
    handleSubmit =(event)=>{
        const { nextStep } =this.props;
        event.preventDefault();
        console.log("saisie via form creer zone ", event);
        this.props.createZoneAction(this.state);
         // message alert pour confirmer que la cave a bien été créée, redirection création zone
        confirmAlert({
            
            title:"Votre zone pour les vins Rosé a bien été créé.",
            message:"Voulez-vous créer une zone pour les vins blancs ?" ,
            buttons: [
                {
                label: 'Oui',
                onClick: () => this.props.nextStep()
                }
            ]
            
        })
        // Vider les input après la saisie
        this.setState = {
            isCheckedWhiteZone:false,  
            name:"",
            rows:0,
            columns:7,
            color:"",
            user:"",
            cellar:""
        };
    }
    render() {
        const { rows,cellar } = this.state;
        const { cellarsOfUser } = this.props;
        // console.log("ma liste de caves dans Pink zone", cellarsOfUser);
        return(
            <> 
             <h5 className="col-lg-4 col-md-4 col-sm-12 offset-4" >
                 Je crée une zone rosée pour ma cave ....
            </h5>
              <form 
                    onSubmit= { this.handleSubmit } id="formCreatePinkZone" className="col-lg-4 col-md-4 col-sm-12 offset-4"
             >
                  {/* zone rosé*/}
                  <div className="form-group mb-3">
                    <label>Sélectionnez une cave</label>
                    <select
                        onChange={this.handleChange('cellar')} 
                        value={cellar} 
                        className="form-control"
                    >
                         {
                            cellarsOfUser.map((cellar,index)=> 
                            <option 
                                key={index}
                                name="cellar"
                                value={cellar._id}
                            >
                                    {cellar.name}
                            </option>)
                        } 
                    </select>
                 </div>
                <div className="form-check">
                    <input 
                        className="form-check-input"
                        type="checkbox"
                        name="isCheckedPinkZone"
                        onChange={this.handleChange('isCheckedPinkZone')}
                        id="checkPinkWine"
                        // required
                    />
                    <label className="form-check-label" htmlFor="checkPinkWine">
                        <p className="pinkZone fw-bolder">
                            Cochez ici si vous souhaitez créer une zone pour les Rosé
                        </p>
                    </label>
                </div>
                <div className=" form-group mb-3 ">
                    <label htmlFor="name">Nom de votre zone (vous pouvez modifiez)</label>
                    <input 
                        type="text" 
                        name="name" 

                        onChange={ this.handleChange('name') }
                        className="form-control"  
                        required
                    />
                </div>
                <br />
                <div className="form-group slider-parent">
                    <label htmlFor="tailleZoneRose">Il y aura environ bouteilles dans votre zone ? </label>
                    <br />
                    <input 
                        type="range"
                        min="1"
                        max="21"
                        step="5"
                        name="rows"
                        value ={rows } 
                        onChange={ this.handleChange("rows")}
                        id="tailleZoneRose" 
                        className="custom-slider"
                    />
                    <br />
                    <p className="buble">
                        Vous pouvez mettre  xx bouteilles dans cette zone.
                    </p>
      
                </div>
                <br />
                <div className="btnWithStep">
                    {/* <button  
                    onClick= {this.back } 
                    id="btnPrevStep2"
                     className="form-control mt-2 mb-2 ">
                        « Précédent
                    </button> */}
                    <button 
                            type="submit"
                            id="btnSubmitPink" 
                            className="form-control mt-2 mb-2"
                    >
                         Créer ma zone 
                    </button>  
                </div>
                
            </form>
        </>
    );

    }
}

const mapStateToProps = (state)=>{
    return {
      ...state.getCellarsOfUserReducer
    }
  }
export default connect(mapStateToProps, (null, {createZoneAction}))(CreatePinkZone);