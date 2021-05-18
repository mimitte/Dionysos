import React from 'react';

function CardForEachWineColor(props) {
    // Destructuration d'objet ==>
    // c'est comme si on écrit: const color = props.color
    // il faut que les props soit les mêmes nom que les props dans <CardForEachWineColor/>

    const {color,quantity,imgVin, imgAlt} = props
    
    return (
    <React.Fragment>
        <div  className="card col-lg-3  mt-1 " style={{width: "10rem"}}>
            <img className="card-img-top" src={imgVin}   style={{width: "10rem", height:"6rem"}}  alt={imgAlt}/>
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
        const quantityRedBottles = bouteilles.filter( redBottle => redBottle.color ==="rouge" ).length ;
        const quantityWhiteBottles =bouteilles.filter( whiteBottle => whiteBottle.color ==="blanc" ).length ;
        const quantityPinkBottles = bouteilles.filter( pinkBottle => pinkBottle.color ==="rose" ).length;
        const imgRedWine= "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"; 
        const imgWhiteWine = "https://images.unsplash.com/photo-1498429152472-9a433d9ddf3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80";
        const imgPinkWine = "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
          return (
              <React.Fragment>
                <h5 className=" mb-1">
                  En total, vous avez {quantityRedBottles + quantityWhiteBottles + quantityPinkBottles } bouteilles de vin dans votre cave
                </h5>
                <br />
              <div className="troisCartesDeVins d-flex justify-content-between">
                 
                  <CardForEachWineColor
                        quantity={quantityRedBottles}
                        color={`rouge`}
                        imgVin ={imgRedWine}
                        imgAlt={'verres de vin rouge'}
                        />
                  <CardForEachWineColor
                        quantity={quantityWhiteBottles}
                        color={`blanc`}
                        imgVin ={imgWhiteWine}
                        imgAlt={'verres de vin blanc'}/>
                  <CardForEachWineColor
                        quantity={quantityPinkBottles}
                        color={`rosé`}
                        imgVin ={imgPinkWine}
                        imgAlt={'verres de vin rosé'}/>
              </div>
              </React.Fragment>
          )
        }
    }            
}
export default CardFiltredBottle;