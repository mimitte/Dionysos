import React from 'react';
// redux
import { connect } from 'react-redux';
import { createCellar } from "../../redux/CreateCellarsAndZones/createCellar.action";

class CreateCellar extends React.Component {

     state = {
      name:"",
      description:"",
      user:localStorage.getItem('userId'),
     }
    handleChangeForCellar = input => event =>{
      event.preventDefault();
      // console.log("voici les inputs",event.target.value);
      const valeurInput = event.target.type === "checkbox" ?
      !event.checked :
      event.target.value
   
      this.setState({
          [input]:valeurInput,    
      })
  }
  handleSubmitForCellar =(event)=>{
    event.preventDefault();
    console.log("saisie via form creer cave avec Step", event);
    // createCellar cest l'ACTION CREATE_CELLAR'
    // redux
    this.props.createCellar(this.state);
    console.log("voici les props arrivés dans CreateCellar", this.props);
    // Vider les input après la saisie
    this.setState = {
        name:"",
        description:"",
        user:"" ,
    };
}
    render() {
        const {  name , description } = this.state;
        return(
            <> 
              <h2 className="col-lg-4 col-md-4 col-sm-12 offset-4">Je crée ma cave ...</h2>
              <form  
                    onSubmit={ this.handleSubmitForCellar }
                    id="formForCreateCellar"
                    className="col-lg-4 col-md-4 col-sm-12 offset-4"
               >
                  <div className=" form-group mb-3 ">
                    <label htmlFor="name">Nom de votre cave</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="ex: cave n°1"
                        value={ name }
                        onChange={ this.handleChangeForCellar("name") }
                        className="form-control"  
                        // required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="description" className="form-label">Description cave</label>
                    <textarea 
                        name="description"  
                        value={ description }
                        onChange={ this.handleChangeForCellar("description") }
                        rows="3"
                        className="form-control"
                        // required
                    >
                    </textarea>
                 </div>
                <h5>Créer maintenant les zones de votre cave...</h5>
                <div className="btnWithStep">
                     <button 
                            type="submit"
                            id="btnSubmitRed" 
                            className="form-control mt-2 mb-2"
                    >
                         Créer ma cave
                     </button> 
                     <button 

                        onClick= {()=>this.props.nextStep() }
                        id="btnNextStep2"
                        className=" form-control mt-2 mb-2 ">
                            Etape suivante »
                      </button>

                </div> 
              </form>
            </>
        );
    }
}
export default connect(null, { createCellar })(CreateCellar);