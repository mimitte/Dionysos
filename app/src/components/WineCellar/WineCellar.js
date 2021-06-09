import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowCellar from './ShowCellar'


// const user = {
//     email:"",
//     idCellar: "609ea3b71fac1d1be0430703",
//     name:""
// }


 class WineCellar extends Component {
    constructor(props) {
        super(props)
        let update = false;
        console.log(this.props);
        this.state = {
            zones:this.props.zonesCellar,
            id:this.props.idCellar,
            name:this.props.nameCellar,
            description:this.props.descriptionCellar,
            bottlesCellar:this.props.bottlesCellar,
            move:false,
            etat:true,
            creatHandler:false
        }
    }

    static getDerivedStateFromProps(props,state){
        if(props !== state)
          {
             return {
                zones:props.zonesCellar,
                id:props.idCellar,
                name:props.nameCellar,
                description:props.descriptionCellar,
                bottlesCellar:props.bottlesCellar,
           }
          }
          return null;
      }

    componentDidMount = () => {

        const  bouteilles = this.props.bottlesCellar
        let red = bouteilles.filter( redBottle => redBottle.color ==="red" );
        let white = bouteilles.filter( whiteBottle => whiteBottle.color ==="white" );
        let pink = bouteilles.filter( pinkBottle => pinkBottle.color ==="pink");
        this.dispatchBottle(red, "red");
        this.dispatchBottle(white, "white");
        this.dispatchBottle(pink, "pink");
    }

    creatDispatchBottle =()=>{
        const  bouteilles = this.props.bottlesCellar
        let red = bouteilles.filter( redBottle => redBottle.color ==="red" );
        let white = bouteilles.filter( whiteBottle => whiteBottle.color ==="white" );
        let pink = bouteilles.filter( pinkBottle => pinkBottle.color ==="pink");
        this.dispatchBottle(red, "red");
        this.dispatchBottle(white, "white");
        this.dispatchBottle(pink, "pink");
    }

    componentDidUpdate (props, state){

    }

    dispatchBottle = (elements, color) => {
        let loc  = elements.map((bottle) => {
            let rowBottle = bottle["location"].row;
            let columnBottle = bottle["location"].column;
            let element = document.querySelector("[datazone='" + color + "'] [datalinebottle='" + rowBottle + "'] [databottle='" + columnBottle + "']");
            let drag = document.createElement("div");
            drag.classList.add("draggable-" + color);
            drag.setAttribute("draggable","true");
            drag.setAttribute("id","draggable-" + bottle._id);
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


    dragOver =(event) =>{
        event.preventDefault();
        event.stopPropagation();
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



    creatZoneCellars = ({zoneElements}) =>{
        let color = zoneElements.color;
        let titleColor = color === "white" ? "Blanc" : color === "pink" ? "Rosé" : "Rouge"
        return(
            <>
                <div className="wine-zone">
                    <h3>Emplacement vin {titleColor} </h3>
                    <div className="zone" datazone={color} >
                        <ShowCellar zone={color} columns={zoneElements.columns} rows={zoneElements.rows} key={zoneElements.id}/>
                    </div>
                </div>
            </>
        );
    }

    render() {
        let btnValidate = this.state.move === true ? [<button id="update-bottle">Validez le déplacement</button> ]: [<div></div>];
        const {zonesCellar } = this.props;
        return (
            <>
                <h2>Cave: {this.state.name}</h2>
                <h3>Nombre de bouteilles total : {this.state.bottlesCellar.length > 0 ? this.props.bottlesCellar.length:''}</h3>
                <section id="zoneCellars">
                        {zonesCellar.map((elements) =><this.creatZoneCellars zoneElements={elements}  key={elements.id}/>)}
                </section>
                {btnValidate}
            </>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
      ...state.bottlesCellarReducer
    }
}
export default  connect(mapStateToProps,)(WineCellar);


