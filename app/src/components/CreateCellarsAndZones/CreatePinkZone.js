import React from 'react';

class CreatePinkZone extends React.Component {
    constructor(props) {
        super(props);
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
      }
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
      }

    render() {
        
        const {  handleChange, nbBottles} = this.props
        
        return(
            <> 
             <h5 className="col-lg-4 col-md-4 col-sm-12 offset-4" >
                 Je crée une zone rouge pour ma cave ....
            </h5>
              <form  id="formCreateRedZone" className="col-lg-4 col-md-4 col-sm-12 offset-4" >
                  {/* zone rosé*/}
                <div className="form-check">
                    <input 
                        className="form-check-input"
                        type="checkbox"
                        name="isCheckedPinkZone"
                        onChange={handleChange('isCheckedPinkZone')}
                        id="checkPinkWine"
                        // required
                    />
                    <label className="form-check-label" htmlFor="checkPinkWine">
                        <h5 className="pinkZone">Zone pour les vins rosés</h5>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="tailleZoneRose">Nombre de bouteilles de rosés</label>
                    <input 
                        className="form-control"
                        type="number" 
                        value ={ nbBottles } 
                        onChange={ handleChange("nbBottles")}
                        id="tailleZoneRose"  
                        placeholder="ex:40" 
                        // required
                    />
                
                </div>
                <br />
                <div className="btnWithStep">
                    <button  
                    onClick= {this.back } 
                    id="btnPrevStep2"
                     className="form-control mt-2 mb-2 ">
                        « Précédent
                    </button> 
                    <button  onClick= {this.continue } id="btnNextStep2" className=" form-control mt-2 mb-2 ">
                   Etape suivante »
                </button> 

                </div>
                
              </form>
            </>
        );
    }
}

export default CreatePinkZone;