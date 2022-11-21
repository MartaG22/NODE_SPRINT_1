// No et funciona perque estàs executant coses dins els arxius que vols testejar,
// Marta! En els arxius on s'exporten les funcions no s'ha d'executar res.
// A més, les funcions que fan console.log s'haurien de reescriure perque facin return ;)

// https://www.youtube.com/watch?v=r9HdJ8P6GQI

//! Nivell 1 - A 
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

const { showResult, sumNums } = require("../app/N1B_promises_callbacks_N1-2");

//test entrega 1-3 nivell 1 exercici 2
describe(`Comprova exercici 2 nivell 1, entrega 1-3`, () => {
  it("Verifica que 'sumNums' és una funció", () => {
    expect(typeof sumNums).toBe("function");
  });

  it("Verifica si la funció passada com a Callback, 'showResult' també és funció", () => {
    expect(typeof showResult).toBe("function");
  });

  it("Verifica si funciona bé la validació de nombres parells", () => {
    const randomNumber = parseInt(Math.random() * 100);
    console.log("randomNumber PARELL", randomNumber);
    if (randomNumber / 2 === 0) {
      console.log(randomNumber / 2);
      expect(sumNums(randomNumber, showResult)).toStrictEqual(`El nombre ${randomNumber} és parell!!!`);
    }
  });
});
/*
describe(`Comprova exercici 2 nivell 1, entrega 1-3`, () => {
  // const randomNumber = parseInt(Math.random() * 100);
  const randomNumber = 9;
  const mitad = randomNumber /2
  console.log('randomNumber SENAR', mitad)
  console.log('mitad senar', mitad)
  it("Verifica si funciona bé la validació de nombres senars", () => {
    if (mitad !== 0) {
      expect(sumNums(randomNumber, showResult)).toEqual(`El nombre ${randomNumber} és senar!!!`
      );
    }
  });
});
*/

//! Nivell 1 - C
// 03 C- Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).

//! Nivell 2 - Exercici 1
// Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

//! Nivell 2 - Exercici 2
// Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

const {
  getEmployee,
  getSalary,
} = require("../app/N1C_promises_callbacks_N2-1-2.js");

describe("Comprova exercici Nivell 2, exercicis 1 i 2, entrega 1-3. >> Busquem l'empleat pel seu ID", () => {
  test("getEmployee amb ID: 2 >>> Ha de trobar el treballador Bill Gates", async () => {
    try {
      await getEmployee(2).then((data) => {
        if (data) {
          return expect(data).toStrictEqual({ id: 2, name: "Bill Gates" });
        }
      });
    } catch (error) {
      await expect(getEmployee(5)).rejects.toThrow(
        (error = "No s'ha trobat aquest treballador")
      );
    }
  });
});

describe("Busquem el salari de l'empleat anterior", () => {
  test("getSalary employee ID: >>> Ha de trobar el salari de Bill Gates, de 1000", async () => {
    let empleat1 = { id: 2, name: "Bill Gates" };
    try {
      await getSalary(empleat1).then((data) => {
        if (data) {
          console.log("DATA:", data);
          return expect(data).toStrictEqual({ id: 2, salary: 1000 });
        }
      });
    } catch (error) {
      let empleat = "";
      await expect(getSalary(empleat)).rejects.toThrow(
        (error = "No s'ha trobat aquest treballador")
      );
    }
  });
});

describe("Busquem el salari de l'empleat anterior", () => {
  test("getSalary employee ID: >>> Ha de trobar el salari de Bill Gates, de 1000", async () => {
    let empleat2 = { id: 5, name: "Perico Palotes" };
    try {
      await getSalary(empleat3).then((data) => {
        if (data) {
          console.log("DATA:", data);
          return expect(data).toStrictEqual({ id: 2, salary: 1000 });
        }
      });
    } catch (error) {
      await expect(getSalary(empleat2)).rejects.toThrow(
        (error = "No s'ha trobat aquest treballador")
      );
    }
  });
});

//! Nivell 1 - D
// 04 D- Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.
//! Nivell 1 - Exercici 2   
// Crea una nova funció asíncrona que cridi a una altra que retorni una Promise
//  que efectuï la seva funció resolve() després de 2 segons de la seva invocació.*/


/*
const {
  asyncOperation,
  sumAfterTwoSeconds,
} = require("../app/N1D_AsyncAwait_N1-2.js");

describe("Volem validar la funció asíncrona asyncOperation, que mostra el resultat de sumar dos nombres, després de dos segons", () => {
  it("sumAfterTwoSeconds >>> Ha de donar el resulat de la suma després de dos segons", async () => {
    let nombreA = 4;
    let nombreB = 5;
    // await sumAfterTwoSeconds(nombreA, nombreB).then((data) => {
      console.log("nombres 1:", nombreA);
      console.log("nombres 2:", nombreB);
      
      jest.sumAfterTwoSeconds(nombreA, nombreB);
      it("El test ha de esperar 2 segons abans de donar el resultat", async () => {
        console.log("DATA:", data);
        await timeout();
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
      });
      // if (data) {
      //     console.log("DATA:", data)
      //     return expect(data).toStrictEqual({ id: 2, salary: 1000 });
      // } else {
      //     new error
      // }
    });
  });
*/

// describe("Volem validar la funció asíncrona asyncOperation, que mostra el resultat de sumar dos nombres, després de dos segons", () => {
//     test("asyncOperation >>> Ha de donar el resulat de la suma després de dos segons", async () => {
//         try {
//             let nombres = { a: 4, b: 5 }
//             await asyncOperation(nombres.a, nombres.b).then((data) => {
//                 console.log("nombres 1:", nombres.a)
//                 console.log("nombres 2:", nombres.b)
//                 console.log("DATA:", data)

//                 if (data) {
//                     console.log("DATA:", data)
//                     return expect(data).toStrictEqual({ id: 2, salary: 1000 });
//                 };

//             })
//         } catch (error) {
//             await expect(asyncOperation(nombres.a, nombres.b)).rejects.toThrow(error = "No s'ha pogut realitzar l'operació");
//         };
//     });
// });

/*
const sumAfterTwoSeconds = (a, b) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(a) || !isNaN(b)) {
            setTimeout(() => resolve(a + b), 2000);
        } else {
            reject(new Error);
        }
    });
};

async function asyncOperation(a, b) {
    try {
        const result = await sumAfterTwoSeconds(a, b);
        return console.log(`Resultat després de 2 segons: ${result}`);
    } catch (Error) {
        console.log("Nivell 1 - Exercici 2:  No s'ha pogut realitzar l'operació");
    }
}
asyncOperation(4, 5);
*/
// // //! EJEMPLO PARA INSPIRACIÓN
// //test entrega 1-4 nivell 1 exercici 2 (Async / Await)
// describe(`Comprova exercici 2 nivell 1, entrega 1-4`, () => {
//     test("comprova que isBookClubFree retorna la resposta correcta", async () => {
//         return expect(await isBookClubFree(true)).toEqual({
//             name: 'Bilbo MC Swaggings',
//             genre: 'fashion and design',
//             location: 'right wing'
//         })
//     });

//     test(`Comprova que bookClubBooking torna una Promise, i que la promise es resol amb el valor esperat`, () => {
//         expect(bookClubBooking(true)).toBeInstanceOf(Promise);
//         return expect(bookClubBooking(true)).resolves.toStrictEqual({
//             name: 'Bilbo MC Swaggings',
//             genre: 'fashion and design',
//             location: 'right wing'
//         });
//     });

//     test(`Comprova que bookClubBooking torna una Promise, i que la promise es rejected amb el valor esperat`, () => {
//         return expect(bookClubBooking(false)).rejects.toEqual(`El club està reservat en aquests moments. Prova un altre horari.`);
//     });

// })
