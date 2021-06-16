import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { connect } from "react-redux";
import { createZoneAction } from '../../redux/CreateCellarsAndZones/createZone.action';

class CreateRedZone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
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
        console.log("voici les inputs",event.target.value);
        const valeurInput = event.target.type === "checkbox" ?
        !event.checked :
        event.target.value
        this.setState({
             [input]:valeurInput      
        })
    }
    handleSubmit =(event)=>{
        event.preventDefault();
        console.log("saisie via form creer zone ", this.state);
       
        this.props.createZoneAction(this.state);
         // message alert pour confirmer que la cave a bien été créée, redirection création zone
        confirmAlert({
            
            title:"Votre zone pour les vins Rosés a bien été créé.",
            message:"Voulez-vous créer une zone pour les vins Blancs ?" ,
            buttons: [
                {
                label: 'Oui',
                onClick: () => this.props.nextStep()
                },
                {
                    label: 'Non',
                    onClick: () => this.props.prevStep()
                    },
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
    componentDidMount () {
        const
            range = document.getElementById('range'),
            rangeV = document.getElementById('rangeV'),
        setValue = ()=>{
            const
                newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
                newPosition = 10 - (newValue * 0.2);
                rangeV.innerHTML = `<span>${range.value}</span>`;
                rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
                console.log(range);
        };
        document.addEventListener("DOMContentLoaded", setValue);
        range.addEventListener('input', setValue);
        // on appelle ici pour que ça s'exécutes sans qu'on recharge la page
        // this.props.getCellarsOfUser();
    }
    
    render() {
        
        const { rows,cellar,name } = this.state;
        // objet qui contient toute la liste de caves
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
                    <select onChange={ this.handleChange('cellar')} value={cellar}  id="selectCellars">
                        {
                            cellarsOfUser.reverse().map((cellar,index)=> 
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
                    <br />
                    <input 
                        type="text" 
                        name="name" 
                        // defaultValue="Mes superbes vins rouges"
                        value={ name }
                        onChange={ this.handleChange('name') }
                        className="form-control"
                    />
                </div>
                
            <div className="form-group slider-parent">
                <label htmlFor="tailleZoneRouge">La colonne de votre zone est 7, définissez le nombre de ranger que vous souhaitez?  </label>
                <br />
                <div className="slidecontainer range-wrap">
                    <div className="range-value" id="rangeV"></div>   
                        <input 
                            type="range"
                             min="2"
                             max="20"
                            value={ rows }
                            step="1"
                            onChange={ this.handleChange("rows") }
                            className="slider"
                             id="range"/>
                    <div className="nbBouteilles">
                        Vous pouvez mettre  { rows *7 } bouteilles dans cette zone
                    </div>
                </div>
            </div>    
                    
                {/* </div> */}
                <br />
               
                <div className="btnWithStep">
                    <button 
                            type="submit"
                            id="btnSubmit" 
                            className="form-control mt-2 mb-2"
                    >
                         Créer ma zone 
                     </button>
                    <button  
                           id="prevStep"
                           onClick= { this.props.prevStep } 
                          className="form-control mt-2 mb-2 "
                    >
                        Annuler
                    </button> 
                </div> 
                
              </form>
            </>
        );
    }
}
// c'est pour prendre le state du reducer pour mettre en props de ce composant
const mapStateToProps = (state)=>{
    return {
      ...state.getCellarsOfUserReducer
    }
  }
export default connect(mapStateToProps,(null, {createZoneAction}))(CreateRedZone);