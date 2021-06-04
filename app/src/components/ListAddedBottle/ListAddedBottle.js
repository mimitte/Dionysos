import React from 'react';
import CardFiltredBottle from '../CardFiltredBottle/CardFiltredBottle';
import { FaTrashAlt } from "react-icons/fa";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// redux
import { connect } from "react-redux";
import { deleteBottle } from '../../redux/deleteBottleCellar/deleteBottle.action';
import {bottlesCellarReducer} from "../../redux/reducer/bottlesCellar.reducer";


class TabForAddedBottle extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filteredBottles: [],
      countries: [],
      regions: [],
      years: [],
      minYear: 0,
      maxYear: 0,
      colors: [
        "rouge",
        "blanc",
        "rosé"
      ],
      filters: [
        { country: "" },
        { region: "" },
        { color: "" },
        { minYear: 0 },
        { maxYear: 0 }
      ]
    }
  }

  suppression=(id) => {
    confirmAlert({
      // title: 'Confirmation avant suppression',
      message: 'êtes-vous sûrs de supprimer cet élément?',
      buttons: [
        {
          label: 'Oui',
          onClick: () => this.props.deleteBottle(id)
        },
        {
          label: 'Non',
          onClick: () => {return}
        }]
    })
  }

  createWineTableRow = (bouteille, index) => {
      const element = (
          <tr key={bouteille._id} className="cursor-pointer">
              <td>{index + 1}</td>
              <td>{bouteille.name}</td>
              <td>{bouteille.color}</td>
              <td>{bouteille.region}</td>
              <td>{bouteille.country}</td>
              <td>{bouteille.year}</td>
              <td className="text-center">
                <FaTrashAlt onClick={() => this.suppression(bouteille._id)}/>

              </td>
          </tr>
      );
      return element;
  }

  componentDidMount=()=>{
    let bottles = this.props.bouteilles;
    let countries = [];
    let regions = [];
    let years = [];
    let minYear = 0;
    let maxYear = 0;

    for (let i = 0; i < bottles.length; i++) {
      countries.push(bottles[i].country);
      regions.push(bottles[i].region);
      years.push(bottles[i].year);
    }
    countries = [...new Set(countries)];
    regions = [...new Set(regions)];
    minYear = Math.min.apply(Math, years);
    maxYear = Math.max.apply(Math, years);

    years = [];

    for (let i = minYear; i <= maxYear; i++) {
      years.push(i);
    }

    this.setState({countries});
    this.setState({regions});
    this.setState({years});
    this.setState({minYear});
    this.setState({maxYear});
    this.setState({filteredBottles: bottles});
  }

  filterCountries(event) {
    let filters = this.state.filters;
    filters.country = event.target.value;
    this.setState({ filters });
    this.filterList();
  }

  filterRegions(event) {
    let filters = this.state.filters;
    filters.region = event.target.value;
    this.setState({ filters });
    this.filterList();
  }

  filterColors(event) {
    let filters = this.state.filters;
    filters.color = event.target.value;
    this.setState({ filters });
    this.filterList();
  }

  filterMinYear(event) {
    let filters = this.state.filters;
    filters.minYear = event.target.value;
    this.setState({filters});
    this.filterList();
  }

  filterMaxYear(event) {
    let filters = this.state.filters;
    filters.maxYear = event.target.value;
    this.setState({ filters });
    this.filterList();
  }

  filterList() {
    let bottles = this.props.bouteilles;
    let filters = this.state.filters;

    if (filters.country !== "" && filters.country !== undefined) {
      bottles = bottles.filter( (bottle) => bottle.country === filters.country);
    }

    if (filters.region !== "" && filters.region !== undefined) {
      bottles = bottles.filter( (bottle) => bottle.region === filters.region);
    }

    if (filters.color !== "" && filters.color !== undefined) {
      bottles = bottles.filter( (bottle) => bottle.color === filters.color);
    }

    if (filters.minYear !== 0 && filters.minYear !== undefined) {
      bottles = bottles.filter( (bottle) => bottle.year >= filters.minYear);
    }

    if (filters.maxYear !== 0 && filters.maxYear !== undefined) {
      bottles = bottles.filter( (bottle) => bottle.year <= filters.maxYear);
    }

    this.setState({filteredBottles: bottles});
  }

  resetFilters(event) {
    event.preventDefault();
    let filters = [
      { country: "" },
      { region: "" },
      { color: "" },
      { minYear: 0 },
      { maxYear: 0 }
    ];
    this.setState({ filters });
    this.filterList();
  }

  render() {
    const { error, isLoaded, bouteilles } = this.props;

    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="divForLoadign">Chargement…</div>;
    } else {
      return (
        <React.Fragment>
          {
            <div className="mb-3 listeBottleTab">
              <h2>Voici la liste des vins dans votre cave</h2>
              <div id="filters">
                <select name="countries" id="countries" onChange={ (event) => this.filterCountries(event)}>
                  <option value="">Pays</option>
                  {this.state.countries.map( (country, index) => {
                    return <option key={ index } value={ country }>{ country }</option>
                  })}
                </select>
                <select name="regions" id="regions" onChange={ (event) => this.filterRegions(event)}>
                  <option value="">Région</option>
                  {this.state.regions.map( (region, index) => {
                    return <option key={ index } value={ region }>{ region }</option>
                  })}
                </select>
                <select name="colors" id="colors" onChange={ (event) => this.filterColors(event)}>
                  <option value="">Couleurs</option>
                  {this.state.colors.map( (color, index) => {
                    return <option key={ index } value={ color }>{ color }</option>
                  })}
                </select>
                <select name="minYear" id="minYear" onChange={ (event) => this.filterMinYear(event)}>
                  <option value="">Année Min</option>
                  {this.state.years.map( (minYear, index) => {
                    return <option key={ index } value={ minYear }>{ minYear }</option>
                  })}
                </select>
                <select name="maxYear" id="maxYear" onChange={ (event) => this.filterMaxYear(event)}>
                  <option value="">Année Max</option>
                  {this.state.years.map( (maxYear, index) => {
                    return <option key={ "max"+index } value={ maxYear }>{ maxYear }</option>
                  })}
                </select>
              </div>
              <button onClick={ (event) => this.resetFilters(event)}>Annuler</button>
              <table className="table table-hover mt-3">
                <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Couleur</th>
                  <th scope="col">Région</th>
                  <th scope="col">Pays</th>
                  <th scope="col">Année</th>
                  <th scope="">Supprimer</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                {
                  this.state.filteredBottles.map(this.createWineTableRow)
                  // bouteilles.map(this.createWineTableRow)
                }
                </tbody>
              </table>
              <CardFiltredBottle bouteilles={bouteilles}/>
            </div>

          }
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state)=>{
  return {
    ...state.bottlesCellarReducer
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    deleteBottle:(id)=>dispatch(deleteBottle(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabForAddedBottle);