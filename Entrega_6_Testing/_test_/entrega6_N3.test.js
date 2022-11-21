// //! NIVELL 3
// Refès els exercicis Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()) de manera que accedeixin a les dades d'un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.
// Utilitzant com a base l'exercici Async / Await, crea tests que forcin errors de funcionament i verifiqui que els errors llançats són els esperats.

const getEmployeeAndSalary = require('../app/N3A_promises_callbacks_N2-1.js');
const dadesEmployees = require('../__mocks__/N3A_Employees.js');


jest.mock('../__mocks__/N3A_Employees.js');

describe('Verifica la funció getEmployee, buscant les dades en un arxiu JSON', () => {
  test("Obtenir l'empleat i el salary de l'empleat amb ID 2", () => {
    return expect(getEmployeeAndSalary(2).resolves.toBe({id: 2, name: "Bill Gates", salary: 1000}));
  })
})


// //! NIVELL 3
// // Refès els exercicis Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()) de manera que accedeixin a les dades d'un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.
// // Utilitzant com a base l'exercici Async / Await, crea tests que forcin errors de funcionament i verifiqui que els errors llançats són els esperats.

// const fs = require('fs');
// const dadesEmployees = require("../app/dadesEmployees.json");
// const employees = JSON.parse(fs.readFileSync(dadesEmployees));
// const salaries = JSON.parse(fs.readFileSync(dadesEmployees));



// //Funció GETEMPLOYEE
// const getEmployee = (id) => {
//   return new Promise((resolve, reject) => {
//     const findEmployee = employees.find((employee) => employee.id === id);
//     if (findEmployee) {
//       resolve(findEmployee);
//     } else {
//       reject(`No existeix aquest empleat`);
//     }
//   });
// };


// const getSalary = (employee) => {
//   return new Promise((resolve, reject) => {
//     const result = salaries.find(salary => salary.id == employee.id);
//     if (result) {
//       resolve(result);
//     } else {
//       reject(new Error("El salari no s'ha trobat"));
//     }
//   })
// }
