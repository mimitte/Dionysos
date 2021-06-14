import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { connect } from "react-redux";
import { createZoneAction } from '../../redux/CreateCellarsAndZones/createZone.action';

class CreateWhiteZone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows:0,
            columns:7,
            isCheckedWhiteZone:false,
            color:"white",
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
            
            title:"Votre zone pour les vins blancs a bien été créé",
            message:"Voulez-vous revenir à la création de cave ?" ,
            buttons: [
                {
                label: 'Oui',
                onClick: () => this.props.prevStepLast()
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
        // console.log("mes cave dans White zone", cellarsOfUser);
    
        return(
            <> 
             <h5 className="col-lg-4 col-md-4 col-sm-12 offset-4" >
                 Je crée une zone Blanche pour ma cave..
            </h5>
              <form onSubmit= { this.handleSubmit } className="col-lg-4 col-md-4 col-sm-12 offset-4" >
                 
                <br />
                {/* zone vin blanc */}
                <div className="form-group mb-3">
                    <label>Sélectionnez une cave</label>
                    <select
                        onChange={this.handleChange('cellar')} 
                        value={cellar} 
                        className="form-control">
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
                        name="isCheckedWhiteZone"
                        onChange={ this.handleChange('isCheckedWhiteZone') }
                        id="checkWhiteWine" 
                        // required
                    />
                    <label className="form-check-label" htmlFor="checkWhitekWine">
                        <p className="whiteZone fw-bold">
                            Cochez ici si vous souhaitez créer une zone pour les vins blancs
                        </p>
                    </label>
                </div>
                <div className=" form-group mb-3 ">
                    <label htmlFor="name">Nom de votre zone (vous pouvez modifiez)</label>
                    <input 
                        type="text" 
                        name="name" 
                        defaultValue="Mes  vins Blancs"
                        onChange={ this.handleChange('name') }
                        className="form-control"  
                        required
                    />
                </div>

                <div className="form-group slider-parent">
                    <label htmlFor="tailleZoneBlanc">Il y aura combien de bouteilles environ ?</label>
                    <br />
                    <input 
                        type="range"
                        min="1"
                        max="21"
                        step="5"
                        name="rows"
                        value ={ rows } 
                        onChange={ this.handleChange("rows")}
                        id="tailleZoneRouge" 
                        className="custom-slider"
                    />
                    <p className="buble fw-bolder">
                        Vous pouvez mettre  {rows * 7} bouteilles dans cette zone
                    </p>
                </div>
                <br />
                <div className="btnWithStep">
                     <button 
                            type="submit"
                            id="btnSubmitWhite" 
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
export default connect(mapStateToProps, (null, {createZoneAction}))(CreateWhiteZone);