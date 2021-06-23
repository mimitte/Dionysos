import  { LIST_ALL_ELEMENTS_OF_CELLARS } from "./types";

/** fonction getAllBottles contient toute la logique de notre demande à la BD
 * Ici notre demande consiste à récupérer toutes les bouteilles ajoutées dans la cave
 * On exporte la fonction getAllBottles parce qu'on va l'importer dans le reducer
*/

const data = {
  cellars: [],
  zones: [],
  bottles: [],
}



const id = localStorage.getItem('userId');
export const getAllElements = () => {
  return  (dispatch)=>{
    return (
        fetch(`http://localhost:5000/api/cellar/user/${id}`)
        .then(response => response.json())
        .then(
          (result) => {
            data.cellars= [];
            data.zones= [];
            for(const cellar of result)
            {
              const {_id, description, name, zones, ...rest } = cellar;
              if(zones.length > 0){
                data.cellars.push({id:_id,description:description,name: name, zones:zones});
                let idCellar = _id;
                for (const zone of zones)
                {

                  const {_id, color, name, columns, rows, bottles, ...rest } = zone;
                  data.zones.push({id:_id,color:color,name: name, columns:columns, rows:rows, idCellar:idCellar,bottles:bottles});
                  let idZone = _id;
                  for (const bottle of bottles){
                    const {_id, color, name, location, country, region, years } = bottle;
                    data.bottles.push({_id:_id, color:color, name:name, location:location, country:country, region:region, years:years, idZone:idZone} );
                  }
                }
              }
            }
            dispatch({
              type: LIST_ALL_ELEMENTS_OF_CELLARS,
              payload: data,

              isLoadedCellar:true
            });
        }
      )
    )
  }
}
