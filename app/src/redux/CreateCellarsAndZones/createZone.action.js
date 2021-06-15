import { CREATE_ZONE } from "./type";

export const createZoneAction =(zoneObj)=>{
   console.log("voici zoneObj dans action",zoneObj);
   // reformer l'objet tel que l'api attend
   let body = {
       cellar: zoneObj.cellar,
       zone: {
           name: zoneObj.name,
           rows: zoneObj.rows,
           columns: zoneObj.columns,
           color: zoneObj.color,
           user: zoneObj.user
        }
   }
   console.log("body", body);
    // FETCH
    return(dispatch=>{
        
        fetch(`http://localhost:5000/api/zone/`,{
            method:"POST",
            // cela indique au server de l'api que le corps de la requête est en json
            headers:{"Content-Type": "application/json"} ,
            body: JSON.stringify(body)
        })
       .then(response=>response.json())
       .then(data=>{
            dispatch({
                type:CREATE_ZONE,
                payload:data
            })  
        })
        .catch(error=>{
            console.log(error);
        })
    })
    
}
    