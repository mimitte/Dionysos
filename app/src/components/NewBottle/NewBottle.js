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
          note:"test",
          // zone: "",
          user: localStorage.getItem('userId'),
          location: {
            column: 7,
            row: 0,
          }
      },
      zone:"",
      zones:[],
      rowsOfSelectedZone:null,
      isLoadedCellar:false,
      arrayLocation:[]
    }
    
  }
  // fonction pour mettre à jour les state dès qu'il y a un changement
  // ça permet au spinner de s'afficher le temps de chargement des données
  static getDerivedStateFromProps =(props,state)=>{

    if (props.isLoadedCellar !== state.isLoadedCellar ) {
      return { 
                isLoadedCellar : props.isLoadedCellar,
                zones:props.allCellarsWithZones.zones
              }
    }
    return null;
  }
  onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log("saisie user", this.state);
    const formState = this.state.newBottle;
    // console.log(this.state.zone);
    this.props.addBottle(formState, this.state.zone);
    // vider le champ après la saisie
    this.setState = {
      newBottle:{
        country: "",
        region: "",
        name: "",
        year: 0,
        color: "",
        note:"test",
        location: {
          column: 7,
          row: 0,
        }
    },
    }
  }

  getRowsZone = (zoneId) =>{
    if (zoneId) {
        console.log(zoneId);
        const zone = this.state.zones.filter(zone=>zone.id == zoneId );
        console.log("row de la zone selectionnée", zone[0].rows);
        return zone[0].rows;
    }
    return null;
        
  }
  createBottleLocation = ()=>{
    let html = [];
    if (this.state.rowsOfSelectedZone !== null) {
      for(let i = 1; i<= this.state.rowsOfSelectedZone; i++){
         for (let j = 0; j <=7; j++) {
          html.push(<input className="form-check-input " type="radio" name="location"/>) 
         } 
        }
      }
      return ( <> {html} </>);
  }
    
  
  render() {
    const { allCellarsWithZones } = this.props;
    console.log("all elements",this.props);
    const { cellars } = allCellarsWithZones;
    // console.log(cellars);
    const zoneId = (this.state.zone);
    // const rows = this.getRowsZone(zoneId);
    // console.log("nombre de rows de la zone",rows);
 
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
                      const newBottle = this.state.newBottle;
                      newBottle.country = event.target.value;
                      this.setState({ newBottle});
                  }} />
            </div>
            <div>
              <label htmlFor="region">
                  Région :
              </label>
              <input type="text" name="region" value={ this.state.region } required
                  onChange={ (event) => {
                    const newBottle = this.state.newBottle;
                    newBottle.region = event.target.value;
                    this.setState({newBottle});
                  }} />
            </div>
            <div>
              <label htmlFor="name">
                  Nom :
              </label>
              <input type="text" name="name" value={ this.state.name } required
                onChange={ (event) => {
                  const newBottle = this.state.newBottle;
                  newBottle.name = event.target.value;
                  this.setState({newBottle});
                }}
                   />
            </div>
            <div>
              <label htmlFor="year">
                  Année :
              </label>
              <input type="number" name="year" value={ this.state.year } required
                  onChange={ (event) => {
                    const newBottle = this.state.newBottle;
                    newBottle.year= event.target.value;
                    this.setState({newBottle});
                  }} />
            </div>
            <div>
              <label htmlFor="color">Couleur</label>
              <select name="color" id="color" value={ this.state.color } required
                  onChange={ (event) => {
                    const newBottle = this.state.newBottle;
                    newBottle.color = event.target.value;
                    this.setState({newBottle});
                  }} >
                  <option value=""></option>
                  <option value="rouge">Rouge</option>
                  <option value="blanc">Blanc</option>
                  <option value="rosé">Rosé</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="cellar-select">Sélectionnez une cave et une zone</label>
              <select
                  id="cellar-select"
                  value={this.state.zone} 
                  onChange={ (event) => {
                    this.setState({ zone: event.target.value,
                      rowsOfSelectedZone: this.getRowsZone(event.target.value)
                     });
                  }}
                  className="form-control"
              >
                    {
                      cellars.reverse().map((cellar,index)=> 
                      <optgroup 
                          label={cellar.name} 
                          key={index}
                          name="cellar"
                          // value={cellar._id}
                      >
                        {
                          cellar.zones.reverse().map((zone,index)=>
                          <option 
                              key={ index }
                              value={zone._id}
                          >
                              {zone.name}
                          </option>  )
                        }    
                      </optgroup>)
                  } 
              </select>
            </div>
            <h5>Sélectionner la localisation de votre bouteille (row /column) </h5>
            <div className="form-check">
              <div className="d-flex" style={{width:"100px"}}>
                <label htmlFor="location">1</label>
              { 
                  this.createBottleLocation()
               }
              </div>
              
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

const mapStateToProps = (state)=>{
  return {
    ...state.bottlesCellarReducer
  }
}
export default connect(mapStateToProps, (null, {addBottle}))(NewBottle);