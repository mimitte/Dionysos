import  {LIST_BOTTLES, LIST_ZONES} from "./types";
const data = {
  'zonesCellar': [],
  'idCellar': "",
  'nameCellar' : "",
  'descriptionCellar': "",
  'bottlesCellar': [],
}
const id =`609ea3b71fac1d1be0430703`;
export const getAllZonesToCellar =()=>{
  return  (dispatch)=>{
    return (
        fetch(`http://localhost:5000/api/cellar/${id}`)
        .then(response => response.json())
        .then(
          (result) => {
          data.idCellar = result._id;
          data.descriptionCellar = result.description;
          data.nameCellar = result.name;
          fetch(`http://localhost:5000/api/cellar/${id}/zones/`)
          .then(response => response.json())
          .then(
            (zones) => {
              data.zonesCellar = [];
              data.bottlesCellar = [];
              for (const zone of  zones  ){
                data.zonesCellar.push(zone);
              }
              for (const zone of  zones ) {
                fetch(`http://localhost:5000/api/zone/${zone._id}/bottle`)
                .then(response => response.json())
                .then((bottles) => {
                  for (const bottle of bottles) {
                    data.bottlesCellar.push(bottle);
                  }

                })
              }
              dispatch({
                type: LIST_ZONES,
                payload: data,
                isLoaded:true
            });
            }
          )
        }
      )
    )
  }
}
