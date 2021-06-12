import React from 'react';

import CreateRedZone from './CreateRedZone';
import CreatePinkZone from './CreatePinkZone';
import CreateWhiteZone from './CreateWhiteZone';
import CreateCellar from './CreateCellar';
// redux
import { connect } from "react-redux";
import { createCellar } from '../../redux/CreateCellarsAndZones/createCellar.action'


class CreateCellarsAndZones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step:1,
            //step 1
            isCheckedRedZone:false,
            isCheckedPinkZone:false,
            isCheckedWhiteZone:false,
            nbBottles:0,  
            name: this.getNameOfZone(),
            rows: "",
            columns: "",
            color: "",
            user: localStorage.getItem('userId'),
            cellar:localStorage.getItem('userId'),

                
        };
    }
    getNameOfZone =()=>{
        
        if (this.isCheckedRedZone == true) {
            return "Mes superbes vins rouges"
        }
        else if(this.isCheckedPinkZone = true){
            return "Mes vins Rosé"
        }
        else if (this.isCheckedWhiteZone = true) {
            return "Mes vins blancs"
        }else{
            return null
        }
    }
//     getColorOfZone =()=>{
//         if (this.isCheckedRedZone === true) {
//             return "red"
//         }
//         else if(this.isCheckedPinkZone === true){
//             return "pink"
//         }
//         else if (this.isCheckedWhiteZone == true) {
//             return "white"
//         }
//     }
   
//     getRowsOfZone =(nbBottles)=>{
//         if (this.nbBottles >=1) {
//             const rows = nbBottles % 7 + 1
//         return rows; 
//         } else{
//             const rows = 0;
//             return rows;
//         }
          
//     }
//    getCapacityBottle=(rows)=>{
//        if (this.nbBottles >=1) {
//         const capacity = rows * 7;
//         return capacity;
//        } else{
//            const capacity =0;
//            return capacity;
//        }
        
//    }
    nextStep = () =>{
      const { step }=this.state;
      this.setState({
          step:step + 1
      })  
    }
    prevStep =()=>{
        const { step }=this.state;
        this.setState({
            step: step - 1
        })
    }
    
    showStep =()=>{
    
        const { step , zoneObj,nbBottles } = this.state;
        
        //  const { step,name,description } = this.state; // equivalent à const step = this.state.step
        const html1 =<CreateCellar
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                    />
        const html2 = <CreateRedZone
                            handleChange={ this.handleChange }
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            zoneObj={zoneObj}
                            nbBottles={nbBottles}
                        />

        const html3 = <CreatePinkZone
                        handleChange={ this.handleChange }
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        zoneObj={zoneObj}
                        nbBottles={nbBottles}  
                    />
         const html4 = <CreateWhiteZone
                            nbBottles={nbBottles}
                            handleChange={ this.handleChange }
                            prevStep={this.prevStep}
                            handleSubmit={this.handleSubmit}
                            
                        />
         if (step == 1) {
             return html1 ;
         }
         else if(step == 2){
             return html2 ;
         }else if(step == 3){
            return html3 ;
        } else if(step == 4){
            return html4 ;
        }      
    }

    handleChange = input => event =>{
        event.preventDefault();
        // console.log("voici les inputs",event.target.value);
        const valeurInput = event.target.type === "checkbox" ?
        !event.checked :
        event.target.value
        this.setState({
            cellarObj:{
                [input]:valeurInput
            }     
        })
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        console.log("saisie via form creer cave avec Step", event);
        // createCellar cest l'ACTION CREATE_CELLAR'
        // redux
        this.props.createCellar(this.state);
        // Vider les input après la saisie
        this.setState = {
            step:2,
            //step 1
            cellarObj :{
                name:"",
                description:"",
                user:""
            },
            // user:"",
            // name:"",
            // description:"",
            // step 2
            cellar:"",
            isCheckedRedZone:false,
            isCheckedPinkZone:false,
            isCheckedWhiteZone:false,
            capacityOfRedZone:0,
            capacityOfPinkZone:0,
            capacityOfWhiteZone:0, 
        };
    }
    
    render() {
        const { step } = this.state;  // const step= this.state.step;
        return(
            <>
                <h6 className="mt-2 col-lg-4 col-md-4 col-sm-12 offset-4 ">Etape n°{ step } sur 4 </h6> 
                { this.showStep() } 
            
            </>
        );
    }
}

export default connect(null, { createCellar })(CreateCellarsAndZones);