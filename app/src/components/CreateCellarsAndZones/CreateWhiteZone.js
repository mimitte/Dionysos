import React from 'react';

class CreateWhiteZone extends React.Component {
    constructor(props) {
        super(props);
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
      }

    render() {
        
        const {  handleChange, handleSubmit,nbBottles } = this.props  // const handleChange = this.props.handleChange
        return(
            <> 
             <h5 className="col-lg-4 col-md-4 col-sm-12 offset-4" >
                 Je crée une zone Blanche pour ma cave..
            </h5>
              <form onSubmit= { handleSubmit } className="col-lg-4 col-md-4 col-sm-12 offset-4" >
                 
                <br />
                {/* zone vin blanc */}
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox"
                        name="isCheckedWhiteZone"
                        onChange={ handleChange('isCheckedWhiteZone') }
                        id="checkWhiteWine" 
                        // required
                    />
                    <label className="form-check-label" htmlFor="checkWhitekWine">
                        <h5 className="whiteZone">Zone pour les vins blancs</h5>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="tailleZoneBlanc">Nombre de bouteilles de rosés</label>
                    <input 
                        type="number" 
                        name="nbBottles"
                        id="tailleZoneBlanc"
                        value ={nbBottles}
                        onChange={handleChange('nbBottles}')}
                        className="form-control"
                        placeholder="ex:40" 
                        // required
                    />
                </div>
                <div className="btnWithStep">
                    <button  
                        onClick= {this.back }
                         id="btnPrev"
                        className="form-control mt-2 mb-2">
                        « back 
                    </button> 
                     <button 
                            type="submit"
                            id="btnSubmit" 
                            className="form-control mt-2 mb-2"
                    >
                         Créer mes zones
                     </button>  
                </div>
                
              </form>
            </>
        );
    }
}

export default CreateWhiteZone;