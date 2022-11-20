//! NIVELL 3
// Refès els exercicis Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()) de manera que accedeixin a les dades d'un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.
// Utilitzant com a base l'exercici Async / Await, crea tests que forcin errors de funcionament i verifiqui que els errors llançats són els esperats.

const dadesEmployees = require("../app/dadesEmployees.json");
const employees = dadesEmployees.employees;
const salaries = dadesEmployees.salaries;

//Funció GETEMPLOYEE
const getEmployee = (index) => {
  return new Promise((resolve, reject) => {
    const employee = employees.find((employee) => employee.id === index);
    if (employee) {
      resolve(employee);
    } else {
      reject(`No existeix aquest empleat`);
    }
  });
};
