import { CREATE_CELLAR } from "./type";

export const createCellar =(cellarObj)=>{
   console.log("voici cellarObj",cellarObj);
    // FETCH
    return(dispatch=>{
        
        fetch(`http://localhost:5000/api/cellar/`,{
            method:"POST",
            // cela indique au server de l'api que le corps de la requête est en json
            headers:{"Content-Type": "application/json"} ,
            body: JSON.stringify(cellarObj)
        })
       .then(response=>response.json())
       .then(data=>{
           // supprimer une propriété d'un objet
        //    delete data.user;
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

