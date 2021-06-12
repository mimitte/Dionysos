import { CREATE_CELLAR } from "./type";

export const createCellar =cellarObj=>{
   
    // FETCH
    return(dispatch=>{

        fetch('http://localhost:5000/api/cellar',{
            method:"POST",
            // cela indique au server de l'api que le corps de la requête est en json
            headers:{"Content-Type": "application/json"} ,
            body: JSON.stringify(cellarObj)
        })
       .then(response=>response.json())
       .then(data=>{
            dispatch({
                type:CREATE_CELLAR,
                payload:data
            })
        })
        .catch(error=>{
            console.log(error);
        })
    })
    
}


    