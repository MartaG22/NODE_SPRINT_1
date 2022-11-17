// 02 - Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

// Nivell 1 - Exercici 2   //! --- CORREGIT-----OKKKKK
/*Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.*/


//*Exercici  Corregit  ------------    (27-5-22)    --------------------OKKKKK

function showResult(result) {
    console.log(`El nombre resultant és ${result}!!!`);
    if (result % 2 === 0) {
        return console.log(`El nombre ${result} és parell!!!`);
    } else {
        return console.log(`El nombre ${result} NO és parell! És senar!!!`);
    }
}

function sumNums(number1, callback) {
    let number2 = parseInt(Math.random() * 100);
    const result = number1 + number2;
    callback(result);
}
// sumNums(parseInt(Math.random() * 100), showResult)

module.exports = {showResult, sumNums};