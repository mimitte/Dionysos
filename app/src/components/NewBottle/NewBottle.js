import React from 'react';
import { connect } from 'react-redux';
import { addBottle } from '../../redux/addBottleCellar/addBottle.action'

class NewBottle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      region: "",
      name: "",
      year: 0,
      color: "",
      // zone: "",
      user: "",
      location: {
        column: 4,
        row: 5,
      }
    };
    
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("saisie user", this.state);
    const formState = this.state;
    this.props.addBottle(formState);
    console.log("props NEW BOTTLE",this.props);

   

    // vider le champ après la saisie
    this.setState = {
      country: "",
      region: "",
      name: "",
      year: 0,
      color: ""
    };
  }

  render() {
    return(
      <div className="new-bottle-container">
        <h2>Nouvelle bouteille</h2>

        <form onSubmit={ this.onSubmitHandler } >
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
          <input type="submit" value="Créer" />
        </form>
      </div>
    );
  }
}
// export default NewBottle;
// const mapDispatchToProps = (dispatch)=>{
//   return {
//     addBottle:(obj)=>dispatch(addBottle(obj)),
//   }
// }

// export default connect(mapDispatchToProps)(NewBottle);

export default connect(null, { addBottle })(NewBottle);