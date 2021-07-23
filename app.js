const { crearArchivoTabla } = require( './helpers/multiplicar' ) 
const  argv  = require( './config/yargs' )
const colors = require( 'colors' )

console.clear()

const listar = argv.listar;
const base = argv.base;
const hasta = argv.hasta



crearArchivoTabla( base, listar, hasta )
    .then( nombreDeTabla => console.log( colors.brightRed( `${ nombreDeTabla } ha sido creada` ) ))
    .catch( err => console.log( err ))







