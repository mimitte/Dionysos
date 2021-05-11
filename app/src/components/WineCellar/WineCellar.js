import React, { Component } from 'react'
import ShowCellar from './ShowCellar'

const  bottlesWhite = [
    {
        uid:1,
        color:"white",
        name:"Chateau D'Yquem", //nom de de la bouteille
        year:"1811", //année
        region:"Sauternes",//Terroir
        note:"Sauternes",
        country:"France",
        contentWhite:1, //listebottles
        location:[2,3]// empalcement dans la cave
    },
    {
        uid:2,
        color:"white",
        name:"Chateau Climens",
        year:"2001",
        region:"Barsac",
        note:"Barsac",
        country:"France",
        contentWhite:1,
        location:[2,4]
    },
    {
        uid:3,
        color:"white",
        name:"Chateau Doisy Daene, L Extravagant De Doisy Daene",
        year:"2010",
        region:"Sauternes",
        note:"Chateau Doisy Daene, L Extravagant De Doisy Daene",
        country:"France",
        contentWhite:1,
        location:[3,5]
    }
]
const  bottlesWRed = [
    {
        uid:4,
        color:"red",
        name:"Chateau Lafite Rothschild",
        year:"1953",
        region:"Pauillac",
        note:"Pauillac",
        country:"France",
        contentRed:3,
        location:[5,1]
    },
    {
        uid:5,
        color:"red",
        name:"Chateau Lafleur",
        years:"1950",
        region:"Pomerol",
        note:"Pomerol",
        country:"France",
        contentRed:3,
        location:[5,3]
    },
    {
        uid:6,
        color:"red",
        name:"Chateau Haut Brion",
        years:"1989",
        region:"Pessac Leognan",
        note:"Pessac Leognan",
        country:"France",
        contentRed:3,
        location:[7,2]
    }
]
const  bottlesPink = [
    {
        uid:10,
        color:"pink",
        name:"Chateau De Sours, Rosé",
        years:"2014",
        region:"Bordeaux",
        note:"Chateau De Sours, Rosé, ",
        country:"France",
        contentPink:2,
        location:[1,1],
    },
    {
        uid:12,
        color:"pink",
        name:"Chateau Brown",
        years:"2012",
        region:"Bordeaux",
        note:" Bordeaux Rose",
        country:"France",
        contentPink:2,
        location:[1,2]
    },
    {
        uid:25,
        color:"pink",
        name:"La Belle Rosee",
        years:"2016",
        region:"Bordeaux",
        note:"Chateau De Fontenille, La Belle Rosee, Rosé, Bordeaux Rose",
        country:"France",
        contentPink:2,
        location:[1,3]
    }
]

const cellarObjet = {
    uid:1,
    name:"",
    description:"",
    contentWhite: { // table liste bouteilles  avec id
        id:1,
        columns:7,//x  type d'oragisation de la zone des bouteilles
        rows:5,//y
        cellar:1,
        bottles:bottlesWhite, //liste bouteille blanc
    },
    contentPink: {
        id:2,
        columns:7,
        rows:5,
        cellar:1,
        bottles:bottlesPink,//liste bouteille blanc
    },
    contentRed: {
        id:3,
        columns:7,
        rows:5,
        cellar:1,
        bottles:bottlesWRed,//liste bouteille blanc
    }
};

export default class WineCellar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cellar: {
                cellarObjet,
                TotalBottle:cellarObjet.contentPink.bottles.length + cellarObjet.contentRed.bottles.length + cellarObjet.contentWhite.bottles.length
            }
        }
    }
    dragAndGropBottles = (valeur) => {
        this.setState({search: valeur})
      }
    render() {
        return (
            <>
                <h2>Cave</h2>
                <ShowCellar/>
            </>
        )
    }
}
