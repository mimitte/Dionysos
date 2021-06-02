import React from 'react';
import CardFiltredBottle from '../CardFiltredBottle/CardFiltredBottle';
import { FaTrashAlt } from "react-icons/fa";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// redux
import { connect } from "react-redux";
import { deleteBottle } from '../../redux/deleteBottleCellar/deleteBottle.action';
import { getAllBottles } from '../../redux/ListBottlesCellar/listBottleCellar.action';


class TabForAddedBottle extends React.Component {
    constructor(props) {
        super(props);

    }

    suppression=(id) => {
      // console.log(id);
      confirmAlert({
        // title: 'Confirmation avant suppression',
        message: 'êtes-vous sûrs de supprimer cet élément?',
        buttons: [
          {
            label: 'Oui',
            onClick: () => {
              
              this.props.deleteBottle(id);
 
            }  
          },
            
          {
              label: 'Non',
              onClick: () => {return}
          }
        ]
      })
    }
  
    createWineTableRow = (bouteille, index) => {
      // console.log(bouteille._id);
        const element = (
            <tr key={bouteille._id} className="cursor-pointer">
                <td>{index + 1}</td>
                <td>{bouteille.name}</td>
                <td>{bouteille.color}</td>
                <td>{bouteille.region}</td>
                <td>{bouteille.country}</td>
                <td>{bouteille.year}</td>
                <td className="text-center">
                  <FaTrashAlt onClick={() => this.suppression(bouteille._id)}/>

                </td>
            </tr>
        );
        return element;
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.bouteilles !== this.props.bouteilles) {
        console.log('bottle state has changed.')

      }
    }
    render() {
       
        const { error, isLoaded, bouteilles } = this.props;
        // console.log("ici les props du store",this.props);
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          
          return <div>Chargement…</div>;
        } else {
          return (
            <React.Fragment>
        
            {
                <div className="mb-3">
                    <h2>Voici la liste des vins dans votre cave</h2>
                    <table className="table table-hover mt-3">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Couleur</th>
                                <th scope="col">Région</th>
                                <th scope="col">Pays</th>
                                <th scope="col">Année</th>
                                <th scope="">Supprimer</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bouteilles.map(this.createWineTableRow)
                            }
                        </tbody>
                    </table>
                    <CardFiltredBottle bouteilles={bouteilles}/>               
                </div>
                   
               }
           </React.Fragment>
          );
        }
      }

}
// ça nous retourne l'état du state qui se trouve dans le store
const mapStateToProps = (state)=>{
  // console.log("state via mapStatoToProps", state);
  return {
     ...state.listBottles
  }
}
// ici on va faire une action delete qui mettra à jour le store
const mapDispatchToProps = (dispatch)=>{
  return {
    deleteBottle:(id)=>dispatch(deleteBottle(id)),
  }
}
// ça va chercher le props qui est dans App.j et le mapper dans la variable bouteilles pour ce composant
export default connect(mapStateToProps, mapDispatchToProps)(TabForAddedBottle);





