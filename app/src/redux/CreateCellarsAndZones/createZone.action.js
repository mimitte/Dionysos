import { CREATE_ZONE } from "./type";

export const createZoneAction =(zoneObj)=>{
   console.log("voici zoneObj dans action",zoneObj);
    // FETCH
    return(dispatch=>{
        
        fetch(`http://localhost:5000/api/zone/`,{
            method:"POST",
            // cela indique au server de l'api que le corps de la requête est en json
            headers:{"Content-Type": "application/json"} ,
            body: JSON.stringify(zoneObj)
        })
       .then(response=>response.json())
       .then(data=>{
           if (data.isCheckedRedZone == true) {
            dispatch({
                type:CREATE_ZONE,
                payload:data
            }) 
           }
            
        })
        .catch(error=>{
            console.log(error);
        })
    })
    
}
    