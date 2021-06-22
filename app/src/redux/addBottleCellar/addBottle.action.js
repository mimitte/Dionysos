import { ADD_BOTTLE } from './type';
export const addBottle =(bottleObj,zone)=>{
    // déclarer une propriété zone dans bottleObj
    bottleObj.zone= zone;
    // FETCH
    return(dispatch=>{

        fetch('http://localhost:5000/api/bottle',{
            method:"POST",
            // cela indique au server de l'api que le corps de la requête est en json
            headers:{"Content-Type": "application/json"} ,
            body: JSON.stringify(bottleObj)
        })
       .then(response=>response.json())
       .then(data=>{
            data.push({idZone : zone})
            dispatch({
                type:ADD_BOTTLE,
                payload:data
            })
        })
        .catch(error=>{
            console.log(error);
        })
    })
    
}
    