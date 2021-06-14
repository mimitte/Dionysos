import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import CreateRedZone from './CreateRedZone';
import CreatePinkZone from './CreatePinkZone';
import CreateWhiteZone from './CreateWhiteZone';
import CreateCellar from './CreateCellar';
// redux
import { connect } from "react-redux";
import { createZoneAction } from '../../redux/CreateCellarsAndZones/createZone.action';


class CreateCellarsAndZones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step:1,
            rows:0,
            columns:7,
            isCheckedRedZone:false,
            color:"red",
            user: localStorage.getItem('userId'),
            cellar:"" ,
            
        };
    }
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

    prevStepLast =()=>{
        const { step }=this.state;
        this.setState({
            step: step - 3
        })
    }
    
    showStep =()=>{
    
        const { step,rows,cellar } = this.state;
        const cellarsOfUser = this.props.cellarsOfUser;
        console.log("mes caves dans parent component",this.props.cellarsOfUser)
        const html1 =<CreateCellar
                            nextStep={this.nextStep}
                            step={step}
                    />
        
        const html2 = <CreateRedZone
                            handleChange={ this.handleChange }
                            cellarsOfUser={cellarsOfUser}
                            nextStep={this.nextStep}
                            handleSubmitForCreateZone={this.handleSubmitForCreateZone}
                            rows={rows}
                            cellar={cellar}
                            step={step}
                        />
        const html3 = <CreatePinkZone
                            nextStep={this.nextStep}
                            step={step}
                          
                        />
         const html4 = <CreateWhiteZone
                            prevStepLast={this.prevStepLast}
                            step={step}
                        />
   
        //  if (step == 1) {
        //      return html1 ;
        //  }
        //  else if(step == 2){
        //      return html2 ;
        //  }else if(step == 3){
        //     return html3 ;
        // } else if(step == 4){
        //     return html4 ;
        // }   
       if(step == 1){
             return html1 ;
             }
        else if(step == 2){
             return html2 ;
         }
         
    }

    handleChange = input => event =>{
        event.preventDefault();
        // console.log("voici les inputs",event.target.value);
        const valeurInput = event.target.type === "checkbox" ?
        !event.checked :
        event.target.value
        this.setState({
             [input]:valeurInput      
        })
    }

    handleSubmitForCreateZone =(event)=>{
        const {nextStep} =this.state;
        event.preventDefault();
        console.log("saisie via form creer zone ", event);
        this.props.createZoneAction(this.state);
         // message alert pour confirmer que la cave a bien été créée, redirection création zone
        confirmAlert({
            
            title:"Votre zone rouge a bien été créé",
            message:"Voulez-vous créer une zone rosée pour vos vins Rosé ?" ,
            buttons: [
                {
                label: 'Oui',
                onClick: () => nextStep()
                },
                {
                label: 'Non',
                onClick: () => { return }
                }]
        })
        // Vider les input après la saisie
        this.setState = {
            step:2,
            isCheckedRedZone:false,  
            name:"",
            rows:0,
            columns:7,
            color:"",
            user:"",
            cellar:""
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

const mapStateToProps = (state)=>{
    return {
      ...state.getCellarsOfUserReducer
    }
  }
export default connect(mapStateToProps, (null, {createZoneAction}))(CreateCellarsAndZones);
