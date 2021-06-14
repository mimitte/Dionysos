import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { connect } from "react-redux";
import { createZoneAction } from '../../redux/CreateCellarsAndZones/createZone.action';

class CreateRedZone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows:0,
            columns:7,
            isCheckedRedZone:false,
            color:"red",
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
        event.preventDefault();
        console.log("saisie via form creer zone ", event);
        this.props.createZoneAction(this.state);
         // message alert pour confirmer que la cave a bien été créée, redirection création zone
        confirmAlert({
            
            title:"Votre zone pour les vins Rouges a bien été créé.",
            message:"Voulez-vous créer une zone pour les vins Rosés? ?" ,
            buttons: [
                {
                label: 'Oui',
                onClick: () => this.props.nextStep()
                },
                // {
                //     label: 'Non',
                //     onClick: () => this.props.prevStep()
                //     },
            ]  
        })
        // Vider les input après la saisie
        this.setState = {
            isCheckedRedZone:false,  
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
        console.log("cellars of user from CreateRedZone", cellarsOfUser);
        
        return(
            <> 
             <h5 className="col-lg-4 col-md-4 col-sm-12 offset-4" >
                 Je crée une zone rouge  ....
            </h5>
              <form 
                    onSubmit={ this.handleSubmit}
                    id="formCreateRedZone"
                    className="col-lg-4 col-md-4 col-sm-12 offset-4" >
                  {/* zone vin rouge */}
                <div className="form-group mb-3">
                    <label htmlFor="selectCellars">Sélectionnez une cave</label>
                    <select onChange={ this.handleChange('cellar')} value={cellar} className="form-control" id="selectCellars">
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
                  <div className="form-check mb-3">
                    <input 
                        className="form-check-input"
                        type="checkbox"
                        name="isCheckedRedZone"
                        onChange={ this.handleChange('isCheckedRedZone')}
                        id="checkRedWine"
                        // required
                    />
                    <label className="form-check-label" htmlFor="checkRedWine">
                        <p className="redZone fw-bolder">
                            Cochez ici si vous souhaitez créer une zone pour les vins rouges
                        </p>
                    </label>
                </div>
                <div className=" form-group mb-3 ">
                    <label htmlFor="name">Nom de votre zone (vous pouvez modifiez)</label>
                    <input 
                        type="text" 
                        name="name" 
                        defaultValue="Mes superbes vins rouges"
                        onChange={ this.handleChange('name') }
                        className="form-control"
                        required
                    />
                  </div>
                
                <div className="form-group slider-parent">
                <label htmlFor="tailleZoneRouge">Il y aura combien de bouteilles environ ?  </label>
                <br />
                    <input 
                        type="range"
                        min="2"
                        max="21"
                        step="1"
                        name="rows"
                        value ={rows } 
                        onChange={ this.handleChange("rows")}
                        id="tailleZoneRouge" 
                    />
                    <div className="buble">
                    Vous pouvez mettre  { rows *7 } bouteilles dans cette zone
                    </div>
                    
                </div>
                <br />
                
                <div className="btnWithStep">
                    <button 
                            type="submit"
                            id="btnSubmit" 
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
export default connect(mapStateToProps, (null, {createZoneAction}))(CreateRedZone);