// No et funciona perque estàs executant coses dins els arxius que vols testejar,
// Marta! En els arxius on s'exporten les funcions no s'ha d'executar res.
// A més, les funcions que fan console.log s'haurien de reescriure perque facin return ;)


// https://www.youtube.com/watch?v=r9HdJ8P6GQI

// Nivell 1 - A  //! okkkk
/*Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.*/

const calculate = require("../app/operacions_1-6.js");

describe("function sumar", () => {
    test('sumar 1 + 2 to equal 3', () => {
        expect(calculate.sumar(1, 2)).toBe(3);
    });
});

describe("function restar", () => {
    test('restar 3 - 1 to equal 2', () => {
        expect(calculate.restar(3, 1)).toBe(2);
    });
});

describe("function multiplicar", () => {
    test('multiplicar 3 * 2 = 6', () => {
        expect(calculate.multiplicar(3, 2)).toBe(6);
    });
});

describe("function dividir", () => {
    test('dividir 6 / 2 = 3', () => {
        expect(calculate.dividir(6, 2)).toBe(3);
    });
});



//Nivell 1 - B   //! SIN ACABAR - ME DA ERROR
// Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1

const {getEmployee, getSalary, asyncFuntion}  = require("../app/asyncAwait_N1-1.js");

test('getEmployee with ID: 2 should return Bill Gates', async () => {
    await getEmployee(2).then(data => {
        return expect(data).toStrictEqual({ id: 2, name: "Bill Gates" })
    });
})

// // test('getEmployee with ID: 2 should return Bill Gates', () => {
// //     return asyncEmployees.getEmployee(2).then(currentName => {
// //         expect(currentName).toEqual({ id: 2, name: "Bill Gates" });
// //     })
// // }
// // )

// // test("getSalary with ID: 2, name: 'Bill Gates' should return 1000", () => {
// //     return testB.getSalary({ id: 2, name: 'Bill Gates' }).then(data => {
// //         expect(data).toBe(1000);
// //     })
// // })



// Nivell 1 - C
// Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1

const testC = require("../app/asyncAwait_N2-1.js");

test('Should return ID:3, name: Jeff Bezos after 2 seconds', async () => {
    await testC.getEmployee(3).then(data => {
        expect(data).toEqual({ id: 3, name: 'Jeff Bezos' });
    })
})


// Nivell 1 - D
// Crea els tests corresponents per verificar el funcionament de l'exercici **Promises & Callbacks Nivell 2 - Exercici 3

// const testD = require("../app/asyncAwait_N2-3.js");

// test('ID:2 is passed to getEmployee and returns an object that is received by getSalary, which returns 1000'), () => {
//     return testD.getEmployee(2).then(obj => testD.getSalary(obj)).then(data => {
//         expect(data.salary).toBe(1000);
//     })
// }
