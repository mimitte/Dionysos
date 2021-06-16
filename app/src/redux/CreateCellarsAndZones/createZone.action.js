import { CREATE_ZONE } from "./type";

const idUser = localStorage.getItem('userId');

export const createZoneAction =(zoneObj)=>{
   console.log("voici zoneObj dans action",zoneObj);
   // reformer l'objet tel que l'api attend
   let body = {
        name: zoneObj.name,
        rows: zoneObj.rows,
        columns: zoneObj.columns,
        color: zoneObj.color,
        user: zoneObj.user  
   }
   console.log("body", body);

    // FETCH
    return(dispatch=>{
        
        fetch(`http://localhost:5000/api/zone`,{
            method:'POST',
            // cela indique au server de l'api que le corps de la requête est en json
            headers:{
                "Content-Type": "application/json",
                // "Accept":"application/json""
            } ,

            body: JSON.stringify(body)
        })
       .then(response=>response.json())

       .then(data=>{
            fetch(`http://localhost:5000/api/cellar/${zoneObj.cellar}`,{
                method:'PATCH',
                headers:{
                    "Content-Type": "application/json",
                    "Accept":"application/json"
                },
                body:{
                    user: idUser,
                    zones: [
                       data._id
                    ]
                }
            }
            );
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
    