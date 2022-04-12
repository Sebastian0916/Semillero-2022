


const nombre = 'Andres' 
const apellidos = 'Peña' 

const nombreCompleto = nombre + ' ' + apellidos

console.log(nombreCompleto)

const nombreCompleto_BackTick = `${ nombre } ${ apellidos }`

console.log(nombreCompleto_BackTick)


console.log(`Result = ${ 1+9 }`)

console.log(`Result = ${ getString( 9+8 ) }`)


function getString( n ){
    return `Number = ${ n }`
}

console.log('perro1', "perro2")