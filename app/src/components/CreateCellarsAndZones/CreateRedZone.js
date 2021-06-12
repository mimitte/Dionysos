import React from 'react';

class CreateRedZone extends React.Component {
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
                  {/* zone vin rouge */}
                  <div className="form-check mb-3">
                    <input 
                        className="form-check-input"
                        type="checkbox"
                        name="isCheckedRedZone"
                        onChange={ handleChange('isCheckedRedZone')}
                        id="checkRedWine"
                        // required
                    />
                    <label className="form-check-label" htmlFor="checkRedWine">
                        <h5 className="redZone">Zone pour les vins rouges</h5>
                    </label>
                </div>
                
                <div className="form-group">
                    <label htmlFor="tailleZoneRouge">Nombre de bouteilles de vins rouges</label>
                    <input 
                        type="number" 
                        name="nbBottles"
                        value ={ nbBottles } 
                        onChange={ handleChange("nbBottles")}
                        id="nbBottles" 
                        className="form-control" 
                        placeholder="ex:40" 
                        // required
                    />
                </div>
                <div>Vous pouvez mettre </div>
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

export default CreateRedZone;