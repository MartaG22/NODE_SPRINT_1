//Nivell 1 - B   //! SIN ACABAR - ME DA ERROR
// Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1

// const { getEmployee, getSalary, asyncFunction } = require("../app/02_asyncAwait_N1-1");
// const testB = require("../app/asyncAwait_N1-1.js");
const { resultEmployee } = require("../app/02_asyncAwait_N1-1.js");


describe("Buscar l'empleat per id", () => {
    test("Ha de trobar l'empleat amb id=2, corresponent a Bill Gates", async() => {
        try {
        const employee = await getEmployee(2);
        expect(employee).toStrictEqual({id: 2, name: "Bill Gates"});
        } catch (Error) {
            console.log(Error);
        }
    });
});

describe("Buscar el salari, amb l'empleat trobat amb la funció 'getEmployee'"), () => {
    test ("Ha de trobar el salari de Bill Gates", async () => {
        const employee = await getEmployee(2);
        const salari = await getSalary(employee);
        expect(salari).toBe(1000);
    })
}

describe("Lets check the asyncAwait function to match one employee N1 EX1", () => {
    test("Employee with id 1 is Linux Torvalds and has a salary of 4000", async () => {
      try {
        await expect(resultEmployee(1)).resolves.toMatch(
          "Linux Torvalds has a salary of 4000"
        );
      } catch (error) {
        await expect(resultEmployee(5)).rejects.toThrow(error);
      }
    });
  });
  

// describe("Testeja el funcionament de l'exercici de l'entrega del Nivell 1 - Exercici 1", () => {
//     // test('Employee with ID: 2 should return Bill Gates', async () => {
//     test(`Ha de trobar el salari del Bill Gates`, async () => {
//         try {
//             await expect(asyncFunction(2).resolve.toMatch(
//                 `L'empleat amb l'ID 2 és: Bill Gates, i té 4000 € de salari`
//             ));
//         } catch (error) {
//             await expect(asyncFunction(5)).rejects.toThrow(error)
//         }
//     })
// });
