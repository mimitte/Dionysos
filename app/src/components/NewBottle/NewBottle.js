import React from 'react';
import { connect } from 'react-redux';
import { addBottle } from '../../redux/addBottleCellar/addBottle.action';
import spinner  from '../../utils/spinner';

class NewBottle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      newBottle:{
          country: "",
          region: "",
          name: "",
          year: 0,
          color: "",
          // zone: "",
          user: localStorage.getItem('userId'),
          location: {
            column: 7,
            row: 0,
          }
      },
      cellar:"",
      isLoadedCellar:false
    }
    
  }
  // fonction pour mettre à jour les state dès qu'il y a un changement
  // ça permet au spinner de s'afficher le temps de chargement des données
  static getDerivedStateFromProps =(props,state)=>{

    if (props.isLoadedCellar !== state.isLoadedCellar) {
      return { isLoadedCellar : props.isLoadedCellar}
    }
    return null;
  }
  onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log("saisie user", this.state);
    const formState = this.state.newBottle;
    this.props.addBottle(formState);
    // vider le champ après la saisie
    this.setState = {
      newBottle:{
        country: "",
        region: "",
        name: "",
        year: 0,
        color: "",
        location: {
          column: 7,
          row: 0,
        }
    },
    }
  }

  render() {
    const { allCellarsWithZones } = this.props;
    // console.log("all elements",this.props);
    const { cellars } = allCellarsWithZones;
    // console.log(cellars); 
    if (this.state.isLoadedCellar) {
      return(
        <div className="new-bottle-container">
          <h2>Nouvelle bouteille</h2>
  
          <form className="dio-form" onSubmit={ this.onSubmitHandler } >
            <div>
              <label htmlFor="country">
                  Pays :
              </label>
              <input type="text" name="country" value={ this.state.country } required
                  onChange={ (event) => {
                      this.setState({ country: event.target.value});
  
                  }} />
            </div>
            <div>
              <label htmlFor="region">
                  Région :
              </label>
              <input type="text" name="region" value={ this.state.region } required
                  onChange={ (event) => {
                      this.setState({ region: event.target.value});
  
                  }} />
            </div>
            <div>
              <label htmlFor="name">
                  Nom :
              </label>
              <input type="text" name="name" value={ this.state.name } required
                  onChange={ (event) => {
                      this.setState({ name: event.target.value});
  
                  }} />
            </div>
            <div>
              <label htmlFor="year">
                  Année :
              </label>
              <input type="number" name="year" value={ this.state.year } required
                  onChange={ (event) => {
                      this.setState({ year: event.target.value});
  
                  }} />
            </div>
            <div>
              <label htmlFor="color">Couleur</label>
              <select name="color" id="color" value={ this.state.color } required
                  onChange={ (event) => {
                      this.setState({ color: event.target.value});
  
                  }} >
                  <option value=""></option>
                  <option value="rouge">Rouge</option>
                  <option value="blanc">Blanc</option>
                  <option value="rosé">Rosé</option>
              </select>
            </div>
            <div className="form-group mb-3">
                      <label>Sélectionnez une cave</label>
                      <select
                          onChange={ this.onSubmitHandler } 
                          value={this.state.cellar} 
                          className="form-control"
                      >
                           {
                              cellars.reverse().map((cellar,index)=> 
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
            <input className="dio-btn dio-btn-success" type="submit" value="Créer" />
          </form>
        </div>
      );
    
    }
    else{
      return (
        <>
          {spinner(this.state.isLoadedCellar)}
        </>
      )
    }
  }
}

// export default connect(null, { addBottle })(NewBottle);


const mapStateToProps = (state)=>{
  return {
    ...state.bottlesCellarReducer
  }
}
export default connect(mapStateToProps, (null, {addBottle}))(NewBottle);