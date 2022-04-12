

const nombre = 'Andres'

function saludar( nombre ){
    return `Hola ${ nombre }`
}

console.log(typeof(saludar))

/*
console.log(saludar(nombre))
saludar = 'Nuevo saludo'
console.log(typeof(saludar))
*/ 

console.log(saludar)


const saludar2 = function(){
    return `Hola ${ nombre }`
}

/*
console.log(saludar2(nombre))
saludar2 = 'Nuevo saludo'
console.log(typeof(saludar))
*/

console.log(saludar2( nombre ))

console.log(' Funciones de tipo flecha - funcion lamda ')

const saludoTipoFlecha = ( n ) => {
    return `Hola ${ nombre }`
}

console.log(saludoTipoFlecha( nombre ))

const saludoTipoFlechaCorta = ( n ) => `Hola ${ n }`

console.log(saludoTipoFlechaCorta( nombre ))

const saludoTipoFlechaCortaMasCorta =  n  => `Hola ${ n }`

console.log(saludoTipoFlechaCortaMasCorta( nombre ))

const saludoTipoFlechaCortaDefecto = ( n='Desconocido' ) => `Hola ${ n }`

console.log(saludoTipoFlechaCortaDefecto())



console.log('Funciones feclas - usando funciones')

const datos  = [ { id:1, nombre: 'Andres' } , { id:2, nombre: 'James'} ]

const existeAndres = datos.some( ( dato ) => { dato.id === 1 } )

const existeJames = datos.find( ( dato ) => { dato.id === 2 } )

console.log( existeAndres )
console.log( existeJames )





