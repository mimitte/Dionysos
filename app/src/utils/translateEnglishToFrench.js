function translateEnglishToFrench(couleur) {
  
    switch (couleur) {
       
        case  "red":
            return couleur.replace('red','Rouge');
           
        case "pink":
            return couleur.replace('pink','Rosé');
        
            case  "white":

            return couleur.replace('white','Blanc');
                   
        default:
            break;
    }
}

export default translateEnglishToFrench;