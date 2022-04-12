

const arreglo1 = new Array(4)
arreglo1[0] = 1
arreglo1[1] = 2
arreglo1[2] = 3
arreglo1[3] = 4
arreglo1[4] = 5
arreglo1[5] = 6

console.log(arreglo1)


const array2 = new Array(1,2,3,4,10)
console.log(array3)

const array3 = [1,2,3,4]

const arrayNuevo = [...array3] 
arrayNuevo.push(5)

console.log(arrayNuevo)
console.log(array3)

const arrayFuntion = array3.map( function(n){
    return    n *2 
})

console.log(array3)
console.log(arrayFuntion)


