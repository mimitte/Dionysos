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
                <div className="form-group mb-3">
                    <label>Sélectionnez une cave</label>
                    <select  className="form-control">
                        <option>Lorem </option>
                        <option>Ipsum</option>      
                    </select>
                 </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox"
                        name="isCheckedWhiteZone"
                        // onChange={ handleChange('isCheckedWhiteZone') }
                        id="checkWhiteWine" 
                        // required
                    />
                    <label className="form-check-label" htmlFor="checkWhitekWine">
                        <p className="whiteZone">
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
                        // onChange={ handleChange('name') }
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
                        // value ={rows } 
                        // onChange={ handleChange("rows")}
                        id="tailleZoneRouge" 
                        className="custom-slider"
                    />
                    <p className="buble fw-bolder">
                        Vous pouvez mettre  xx bouteilles
                    </p>
                </div>
                <br />
                <div className="btnWithStep">
                    <button  
                        onClick= {this.back }
                         id="btnPrev"
                        className="form-control mt-2 mb-2">
                        « Précédent
                    </button> 
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

export default CreateWhiteZone;