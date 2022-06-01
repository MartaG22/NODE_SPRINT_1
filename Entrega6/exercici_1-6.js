// https://lenguajejs.com/npm/administracion/package-json/
// https://jestjs.io/docs/getting-started


// Nivell 1
/*Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.
Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1
Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1
Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3
Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers. */


// let number1 = parseInt(Math.random() * 10);
// let number2 = parseInt(Math.random() * 10);


function sumar(a, b) {
    return (`${a} + ${b} = ${a + b}`);
}
function restar(a, b) {
    return (`${a} - ${b} = ${a - b}`);
}
function multiplicar(a, b) {
    return (`${a} * ${b} = ${a * b}`);
}
function dividir(a, b) {
    return (`${a} / ${b} = ${a / b}`);
}
