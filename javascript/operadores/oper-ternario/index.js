/*
Operadores ternário ou condicional

? se
: se não
*/

const log = (...value) => console.log(...value);

const rain = false

const umbrela = rain ? 'levar guarda-chuva' : 'não levar guarda-chuva'

const balance = true
const isNotBlocked = true
const accountExists = false

const transferOk = balance && isNotBlocked && accountExists ? 'transferência realizada com sucesso' : 'transferência não realizada'

log({umbrela})
log({transferOk})