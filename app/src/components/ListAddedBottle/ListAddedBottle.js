import React from 'react';

class TabForAddedBottle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            bouteilles: []
          };
    }
    createWineTableRow = (bouteille, index) => {
        const element = (
            <tr key={bouteille.id}>
                <td>{index + 1}</td>
                <td>{bouteille.name}</td>
                <td>{bouteille.color}</td>
                <td>{bouteille.region}</td>
                <td>{bouteille.country}</td>
                <td>{bouteille.year}</td>
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
                <div>
                    <h2>Voici la liste des vins dans votre cave</h2>
                    <table className=" table table-responsive mt-3 ml-auto">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Couleur</th>
                                <th scope="col">Région</th>
                                <th scope="col">Pays</th>
                                <th scope="col">Année</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.bouteilles.map(this.createWineTableRow)
                            }
                        </tbody>
                    </table>
                </div>
                   
               }
           </React.Fragment>
          );
        }
      }
}

export default TabForAddedBottle;




