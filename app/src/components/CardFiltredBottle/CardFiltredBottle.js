import React from 'react';

function CardForEachWineColor(props) {
    // Destructuration d'objet ==>
    // c'est comme si on écrit: const username = props.username
    // il faut que les props soit les mêmes nom que les props dans <Utilisateur/>

    const {color,quantity} = props
    
    return (
    <React.Fragment>
        <div  className="card col-lg-3 offset-1 mt-5 d-flex" style={{width: "18rem"}}>
            <img className="card-img-top" src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" style={{width: "18rem", height:"6rem"}} />
            <div className="card-body">
                <h4 className="card-title">Vin {color}</h4>
                <p className="card-text">Il y a {quantity} bouteilles de vin {color} dans votre cave</p>
            </div>
        </div>
    </React.Fragment>   
       
    );
}

class CardFiltredBottle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            bouteilles: [],
            };
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/bottle")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                bouteilles: result,
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
        const quantityRedBottles = this.state.bouteilles.filter( redBottle => redBottle.color ==="rouge" ).length ;
        const quantityWhiteBottles = this.state.bouteilles.filter( whiteBottle => whiteBottle.color ==="blanc" ).length ;
        const quantityPinkBottles = this.state.bouteilles.filter( pinkBottle => pinkBottle.color ==="rose" ).length;
        // const imgRedWine= "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"; 
        // const imgWhiteWine = "https://images.unsplash.com/photo-1498429152472-9a433d9ddf3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80";
        // const imPinkWine = "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
          return (
              <div className="d-flex flex-column">
                  <CardForEachWineColor
                        quantity={quantityRedBottles}
                        color={`rouge`}
                        />
                  <CardForEachWineColor
                  quantity={quantityWhiteBottles} color={`blanc`}/>
                  <CardForEachWineColor
                  quantity={quantityPinkBottles} color={`rosé`}/>



              </div>
          )
        }
    }
           
             
}
export default CardFiltredBottle;