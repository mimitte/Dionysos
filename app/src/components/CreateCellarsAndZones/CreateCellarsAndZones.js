import React from 'react';
import CreateCellar from './CreateCellar';
import CreateZones from './CreateZones';

class CreateCellarsAndZones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step:1,
            //step 1
            userId:localStorage.getItem('userId'),
            name:"",
            description:"",
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
    handleChange = input => event =>{
        event.preventDefault();
        console.log("voici les inputs",event.target.value);
        const valeurInput = event.target.type === "checkbox" ?
        !event.checked :
        event.target.value
        this.setState({

            [input]:valeurInput 
        })
    }

    showStep =()=>{
         const { step } = this.state; // equivalent à const step = this.state.step
         const html1 = <CreateCellar 
                            handleChange={ this.handleChange } 
                            nextStep ={ this.nextStep }
                        />;
         const html2 = <CreateZones
                        handleChange={ this.handleChange }
                        prevStep={this.prevStep}
                      />

         if (step == 1) {
             return html1 ;
         }
         else if(step == 2){
             return html2 ;
         }   
    }
    render() {
        const { step } = this.state;  // const step= this.state.step;
        return(
            <>
                <h6 className="mt-2 col-lg-4 col-md-4 col-sm-12 offset-4 ">Etape n°{ step } sur 2</h6> 
                { this.showStep() } 
            
            </>
        );
    }
}
export default CreateCellarsAndZones;