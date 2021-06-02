const filterColorbottles =(bouteilles)=>{
        return {
            red: bouteilles.filter( redBottle => redBottle.color ==="rouge" ||  redBottle.color ==="red" ).length,
            white:bouteilles.filter( whiteBottle => whiteBottle.color ==="blanc" ).length,
            pink:bouteilles.filter( pinkBottle => pinkBottle.color ==="rose"  || pinkBottle.color ==="rosé").length
        }
}

export default filterColorbottles;