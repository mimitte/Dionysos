import React from 'react';

class NewBottle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      region: "",
      name: "",
      year: 0,
      color: ""
    };
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    const bottle = { ...this.state };

    fetch('http://localhost:5000/api/bottle', {
      method: "POST",
      body: JSON.stringify(bottle),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(data => console.log(`success : ${data}`))
      .catch(error => console.log(`error: ${error}`));
  }

  render() {
    return(
      <div className="new-bottle-container">
        <h2>Nouvelle bouteille</h2>

        <form onSubmit={ this.onSubmitHandler } >
          <label htmlFor="country">
              Pays :
          </label>
          <input type="text" name="country" value={ this.state.country } required
              onChange={ (event) => {
                  this.setState({ country: event.target.value});

              }} />

          <label htmlFor="region">
              Région :
          </label>
          <input type="text" name="region" value={ this.state.region } required
              onChange={ (event) => {
                  this.setState({ region: event.target.value});

              }} />

          <label htmlFor="name">
              Nom :
          </label>
          <input type="text" name="name" value={ this.state.name } required
              onChange={ (event) => {
                  this.setState({ name: event.target.value});

              }} />

          <label htmlFor="year">
              Année :
          </label>
          <input type="number" name="year" value={ this.state.year } required
              onChange={ (event) => {
                  this.setState({ year: event.target.value});

              }} />

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

          <input type="submit" value="Créer" />
        </form>
      </div>
    );
  }
}
export default NewBottle;