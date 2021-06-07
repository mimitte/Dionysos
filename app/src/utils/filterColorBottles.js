const filterColorbottles =(bouteilles)=>{
        return {
            red: bouteilles.filter( redBottle => redBottle.color ==="red" ).length,
            white:bouteilles.filter( whiteBottle => whiteBottle.color ==="white" ).length,
            pink:bouteilles.filter( pinkBottle => pinkBottle.color ==="pink").length
        }
}

export default filterColorbottles;