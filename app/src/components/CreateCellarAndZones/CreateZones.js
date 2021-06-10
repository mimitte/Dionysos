import React from 'react';

// redux
import { connect } from "react-redux";
import { createCellar } from '../../redux/CreateCellarsAndZones/createCellar.action'

class CreateCellar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cellar:"",
            isCheckedRedZone:false,
            isCheckedPinkZone:false,
            isCheckedWhiteZone:false,
            capacityOfRedZone:0,
            capacityOfPinkZone:0,
            capacityOfWhiteZone:0, 
        };
    }

    onSubmitCreateCellar = (event)=>{
        event.preventDefault();
        console.log("saisie via form creer cave", this.state);
        // newCellar cest l'ACTION CREATE_CELLAR'
       


        this.props.createCellar(this.state);
        // Vider les input après la saisie
        this.setState = {
            cellar:"",
            isCheckedRedZone:false,
            isCheckedPinkZone:false,
            isCheckedWhiteZone:false,
            capacityOfRedZone:0,
            capacityOfPinkZone:0,
            capacityOfWhiteZone:0,   
        };
    }

    render() {
        return(
            <>
              <h2>Je crée ma cave ...</h2>
              <form onSubmit={this.onSubmitCreateCellar}>
                 
                  <h5>Je définie les zones de ma cave...</h5>
                  {/* zone vin rouge */}
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox"
                     value={this.state.isCheckedRedZone}
                     onChange={(event)=>this.setState({ isCheckedRedZone: !event.checked })}
                      id="checkRedWine" required/>
                    <label className="form-check-label" htmlFor="checkRedWine">
                        <h5 className="redZone">Zone pour les vins rouges</h5>
                    </label>
                </div>
                
                <div className="form-group">
                    <label htmlFor="tailleZoneRouge">Nombre de bouteilles de vins rouges</label>
                    <input type="number" name="tailleZoneRouge" 
                    value={this.state.capacityOfRedZone}
                    onChange={(event)=>this.setState({ capacityOfRedZone: event.target.value})}
                    id="tailleZoneRouge" className="form-control" placeholder="ex:40" required/>
                </div>
                <br />
                {/* zone rosé*/}
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                     value={this.state.isCheckedPinkZone}
                     onChange={(event)=>this.setState({ isCheckedPinkZone: !event.checked })}
                      id="checkPinkWine" required/>
                    <label className="form-check-label" htmlFor="checkPinkWine">
                        <h5 className="pinkZone">Zone pour les vins rosés</h5>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="tailleZoneRose">Nombre de bouteilles de rosés</label>
                    <input type="number" name="tailleZoneRose" 
                    value={this.state.capacityOfPinkZone}
                    onChange={(event)=>this.setState({ capacityOfPinkZone: event.target.value})} id="tailleZoneRose" className="form-control" placeholder="ex:40" required/>
                
                </div>
                <br />
                {/* zone vin blanc */}
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" 
                    value={this.state.isCheckedWhiteZone}
                    onChange={(event)=>this.setState({ isCheckedWhiteZone: !event.checked })}
                    id="checkWhiteWine" required/>
                    <label className="form-check-label" htmlFor="checkWhitekWine">
                        <h5 className="whiteZone">Zone pour les vins blancs</h5>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="tailleZoneBlanc">Nombre de bouteilles de rosés</label>
                    <input type="number" name="tailleZoneBlanc" id="tailleZoneBlanc"
                    value={this.state.capacityOfWhiteZone}
                    onChange={ (event) => {
                        this.setState({ capacityOfWhiteZone: event.target.value })}}
                    id="tailleZoneBlanc" className="form-control" placeholder="ex:40" required/>
                </div>
                <button type="submit" id="btnSubmit" className="form-control mt-2 mb-2">Créer ma cave</button>   
              </form>
            </>
        );
    }
}

export default connect(null, { createCellar })(CreateCellar);