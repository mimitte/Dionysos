import  { UPDATE_BOTTLE_TO_CELLAR } from "./types";


const data = {
  cellars: [],
  zones: [],
  bottles: [],
}



const id = localStorage.getItem('userId');
export const updateBottleToCellar = (ObjBottles) => {
    for(const bottle of ObjBottles){
        let obj ={
          "location" : 
            { "column": bottle.location.column,
              "row": bottle.location.row
            }
        }
        return  (dispatch)=>{
             fetch(`http://localhost:5000/api/bottle/${bottle._id}`,{
                    method : "PATCH",
                    headers:{"Content-Type": "application/json"} ,
                    body:JSON.stringify (obj)
                })
                .then(response => response.json())
                .then(
                (result) => {
                    dispatch({
                    type: UPDATE_BOTTLE_TO_CELLAR,
                    payload: result
                    });
                }
            )
        }
    }
}
