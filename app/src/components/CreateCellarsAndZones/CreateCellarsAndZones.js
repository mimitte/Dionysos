import React from 'react';
import CreateRedZone from './CreateRedZone';
import CreatePinkZone from './CreatePinkZone';
import CreateWhiteZone from './CreateWhiteZone';
import CreateCellar from './CreateCellar';

class CreateCellarsAndZones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step:1, 
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
        const {step} =this.state;
        const html1 =<CreateCellar
                        nextStep={this.nextStep}
                    />
        const html2 = <CreateRedZone
                         nextStep={this.nextStep}
                        />
        const html3 = <CreatePinkZone
                         nextStep={this.nextStep}                 
                        />
         const html4 = <CreateWhiteZone
                         prevStepLast={this.prevStepLast}
                        />
   
         if (step == 1) {
             return html2 ;
         }
         else if(step == 2){
             return html2 ;
         }else if(step == 3){
            return html3 ;
        } else if(step == 4){
            return html4 ;
        }       
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

export default CreateCellarsAndZones;