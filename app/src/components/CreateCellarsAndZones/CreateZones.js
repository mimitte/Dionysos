import React from 'react';

// redux
import { connect } from "react-redux";
import { createCellar } from '../../redux/CreateCellarsAndZones/createCellar.action'

class CreateCellar extends React.Component {
    constructor(props) {
        super(props);
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
      }

    render() {
        
        const {  handleChange } = this.props  // const handleChange = this.props.handleChange
        return(
            <> 
             <h3 className="col-lg-4 col-md-4 col-sm-12 offset-4" >Je définie les zones de ma cave...</h3>
              <form className="col-lg-4 col-md-4 col-sm-12 offset-4" >
                  {/* zone vin rouge */}
                  <div className="form-check mb-3">
                    <input 
                        className="form-check-input"
                        type="checkbox"
                        name="isCheckedRedZone"
                        onChange={ handleChange('isCheckedRedZone')}
                        id="checkRedWine"
                        required
                    />
                    <label className="form-check-label" htmlFor="checkRedWine">
                        <h5 className="redZone">Zone pour les vins rouges</h5>
                    </label>
                </div>
                
                <div className="form-group">
                    <label htmlFor="tailleZoneRouge">Nombre de bouteilles de vins rouges</label>
                    <input 
                        type="number" 
                        name="capacityOfRedZone" 
                        onChange={ handleChange("capacityOfRedZone")}
                        id="tailleZoneRouge" 
                        className="form-control" 
                        placeholder="ex:40" 
                        required
                    />
                </div>
                <br />
                {/* zone rosé*/}
                <div className="form-check">
                    <input 
                        className="form-check-input"
                        type="checkbox"
                        name="isCheckedPinkZone"
                        onChange={handleChange('isCheckedPinkZone')}
                        id="checkPinkWine" required/>
                    <label className="form-check-label" htmlFor="checkPinkWine">
                        <h5 className="pinkZone">Zone pour les vins rosés</h5>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="tailleZoneRose">Nombre de bouteilles de rosés</label>
                    <input 
                        className="form-control"
                        type="number" 
                        name="capacityOfPinkZone" 
                        onChange={handleChange('capacityOfPinkZone')}
                        id="tailleZoneRose"  
                        placeholder="ex:40" 
                        required
                    />
                
                </div>
                <br />
                {/* zone vin blanc */}
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox"
                        name="isCheckedWhiteZone"
                        onChange={ handleChange('isCheckedWhiteZone') }
                        id="checkWhiteWine" 
                        required
                    />
                    <label className="form-check-label" htmlFor="checkWhitekWine">
                        <h5 className="whiteZone">Zone pour les vins blancs</h5>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="tailleZoneBlanc">Nombre de bouteilles de rosés</label>
                    <input 
                        type="number" 
                        name="capacityOfWhiteZone"
                        id="tailleZoneBlanc"
                        onChange={handleChange('capacityOfWhiteZone')}
                        className="form-control"
                         placeholder="ex:40" 
                         required
                    />
                </div>
                <div id="btnStep2">
                    <button  onClick= {this.back } id="btnPrev" className=" form-control mt-2 mb-2 ">
                        « back 
                    </button> 
                     <button type="submit" id="btnSubmit" className="form-control   mt-2 mb-2">
                         Créer ma cave
                     </button>  
                </div>
                
              </form>
            </>
        );
    }
}

export default connect(null, { createCellar })(CreateCellar);