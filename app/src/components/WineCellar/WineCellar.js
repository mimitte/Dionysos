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
        areaCellar:1, //listebottles
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
        areaCellar:1,
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
        areaCellar:1,
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
        areaCellar:3,
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
        areaCellar:3,
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
        areaCellar:3,
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
        areaCellar:2,
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
        areaCellar:2,
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
        areaCellar:2,
        location:[1,3]
    }
]

const cellarObjet = {
    uid:1,
    name:"Cave1",
    description:"super cave de bordeaux",
    areaCellar :[
        {
            id:1,
            area:"rouge",
            columns:7,
            rows:5,
            cellar:1,
            bottles:bottlesWRed//liste bouteille blanc
        },
        {
            id:2,
            area:"rose",
            columns:5,
            rows:4,
            cellar:1,
            bottles:bottlesPink//liste bouteille blanc
        },
        { // table liste bouteilles  avec id
            area:"blanc",
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
        let areaWine = cellarObjet.areaCellar;
        let areaWhite=[];
        let areaRed=[];
        let areaRose=[];
        areaWine.map( (elements, index) =>{
            if(elements.area === "blanc"){
                areaWhite.push(elements);
            }
            if(elements.area === "rouge"){
                areaRed.push(elements);
            }
            if(elements.area === "rose"){
                areaRose.push(elements);
            }
            return null;
        });
        this.state = {
            uid:uid,
            name:name,
            description,
            areaWhite: areaWine,
            areaRed: areaRed,
            areaRose: areaRose,
            cellar: [
                cellarObjet,
            ],
            totalBottle : 0,

        }
    }
    componentDidMount = () => {
        let area = this.state.cellar[0].areaCellar;
        area.map((elements) => {
            let color = elements.area;
            if(color === "rouge" && elements.length !== 0){
                this.dispatchBottle(elements, color);
            }
            if(color === "rose" && elements.length !== 0){
                this.dispatchBottle(elements, color);
            }
            if(color === "blanc" && elements.length !== 0){
                this.dispatchBottle(elements, color);
            }
            return null;
        });
    }

    dispatchBottle(elements, color){
        this.totalBottlecellar(parseInt(elements.bottles.length,10));
        let sufixColor = color === "blanc" ? "white": color === "rouge" ? "red": "rose";
        let loc  = elements.bottles.map((bottle) => {
            let rowBottle = bottle.location[0];
            let columnBottle = bottle.location[1];
            let element = document.querySelector("[data-area='" + color + "'] [data-linebottle='" + rowBottle + "'] [data-bottle='" + columnBottle + "']");
            let drag = document.createElement("div");
            drag.classList.add("draggable-" + sufixColor);
            drag.setAttribute("draggable","true");
            drag.setAttribute("id","draggable-" + bottle.uid);
            drag.setAttribute("data-area",color);
            drag.addEventListener('dragstart',this.dragStart)
            element.append(drag);
            element.classList.remove("drop-area");
            return null;
        });

        if(loc){
            let containers = document.querySelectorAll('.column-area');
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
    }

    dragLeave(e){
        e.preventDefault();
        let reInitAeraDrop = document.querySelectorAll('.contentBottle');
        for(let content of reInitAeraDrop)
        {
            if(!content.classList.contains("drop-area") && content.hasChildNodes()){
                content.classList.toggle("drop-area");
            }
        }
    }

    dragStart(e){
        e.dataTransfer.setData("text",e.target.id);
    }

    dragDrop(e){
        e.preventDefault();
        if(e.target.classList.contains("drop-area")){
            let areaColor =  e.target.getAttribute("data-area");
            const id = e.dataTransfer.getData('text');
            let bottle = document.getElementById(id);
            if(bottle.getAttribute("data-area") === areaColor){
                e.target.append(document.getElementById(id));
                e.target.classList.toggle("drop-area");
            }
        }
    }

    totalBottlecellar(b){
        this.setState((state) => ({
            totalBottle: state.totalBottle + b,
         }));
    }

    creatAreaCellars = ({areaElements, index}) =>{
        let color = areaElements.area;
        return(
            <React.Fragment>
                <div className="wine-are">
                    <h3>Emplacement vin {color} </h3>
                    <div className="area" data-area={areaElements.area} >
                        <ShowCellar area={color} columns={areaElements.columns} rows={areaElements.rows} key={index}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    render() {
        let area = this.state.cellar[0].areaCellar;
        return (
            <>
                <h2>Cave {this.state.name}</h2>
                <h3>Nombre de bouteilles total : {this.state.totalBottle }</h3>
                <section id="areaCellars">
                        {area.map((elements, index) =><this.creatAreaCellars areaElements={elements}  index={index} key={index}/>)}
                </section>
            </>
        )
    }
}
