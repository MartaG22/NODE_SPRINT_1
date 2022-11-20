// Nivell 1
/*Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.*/

function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}

module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
};



// No et funciona perque estàs executant coses dins els arxius que vols testejar, 
// Marta! En els arxius on s'exporten les funcions no s'ha d'executar res.
// A més, les funcions que fan console.log s'haurien de reescriure perque facin return ;)