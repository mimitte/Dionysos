import React from 'react';

class CreateCellar extends React.Component {
    continue = e =>{
      e.preventDefault();
      this.props.nextStep();
    }
    render() {
        const { handleChange } = this.props;
        console.log(this.props);
        return(
            <>
              <h2 className="col-lg-4 col-md-4 col-sm-12 offset-4">Je crée ma cave ...</h2>
              <form  id="formForCreateCellar" className="col-lg-4 col-md-4 col-sm-12 offset-4" >
                  <div className=" form-group mb-3 ">
                    <label htmlFor="name">Nom de votre cave</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="ex: cave n°1"
                        onChange={ handleChange('name') }
                        className="form-control"  
                        required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="description" className="form-label">Description cave</label>
                    <textarea 
                        name="description"  
                        onChange={ handleChange('description') }
                        rows="3"
                        className="form-control"
                        required>
                    </textarea>
                 </div>
                <h5>créer les zones de votre cave...</h5>
                <button  onClick= {this.continue } id="btnNextStep" className="form-control col-lg-2 offset-6 mt-2 mb-2 ">
                   Etape suivante »
                </button>   
              </form>
            </>
        );
    }
}
export default CreateCellar;