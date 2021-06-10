import React from 'react';

class CreateCellar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            description:"",
        };
    }

    onSubmitCreateCellar = (event)=>{
        event.preventDefault();
        console.log("saisie via form creer cave", this.state);
        // Vider les input après la saisie
        this.setState = {
            name:"",
            description:"",
        };
        return
    }

    render() {
        return(
            <>
              <h2>Je crée ma cave ...</h2>
              <form onSubmit={this.onSubmitCreateCellar}>
                  <div className="form-group mb-3">
                    <label htmlFor="nomCave">Nom de votre cave</label>
                    <input type="text" name="nomCave" id="nomCave" value={this.state.name}
                     onChange={(event)=> {
                        this.setState({ name: event.target.value});
              
                    }}
                    className="form-control" placeholder="ex: cave n°1" required/>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="descriptionCave" className="form-label">Description cave</label>
                    <textarea className="form-control" id="descriptionCave" name="descriptionCave"  rows="3"
                    value={this.state.description}
                    onChange={(event)=> {
                        this.setState({ description: event.target.value});  
                    }}
                    required></textarea>
</div>
                <h5>créer les zones de votre cave...</h5>
                <button type="submit" id="btnSubmit" className="form-control mt-2 mb-2 col-lg-3-offset-3">Etape suivante</button>   
              </form>
            </>
        );
    }
}
export default CreateCellar;