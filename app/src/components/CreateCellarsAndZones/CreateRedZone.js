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
        // const {cellarsOfUser} = this.props
        // console.log("cellars of user", cellarsOfUser);
        this.props.nextStep();
      }
     
    render() {
        
        const {  handleChange, cellarsOfUser,name,rows,cellar} = this.props;
        console.log("cellars of user", cellarsOfUser);
        
        return(
            <> 
             <h5 className="col-lg-4 col-md-4 col-sm-12 offset-4" >
                 Je crée une zone rouge  ....
            </h5>
              <form 
                    onSubmit={this.props.handleSubmitForCreateZone}
                    id="formCreateRedZone"
                    className="col-lg-4 col-md-4 col-sm-12 offset-4" >
                  {/* zone vin rouge */}
                <div className="form-group mb-3">
                    <label htmlFor="selectCellars">Sélectionnez une cave</label>
                    <select onChange={ handleChange('cellar')} value={cellar} className="form-control" id="selectCellars">
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
                        onChange={ handleChange('isCheckedRedZone')}
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
                        onChange={ handleChange('name') }
                        className="form-control"  
                        required
                    />
                  </div>
                
                <div className="form-group slider-parent">
                <label htmlFor="tailleZoneRouge">Il y aura combien de bouteilles environ ?  </label>
                <br />
                    <input 
                        type="range"
                        min="1"
                        max="21"
                        step="5"
                        name="rows"
                        value ={rows } 
                        onChange={ handleChange("rows")}
                        id="tailleZoneRouge" 
                    />
                    <div className="buble">
                    Vous pouvez mettre  { rows *7 } bouteilles
                    </div>
                    
                </div>
                <br />
                
                <div className="btnWithStep">
                    <button  
                    onClick= {this.back } 
                    id="btnPrevStep2"
                     className="btnPrevNextOfCreateZoneRed form-control mt-2 mb-2 ">
                        « Précédent
                    </button> 
                    <button 
                            type="submit"
                            id="btnSubmit" 
                            className="form-control mt-2 mb-2"
                    >
                         Créer ma zone 
                     </button> 
                    <button  onClick= {this.continue } id="btnNextStep2" 
                    className="btnPrevNextOfCreateZoneRed form-control mt-2 mb-2 ">
                   Etape suivante »
                </button> 

                </div>
                
              </form>
            </>
        );
    }
}

export default CreateRedZone;