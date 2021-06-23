import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import ShowZonesCellar from './ShowZonesCellar';
import ShowBottlesInZonesCellars from './ShowBottlesInZonesCellars';
import Modal from '../Modal/modal';
import spinner from '../../utils/spinner';
import { updateBottleToCellar } from '../../redux/updateBottleToCellar/updateBottleToCellar';

class WineCellar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalBottles: [],
            allCellarsWithZones:{},
            bottles: {},
            zones: {},
            cellars: {},
            isLoadedCellar: false,
            showBottles: false,
            move: false,
            openModal: false,
            addHandler: false,
            bottlesMove: [],
            bottle: {
                "__v": 0,
                "​​color":'',
                "country":'',
                "location": {
                    "column": 0,
                    "row": 0
                },
                "name": "",
                "region": "",
                "year": 0
            },
            arrayTargetLocation: []
        }
    }

    static getDerivedStateFromProps(props,state){

        if(props.allCellarsWithZones !== state.allCellarsWithZones){
            return {
                allCellarsWithZones:props.allCellarsWithZones,
                cellars:props.allCellarsWithZones.cellars,
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
        if(this.state.addHandler === true){this.addBottlesToCellars(); this.setState({addHandler:false})}

    }

    addBottlesToCellars = () => {
        const totalBottles = [];
        for(const cellar of this.state.cellars){
            let totalBottlesInCellar = 0;
            totalBottles["total"] = 0;
            totalBottles[cellar.id] = 0;
            for (const zone of this.state.zones) {
                if(zone.idCellar === cellar.id){
                    totalBottlesInCellar += zone.bottles.length;
                    if(zone.color === 'red'){
                        this.dispatchBottle(zone.bottles, "red");
                    }
                    if(zone.color === 'white'){
                        this.dispatchBottle(zone.bottles, "white");
                    }
                    if(zone.color === 'pink'){
                        this.dispatchBottle(zone.bottles, "pink");
                    }

                }
            }
            totalBottles[cellar.id] += totalBottlesInCellar;
            totalBottles["total"] += totalBottlesInCellar;
        }
        console.log(totalBottles);
        this.setState({
            totalBottles
        });
    }

    dispatchBottle = (bottles, color) => {
        let arrayTargetLocation = this.state.arrayTargetLocation;
        let bottleDispach =  bottles.map((bottle) => {
            const divBottle = this.creatBottlesZonesCellars(bottle,color);
            const rowBottle = bottle["location"].row;
            const columnBottle = bottle["location"].column;
            const element = document.querySelector("[datazone='" + color + "'] [datalinebottle='" + rowBottle + "'] [databottle='" + columnBottle + "']");
            element.classList.remove("drop-zone");
            arrayTargetLocation.push({"child":divBottle,"container":element});
        });
        this.setState({
            arrayTargetLocation,
            showBottles: true
        });
    }


    creatBottlesZonesCellars = (bottle, color) => {
        return (
            <ShowBottlesInZonesCellars color={color} bottle={bottle}
             key={bottle._id + bottle._id}   dragstart={this.dragStart} showModal={this.showModal}/>
        )
    }


    componentDidUpdate (props, state){
        if(!this.state.isLoadedCellar){return null;}
        if(this.state.addHandler === true){
            this.addBottlesToCellars();
            this.setState({addHandler:false})}
    }

    showModal = (e) =>{
        e.preventDefault();
        const  {allCellarsWithZones} = this.state;
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
        });

    }

    editBottle = (bottle) =>{
    }


    moveBottle = () =>{
    }

    dragOver =(e) =>{
        e.preventDefault();
        e.stopPropagation();
    }


    dragEnter =(e) =>{
        e.preventDefault();
    }


    dragLeave=(event) =>{
        event.preventDefault();
        event.stopPropagation();
    }

    dragStart=(event) =>{
        event.stopPropagation();
        event.dataTransfer.setData("text",event.target.id);
        event.target.removeAttribute("aria-label");
    }

    dragDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let arrayTargetLocation = [];
        if(e.target.classList.contains("drop-zone")){
            let zoneColor =  e.target.getAttribute("datazone");
            const id = e.dataTransfer.getData('text');
            let bottle = document.getElementById(id);

            if(bottle.getAttribute("datazone") === zoneColor && bottle != null){
                //e.target.append(document.getElementById(id));

                const row = e.target.parentElement.parentElement.attributes.datalinebottle.value;
                const column = e.target.attributes.databottle.value;
                const findBottleById = document.getElementById(id).id.split('-')[1];
                const newLocation = this.state.arrayTargetLocation.filter(element => element.child.props.bottle._id ===findBottleById )[0];
                const arrayTargetLocation =  this.state.arrayTargetLocation.filter(element => element.child.props.bottle._id !==findBottleById );
                const bottleFind = this.searchBottles(findBottleById);

                this.updateBottle(bottleFind,row,column);
                newLocation.container =  e.target;
                arrayTargetLocation.push(newLocation);
                e.target.classList.remove("drop-zone");

                this.setState({
                    move:true,
                    arrayTargetLocation
                });
            }
        }

        let reInitZoneDrop = document.querySelectorAll('.contentBottle');
        for(let content of reInitZoneDrop)
        {
            if(!content.classList.contains("drop-zone") && !content.hasChildNodes()){
                content.classList.toggle("drop-zone");
            }
        }
    }

    updateBottle = (bottle,row,column) => {
        let bottlesMove = this.state.bottlesMove.filter(bot => bot._id !== bottle._id );
        bottle.location={
            column:parseInt(column),
            row:parseInt(row)
        };
        bottlesMove.push(bottle);
         this.setState({
             bottle:{...bottle},
             bottlesMove
        });
    }

    validateMoveBottleInCellar = () => {
        this.props.updateBottleToCellar(this.state.bottlesMove);
        this.setState({
            move:false
        });
    }
    resetMoveBottleInCellar = () => {
       const bottlesMove = [];
        window.location.reload(false);
    }

    searchBottles = (id) => {
        const bottle = this.state.bottles.filter(bot => bot._id === id)[0];
        return bottle;
    }
    addCellar = (cellars, zones) => {
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
                <h2 className='cellartitre'> {cellar.name}</h2>
                <h3 className='cellarelement'>Nombre de bouteilles dans la cave : {this.state.totalBottles[cellar.id]}</h3>
                <section id={cellar.id} className="zoneCellars cellarelement">
                                {zonesByCellar.map((elements) =><this.creatZoneCellars zoneElements={elements} index={elements.id}  key={elements.id+moreKey}/>)}
                </section>
        </>);
        }
       return (html);
    }

    buttonValidateMoveBottle = () => {
        let html="";
       return  html = (<>
            <div id="upMoveBottle">
                <button className="btn-success"  onClick={this.validateMoveBottleInCellar}>
                    Validez les déplacements
                </button>
                <button  className="dio-btn-danger" onClick={this.resetMoveBottleInCellar}>
                   Annuler les déplacements
                </button>
            </div>
        </>);
    }

    creatZoneCellars = ({zoneElements, index}) =>{
        let color = zoneElements.color;
        let titleColor = color === "white" ? "Blanc" : color === "pink" ? "Rosé" : "Rouge"
        return(
            <>
                <div className="wine-zone">
                    <h3>Emplacement vin {titleColor} </h3>
                    <div className="zone" datazone={color} >
                        <ShowZonesCellar zoneElements={zoneElements} zone={color} index={zoneElements.id + index}
                        columns={zoneElements.columns} rows={zoneElements.rows}
                        key={zoneElements._id +index} dragover={this.dragOver}
                        dragenter={this.dragEnter} dragleave={this.dragLeave} drop={this.dragDrop} addBottlesToCellars={this.addBottlesToCellars}/>
                    </div>
                </div>
            </>
        );
    }

    render() {
        let allCellarsWithZones = {};
        {
            allCellarsWithZones= this.state.allCellarsWithZones
        };
        const {cellars,zones} = allCellarsWithZones;
        if(this.state.isLoadedCellar){
            const moreKey = 10;
            return (
                <>
                    {this.addCellar(cellars, zones)}
                    {this.state.showBottles && this.state.arrayTargetLocation.map(div => ReactDOM.createPortal(div.child,div.container))}
                    {this.state.move  && this.buttonValidateMoveBottle()}
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
                            <button className="button-modal-cellar btn-outline-success" onClick={()=> this.editBottle(this.state.bottle)}>Modifier</button><button className="button-modal-cellar dio-btn-danger">Fermer</button>
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
const mapDispatchToProps = (dispatch)=>{
    return {
        updateBottleToCellar:(objBottles)=>dispatch(updateBottleToCellar(objBottles))
    }
}
export   default connect(mapStateToProps,mapDispatchToProps)(WineCellar);


