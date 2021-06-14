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
              <form  id="formCreatePinkZone" className="col-lg-4 col-md-4 col-sm-12 offset-4">
                  {/* zone rosé*/}
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
                        name="isCheckedPinkZone"
                        // onChange={handleChange('isCheckedPinkZone')}
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
                        defaultValue="Mes  vins Rosé"
                        // onChange={ handleChange('name') }
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
                        // value ={rows } 
                        // onChange={ handleChange("rows")}
                        id="tailleZoneRose" 
                        className="custom-slider"
                    />
                    <br />
                    <p className="buble">
                        Vous pouvez mettre  xx bouteilles dans votre zone Rosé
                    </p>
      
                </div>
                <br />
                <div className="btnWithStep">
                    <button  
                    onClick= {this.back } 
                    id="btnPrevStep2"
                     className="form-control mt-2 mb-2 ">
                        « Précédent
                    </button>
                    <button 
                            type="submit"
                            id="btnSubmitPink" 
                            className="form-control mt-2 mb-2"
                    >
                         Créer ma zone 
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