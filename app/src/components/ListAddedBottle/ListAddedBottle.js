import React from 'react';
import CardFiltredBottle from '../CardFiltredBottle/CardFiltredBottle';
import { FaTrashAlt } from "react-icons/fa";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


class TabForAddedBottle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            bouteilles: [],
          };
    }

    suppression (id) {
      confirmAlert({
        // title: 'Confirmation avant suppression',
        message: 'êtes-vous sûrs de supprimer cet élément?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
            // Ici la logique de suppression
            const bouteilles = [...this.state.bouteilles];
            const index = bouteilles.findIndex(bouteille => bouteille.id === id);
            bouteilles.splice(index, 1);
            this.setState({
                bouteilles: bouteilles
              })
            }  
          },
            
          {
              label: 'No',
              onClick: () => {return}
          }
            
            
          
        
        ]
      })
    }
        

    createWineTableRow = (bouteille, index) => {
        const element = (
            <tr key={bouteille.id} className="cursor-pointer">
                <td>{index + 1}</td>
                <td>{bouteille.name}</td>
                <td>{bouteille.color}</td>
                <td>{bouteille.region}</td>
                <td>{bouteille.country}</td>
                <td>{bouteille.year}</td>
                <td className="text-center">
                  <FaTrashAlt onClick={() => this.suppression(bouteille.id)}/>
                </td>
            </tr>
        );
        return element;
    }
    componentDidMount() {
        fetch("http://localhost:5000/api/bottle")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                bouteilles: result
              });
            },
            // Remarque : il est important de traiter les erreurs ici
            // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
            // des exceptions provenant de réels bugs du composant.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {
        const { error, isLoaded, bouteilles } = this.state;
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
                    <table className="table table-hover mt-3 tableauVins">
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
                                this.state.bouteilles.map(this.createWineTableRow)
                            }
                        </tbody>
                    </table>

                    <CardFiltredBottle/>
                </div>
                   
               }
           </React.Fragment>
          );
        }
      }
}

export default TabForAddedBottle;



