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
        contentPink:2,
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
    name:"Cave1",
    description:"super cave de bordeaux",
    areaCellar :[
        { // table liste bouteilles  avec id
            area:"blanc",
            id:1,
            columns:7,//x  type d'oragisation de la zone des bouteilles
            rows:5,//y
            cellar:1,
            bottles:bottlesWhite //liste bouteille blanc
        },
        {
            id:2,
            area:"rose",
            columns:5,
            rows:4,
            cellar:1,
            bottles:bottlesPink//liste bouteille blanc
        },
        {
            id:3,
            area:"rouge",
            columns:7,
            rows:5,
            cellar:1,
            bottles:bottlesWRed//liste bouteille blanc
        }
    ]
};

export default class WineCellar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cellar: [
                cellarObjet,
            ],
            totalBottle : 0,

        }
    }
    componentDidMount = () => {
        let area = this.state.cellar[0].areaCellar;
        let inserteBottle = area.map((elements) => {
            let color = elements.area;
            if(color === "blanc" && elements.length !== 0){
                this.dispatchBottle(elements, color);
            }
            if(color === "rouge" && elements.length !== 0){
                this.dispatchBottle(elements, color);
            }
            if(color === "rose" && elements.length != 0){
                this.dispatchBottle(elements, color);
            }
        });
    }

    dispatchBottle(elements, color){
        this.totalBottlecellar(parseInt(elements.bottles.length,10));
        let loc  = elements.bottles.map((bottle) => {
                let rowBottle = bottle.location[0];
                let columnBottle = bottle.location[1];
                let element = document.querySelector("[data-area='" + color + "'] [data-linebottle='" + rowBottle + "'] [data-bottle='" + columnBottle + "']");
                if(!element)return;
                let drag = document.createElement("div");
                drag.classList.add("draggable");
                drag.setAttribute("draggable","true");
                drag.setAttribute("id","draggable-" + bottle.uid);
                drag.addEventListener('dragstart',this.dragStart)
                element.append(drag);
                element.classList.remove("drop-zone");
        });
        if(loc){
            let containers = document.querySelectorAll('.column');
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
        if(e.target != undefined ){
            if(e.target.classList.contains("contentBottle") && e.target.hasChildNodes()){
                    e.target.classList.add("drop-zone");
                    console.log(e);
            }
        }
    }


    dragEnter(e){
        e.preventDefault();
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
                const data = e.dataTransfer.getData('text');
                e.target.append(document.getElementById(data));
                e.target.classList.remove("drop-zone");
            }
        // e.preventDefault();
        // const bottle_id = e.dataTransfer.getData('id');
        // console.log(bottle_id);
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
                <h3>Emplacement vin {color} </h3>
                <div className="area" data-area={areaElements.area} >
                    <ShowCellar area={color} columns={areaElements.columns} rows={areaElements.rows} key={index}/>
                </div>
            </React.Fragment>
        );
    }

    areaCellars = (Zone,x,y = 1) => {

        return <ShowCellar/>;
    }


    render() {
        let area = this.state.cellar[0].areaCellar;
        return (
            <>
                <h2>Cave</h2>
                <h3>Nombre de bouteilles total : {this.state.totalBottle }</h3>
                <section id="areaCellars">
                    {area.map((elements, index) =><this.creatAreaCellars areaElements={elements}  index={index} key={index}/>)}
                </section>
            </>
        )
    }
}
