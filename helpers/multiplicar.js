const fs = require( 'fs' );
const colors = require( 'colors/safe' )
const { resolve } = require('path/posix');

colors.setTheme({
    baseTheme: [ 'brightRed', 'italic'],
    resultado: [ 'rainbow', 'bold' ]
})

const crearArchivoTabla = async( base = 5, listar = false, hasta = 10 ) => {
    try{
        const nombreDeTabla = `La Tabla del ${ base }`

        
        let salida = '';
        let consola = '';
        
        for( let i = 1; i <= hasta; i++ ){
        consola +=  colors.baseTheme( base ) + colors.red( ' x ' ) + colors.baseTheme( i ) + colors.yellow( ' = ' ) + colors.resultado(`${ base * i}` + `\n`)
        salida += `${ base } x ${ i } = ${ base * i }\n`
        }
        if( listar != false ){
            console.log( colors.brightRed( '=========================================' ) )
            console.log( colors.brightYellow( `${ nombreDeTabla }` ) )
            console.log( colors.brightRed( '=========================================' ) )

            console.log( consola )
        }
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        
        return( nombreDeTabla )
    }catch( err ){
        throw err 
    }
}


module.exports = {

    crearArchivoTabla

};