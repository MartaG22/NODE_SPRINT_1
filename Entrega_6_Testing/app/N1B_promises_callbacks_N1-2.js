// 02 - Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

// Nivell 1 - Exercici 2   //! --- CORREGIT-----OKKKKK
/*Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.*/


//*Exercici  Corregit  ------------    (27-5-22)    --------------------OKKKKK

// //! ejemplo:
// const arrow = (par, cb) => {
//     if (typeof par !== 'number') {
//       throw new Error('parameter must be a number');
//     } else {
//       return cb(par);
//     }
//   };
  
//   const getHour = (hour) => {
//     if (hour <= 11) {
//       return 'Buenos dias';
//     } else if (hour <= 18) {
//       return 'Buenas tardes';
//     } else {
//       return 'Buenas noches';
//     }
//   };
//   module.exports = { arrow, getHour };

   //!   ^^^^^^^ EJEMPLO ^^^^
   
   const sumNums = (number, callback) => {
    //    let number2 = parseInt(Math.random() * 100);
       const result = number / 2;
       // console.log(number1, number2)
       console.log(result)
        callback({number, result});
    };
    function showResult(number, result) {
        // console.log(`El nombre resultant és ${result}!!!`);
        if (result === 0) {
            console.log(result)
            return (`El nombre ${number} és parell!!!`);
        } else {
            return (`El nombre ${number} és senar!!!`);
        }
    }



    // function esEntero(numero){
    //     if (numero % 1 == 0) {
    //         alert ("Es un numero entero");
    //     } else {
    //         alert ("Es un numero decimal");
    //     }
    // }


// // sumNums(parseInt(Math.random() * 100), showResult)
// const randomNumber = parseInt(Math.random() * 100);
// sumNums(randomNumber, showResult);

module.exports = {showResult, sumNums};