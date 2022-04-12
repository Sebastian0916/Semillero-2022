
console.log( 'Asingnación por referencia' )
const persona = {

    nombre:'Andres',
    apellido: 'Peña',
    edad: 25,
    direccion:{
        ciudad:'Bogotá',
        zip:'011792'
    },
    tipo:'comprador'

}

const personavendedor = persona
personavendedor.tipo = 'vendedor'

console.log( persona )
console.log( personavendedor )

////--------------------------------------------
console.log( 'Asingnación por valor - spread operator' )

const persona2 = {

    nombre:'Andres',
    apellido: 'Peña',
    edad: 25,
    direccion:{
        ciudad:'Bogotá',
        zip:'011792'
    },
    tipo:'comprador'

}

const personaPorValor = { ...persona2 }
personaPorValor.tipo = 'vendedor'


console.log( persona2 )
console.log( personaPorValor )


