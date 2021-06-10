import React from 'react';
import CreateCellar from './CreateCellar';

class CreateCellarsAndZones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step:1,

            //step 1
            userId:"",
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

    showStep = ()=>{

        const { step } = this.state; // equivalent à const step = this.state.step
        if (step === 1) {
            <CreateCellar/>
        }
    }
    render() {
        const { step } = this.state;
        return(
            <>
                <h2>Main</h2>
                <CreateCellar/>
            </>
        );
    }
}
export default CreateCellarsAndZones;