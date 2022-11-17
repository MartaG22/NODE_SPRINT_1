// No et funciona perque estàs executant coses dins els arxius que vols testejar,
// Marta! En els arxius on s'exporten les funcions no s'ha d'executar res.
// A més, les funcions que fan console.log s'haurien de reescriure perque facin return ;)

// https://www.youtube.com/watch?v=r9HdJ8P6GQI

// Nivell 1 - A  //! okkkk
/*Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.*/

const calculate = require("../app/N1A_operacions_1-6.js");

describe("function sumar", () => {
    test("sumar 1 + 2 to equal 3", () => {
        expect(calculate.sumar(1, 2)).toBe(3);
    });
});

describe("function restar", () => {
    test("restar 3 - 1 to equal 2", () => {
        expect(calculate.restar(3, 1)).toBe(2);
    });
});

describe("function multiplicar", () => {
    test("multiplicar 3 * 2 = 6", () => {
        expect(calculate.multiplicar(3, 2)).toBe(6);
    });
});

describe("function dividir", () => {
    test("dividir 6 / 2 = 3", () => {
        expect(calculate.dividir(6, 2)).toBe(3);
    });
});


//! Nivell 1 - B  
// 02 - Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

// - Exercici 1
// Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

const {showResult, sumNums} = require("../app/N1B_promises_callbacks_N1-2");

// describe()









//! Nivell 1 - C  
// 03 C- Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).

// Nivell 2
// - Exercici 1
// Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

// - Exercici 2
// Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

const { getEmployee, getSalary } = require("../app/N1C_promises_callbacks_N2-1-2.js");

describe("Busquem l'empleat pel seu ID", () => {
    test("getEmployee amb ID: 2 >>> Ha de trobar el treballador Bill Gates", async () => {
        try {
            await getEmployee(2).then((data) => {
                if (data) {
                    return expect(data).toStrictEqual({ id: 2, name: "Bill Gates" });
                }
            });
        } catch (error) {
            await expect(getEmployee(5)).rejects.toThrow(error = "No s'ha trobat aquest treballador");   //! NO TIRA BÉ L'ERROR
        }
    });
});


describe("Busquem el salari de l'empleat anterior", () => {
    test("getSalary employee ID: >>> Ha de trobar el salari de Bill Gates, de 1000", async () => {
        let empleat1 = { id: 2, name: 'Bill Gates' }
        try {
            await getSalary(empleat1).then((data) => {
                
                if (data) {
                    console.log("DATA:", data)
                    return expect(data).toStrictEqual({ id: 2, salary: 1000 });
                };

            })
        } catch (error) {
            let empleat = ""
            await expect(getSalary(empleat)).rejects.toThrow(error = "No s'ha trobat aquest treballador");
        };
    });
});


describe("Busquem el salari de l'empleat anterior", () => {
    test("getSalary employee ID: >>> Ha de trobar el salari de Bill Gates, de 1000", async () => {
        let empleat2 = { id: 5, name: 'Perico Palotes' }
        try {
            await getSalary(empleat3).then((data) => {
                
                if (data) {
                    console.log("DATA:", data)
                    return expect(data).toStrictEqual({ id: 2, salary: 1000 });
                };

            })
        } catch (error) {
            await expect(getSalary(empleat2)).rejects.toThrow(error = "No s'ha trobat aquest treballador");
        };
    });
});

