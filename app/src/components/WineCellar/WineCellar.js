import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowCellar from './ShowCellar';
import Modal from '../Modal/modal';
import spinner from '../../utils/spinner';

class WineCellar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalBottles: 0,
            allCellarsWithZones:{},
            bottles: {},
            zones:{},
            isLoadedCellar:false,
            move:false,
            openModal:false,
            addHandler:false,
            bottlesMove :[],
            bottle :{
                "__v": 0,
                "​​_id":0,
                "​​color":'',
                "country":'',
                "location": {
                "column": 0,
                "row": 0
                },
                "name": "",
                "region": "",
                "year": 0
            }
        }
    }

    static getDerivedStateFromProps(props,state){

        if(props.allCellarsWithZones !== state.allCellarsWithZones){
            return {
                allCellarsWithZones:props.allCellarsWithZones,
                bottles:props.allCellarsWithZones.bottles,
                zones:props.allCellarsWithZones.zones,
                isLoadedCellar: props.isLoadedCellar,
                addHandler:props.isLoadedCellar && true
           }
        }
        return null;
    }

    componentDidMount = () => {
        if(!this.state.isLoadedCellar){return null;}
        this.addBottlesToCellars();
    }

    addBottlesToCellars = () => {
        let bottlesDIV ="";
        bottlesDIV = document.querySelectorAll('.draggable');
        if(bottlesDIV.length>0){
            for(const bottle of bottlesDIV){
                bottle.remove();
            }
        }
        let clickOnDrags ="";
        let red = "",white="",pink="",etat=false;
        let totalBottles = 0;
        totalBottles +=  this.state.bottles.length ;
        this.setState({
            totalBottles: totalBottles
        })
        red = this.state.bottles.filter( redBottle => redBottle.color ==="red" );
        white = this.state.bottles.filter( whiteBottle => whiteBottle.color ==="white" );
        pink = this.state.bottles.filter( pinkBottle => pinkBottle.color ==="pink");
        etat = this.dispatchBottle(red, "red");
        etat = this.dispatchBottle(white, "white");
        etat = this.dispatchBottle(pink, "pink");
        if(etat){
            clickOnDrags = document.querySelectorAll('.draggable');
            for (const clickOnDrag of clickOnDrags) {
                clickOnDrag.addEventListener('click',this.showModal);
            }

        }
    }

    componentDidUpdate (props, state){
        if(!this.state.isLoadedCellar){return null;}
        if(this.state.addHandler === true){this.addBottlesToCellars(); this.setState({addHandler:false})}
    }

    showModal = (e) =>{
        e.preventDefault();
        const  {allCellarsWithZones} = this.props;
        const {bottles} = allCellarsWithZones;
        let bottle = {};
        let id = e.target.id.split("-")[1];
        bottle = (bottles.filter(bot => bot._id === id)[0]);
        this.setState({
            openModal:true,
            bottle:{...bottle}
        })
    }

    closeModal = () => {
        this.setState({
            openModal:false
        })
    }
    editBottle = (bottle) =>{
    }
    dispatchBottle = (elements, color) => {
        let etat = false;
        let title = "";
        let loc ="";
        loc = elements.map((bottle) => {
            title = `${bottle.name}
                    ${bottle.year}`;
            const rowBottle = bottle["location"].row;
            const columnBottle = bottle["location"].column;
            const element = document.querySelector("[datazone='" + color + "'] [datalinebottle='" + rowBottle + "'] [databottle='" + columnBottle + "']");
            const drag = document.createElement("div");
            drag.classList.add("draggable-" + color);
            drag.classList.add("draggable");
            drag.setAttribute("aria-label",`${title}`);
            drag.setAttribute("draggable","true");
            drag.setAttribute("id","draggable-" + bottle._id);
            drag.setAttribute("datazone",color);
            element.append(drag);
            drag.addEventListener('dragstart',this.dragStart);
            drag.addEventListener('onmove',this.moveBottle);
            element.classList.remove("drop-zone");
            return null;
        });

        if(loc){
            let containers = document.querySelectorAll('.column-zone');
            let zoneCellars = document.querySelector('.zoneCellars');
            zoneCellars.addEventListener('onchange',this.moveBottle);
            for (const container of containers) {
                container.addEventListener('dragover',this.dragOver);
                container.addEventListener('dragenter',this.dragEnter);
                container.addEventListener('dragleave',this.dragLeave);
                container.addEventListener('drop',this.dragDrop);
            }
            etat = true;
        }
        return etat;
    }

    moveBottle = () =>{
    }

    dragOver =(e) =>{
        e.preventDefault();
        e.stopPropagation();
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


    dragLeave=(event) =>{
        event.preventDefault();
        event.stopPropagation();
    }

    dragStart=(event) =>{
        event.stopPropagation();
        event.dataTransfer.setData("text",event.target.id);
    }

    dragDrop(e){
        e.preventDefault();
        e.stopPropagation();
        if(e.target.classList.contains("drop-zone")){
            let zoneColor =  e.target.getAttribute("datazone");
            const id = e.dataTransfer.getData('text');
            let bottle = document.getElementById(id);
            if(bottle.getAttribute("datazone") === zoneColor){
                e.target.append(document.getElementById(id));
                const bottle = this.searchBottles(document.getElementById(id).id.split('-')[1]);
                e.target.classList.toggle("drop-zone");
            }
        }
    }


    searchBottles = (id) =>{
       const bottle = this.state.bottles.filter(bot => bot._id === id)[0];
       return bottle;
    }
    addCellar = (cellars, zones, bottles) => {
       let html="";
       let zonesByCellar = [];
       for (const cellar of cellars){
           for (const zone of zones){
               if (zone.idCellar.trim() === cellar.id.trim()){
                zonesByCellar.push(zone)
               }
            }
        const moreKey = 10;
        html = (
        <>
                <h2>Cave: {cellar.name}</h2>
                <h3>Nombre de bouteilles total : {this.state.totalBottles}</h3>
                <section id={cellar.id} className="zoneCellars">
                                {zonesByCellar.map((elements) =><this.creatZoneCellars zoneElements={elements} index={elements.id}  key={elements.id+moreKey}/>)}
                </section>
        </>);
        }
       return (html);
    }


    creatZoneCellars = ({zoneElements, index}) =>{
        let color = zoneElements.color;
        let titleColor = color === "white" ? "Blanc" : color === "pink" ? "Rosé" : "Rouge"
        return(
            <>
                <div className="wine-zone">
                    <h3>Emplacement vin {titleColor} </h3>
                    <div className="zone" datazone={color} >
                        <ShowCellar zone={color} index={zoneElements.id + index} columns={zoneElements.columns} rows={zoneElements.rows} key={zoneElements._id +index}/>
                    </div>
                </div>
            </>
        );
    }

    render() {
        let allCellarsWithZones = {};
        {
            allCellarsWithZones= this.props.allCellarsWithZones
        };
        const {cellars,zones, bottles } = allCellarsWithZones;
        if(this.state.isLoadedCellar){
            const moreKey = 10;
            return (
                <>
                {this.addCellar(cellars, zones, bottles)}
                     <Modal showModal={this.state.openModal} closeModal={this.closeModal}>
                        <div className="modal-title" id={this.state.bottle.name}>
                            <h2>{this.state.bottle.name}</h2>
                        </div>
                        <div className="modal-body">
                                <h3>{this.state.bottle.country}</h3>
                                <p>{this.state.bottle.region}</p>
                                <p>{this.state.bottle.year}</p>
                        </div>
                        <div className="modal-footer">
                            <button className="button-modal-cellar" onClick={()=> this.editBottle(this.state.bottle)}>Modfier</button><button className="button-modal-cellar">Fermer</button>
                        </div>
                    </Modal>
                </>
            )
        } else {
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
export   default connect(mapStateToProps)(WineCellar);


