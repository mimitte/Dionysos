import React, { Component } from 'react'
import ShowCellar from './ShowCellar'


const user = {
    email:"",
    idCellar: "609ea3b71fac1d1be0430703",
    name:""
}
const  bottlesWhite = [
    {
        uid:1,
        color:"white",
        name:"Chateau D'Yquem", //nom de de la bouteille
        year:"1811", //année
        region:"Sauternes",//Terroir
        note:"Sauternes",
        country:"France",
        zone:1, //listebottles
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
        zone:1,
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
        zone:1,
        location:[3,5]
    }
]
const  bottlesRed = [
    {
        uid:4,
        color:"red",
        name:"Chateau Lafite Rothschild",
        year:"1953",
        region:"Pauillac",
        note:"Pauillac",
        country:"France",
        zone:3,
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
        zone:3,
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
        zone:3,
        location:[3,2]
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
        zone:2,
        location:[1,1]
    },
    {
        uid:12,
        color:"pink",
        name:"Chateau Brown",
        years:"2012",
        region:"Bordeaux",
        note:" Bordeaux Rose",
        country:"France",
        zone:2,
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
        zone:2,
        location:[1,3]
    }
]

const cellarObjet = {
    uid:1,
    name:"Cave1",
    description:"super cave de bordeaux",
    zone :[
        {
            id:1,
            zone:"red",
            columns:7,
            rows:5,
            cellar:1,
            bottles:bottlesRed//liste bouteille blanc
        },
        {
            id:2,
            zone:"pink",
            columns:5,
            rows:4,
            cellar:1,
            bottles:bottlesPink//liste bouteille blanc
        },
        { // table liste bouteilles  avec id
            zone:"white",
            id:3,
            columns:7,//x  type d'oragisation de la zone des bouteilles
            rows:5,//y
            cellar:1,
            bottles:bottlesWhite //liste bouteille blanc
        },
    ]
};

export default class WineCellar extends Component {
    constructor(props) {
        super(props)
        let {uid, name, description} = cellarObjet;
        let zoneWine = cellarObjet.zone;
        let update = false;
        let zoneWhite=[];
        let zoneRed=[];
        let zonePink=[];
        zoneWine.map( (elements, index) =>{
            if(elements.zone === "white"){
                zoneWhite.push(elements);
            }
            if(elements.zone === "red"){
                zoneRed.push(elements);
            }
            if(elements.zone === "pink"){
                zonePink.push(elements);
            }
            return null;
        });
        this.state = {
            uid:uid,
            name:name,
            description,
            zoneWhite: zoneWhite,
            zoneRed: zoneRed,
            zonePink: zonePink,
            cellar: [
                cellarObjet,
            ],
            totalBottle : 0,

        }
    }
    componentDidMount = () => {
        let zone = this.state.cellar[0].zone;
        zone.map((elements) => {
            let color = elements.zone;
            if(color === "red" && elements.length !== 0){
                 this.dispatchBottle(elements, color);
            }
            if(color === "pink" && elements.length !== 0){
                this.dispatchBottle(elements, color);
            }
            if(color === "white" && elements.length !== 0){
                 this.dispatchBottle(elements, color);
            }
            return null;
        });
    }

    dispatchBottle(elements, color){
        this.totalBottlecellar(parseInt(elements.bottles.length,10));
        //let sufixColor = color === "white" ? "white": color === "red" ? "red": "pink";
        let loc  = elements.bottles.map((bottle) => {
            let rowBottle = bottle.location[1];
            let columnBottle = bottle.location[0];
            let element = document.querySelector("[datazone='" + color + "'] [datalinebottle='" + rowBottle + "'] [databottle='" + columnBottle + "']");
            let drag = document.createElement("div");
            drag.classList.add("draggable-" + color);
            drag.setAttribute("draggable","true");
            drag.setAttribute("id","draggable-" + bottle.uid);
            drag.setAttribute("datazone",color);
            element.append(drag);
            drag.addEventListener('dragstart',this.dragStart)
            element.classList.remove("drop-zone");
            return null;
        });

        if(loc){
            let containers = document.querySelectorAll('.column-zone');
            for (const container of containers) {
                container.addEventListener('dragover',this.dragOver);
                container.addEventListener('dragenter',this.dragEnter);
                container.addEventListener('dragleave',this.dragLeave);
                container.addEventListener('drop',this.dragDrop);
            }
        }
    }


    dragOver(e){
        e.preventDefault();
    }


    dragEnter(e){
        e.preventDefault();
        let reInitZoneDrop = document.querySelectorAll('.contentBottle');
        for(let content of reInitZoneDrop)
        {
            if(!content.classList.contains("drop-zone") && !content.hasChildNodes()){
                content.classList.toggle("drop-zone");
            }
        }
    }

    dragLeave(e){
        e.preventDefault();
    }

    dragStart(e){
        e.dataTransfer.setData("text",e.target.id);
    }

    dragDrop(e){
        e.preventDefault();
        if(e.target.classList.contains("drop-zone")){
            let zoneColor =  e.target.getAttribute("datazone");
            const id = e.dataTransfer.getData('text');
            let bottle = document.getElementById(id);
            if(bottle.getAttribute("datazone") === zoneColor){
                e.target.append(document.getElementById(id));
                e.target.classList.toggle("drop-zone");
            }
        }
    }

    totalBottlecellar(b){
        this.setState((state) => ({
            totalBottle: state.totalBottle + b,
         }));
    }

    creatZoneCellars = ({zoneElements, index}) =>{
        let color = zoneElements.zone;
        let titleColor = color === "white" ? "Blanc" : color === "pink" ? "Rosé" : "Rouge"
        return(
            <>
                <div className="wine-zone">
                    <h3>Emplacement vin {titleColor} </h3>
                    <div className="zone" datazone={zoneElements.zone} >
                        <ShowCellar zone={color} columns={zoneElements.columns} rows={zoneElements.rows} key={index+4}/>
                    </div>
                </div>
            </>
        );
    }

    render() {
        const zone = this.state.cellar[0].zone;
        return (
            <>
                <h2>Cave: {this.state.name}</h2>
                <h3>Nombre de bouteilles total : {this.state.totalBottle }</h3>
                <section id="zoneCellars">
                        {zone.map((elements, index) =><this.creatZoneCellars zoneElements={elements} index={index} key={index}/>)}
                </section>
            </>
        )
    }
}
