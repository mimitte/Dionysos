

// export const createZones =zonesObj=>{
   
//     // FETCH
//     return(dispatch=(idCave)=>{

//         fetch('http://localhost:5000/api/zone',{
//             method:"POST",
//             // cela indique au server de l'api que le corps de la requête est en json
//             headers:{"Content-Type": "application/json"} ,
//             body: JSON.stringify(zonesObj)
//         })
//        .then(response=>response.json())
      
//        .then(data=>{
//             dispatch({
//                 type:CREATE_ZONES,
//                 payload:data
//             })
//         })
//         .catch(error=>{
//             console.log(error);
//         })
//     })
    
// }
    