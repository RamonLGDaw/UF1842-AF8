const stringUtils = require('./stringUtils')
const dateUtils = require('./dateUtils')

console.log(stringUtils.capitalizeFirstLetter('hola'));
console.log(stringUtils.reverseString('Hola mundo'));
console.log(`${dateUtils.getCurrentDate()}\n`);

console.log('Fecha introducida como objeto:')
const fechaHoy = new Date();
console.log(dateUtils.getFormattedDate(fechaHoy,"DD/MM/YYYY" ))
console.log(`${dateUtils.getFormattedDate(dateUtils.getCurrentDate(),"DD/MM/YYYY" )}\n`)

console.log('Fecha en formato cadena:')
console.log(dateUtils.getFormattedDate("2024-02-15","YYYY-MM-DD" ))
console.log(dateUtils.getFormattedDate("2024-02-15","DD/MM/YYYY" ))
console.log(dateUtils.getFormattedDate("2024-02-15","DD--MM--YYYY" ))