//! NIVELL 3
// Refès els exercicis Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()) de manera que accedeixin a les dades d'un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.
// Utilitzant com a base l'exercici Async / Await, crea tests que forcin errors de funcionament i verifiqui que els errors llançats són els esperats.


const fs = require('fs');

// let employees = require('../app/dadesEmployee.json')

let employees;
let salaries;

inicialitzarDades = () => {
    employees = JSON.parse(fs.readFileSync('../app/dadesEmployees.json'));
    salaries = JSON.parse(fs.readFileSync('../app/dadesEmployees.json'));
}


//Funció GETEMPLOYEE
const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    const findEmployee = employees.find((employee) => employee.id === id);
    if (findEmployee) {
      resolve(findEmployee);
    } else {
      reject(`No existeix aquest empleat`);
    }
  });
};


const getSalary = (employee) => {
  return new Promise((resolve, reject) => {
    const result = salaries.find(salary => salary.id == employee.id);
    if (result) {
      resolve(result);
    } else {
      reject(new Error("El salari no s'ha trobat"));
    }
  })
}


getEmployeeAndSalary = async(id) => {
    try{
        const employee = await getEmployee(id);
        const salary = await getSalary(employee);
        return {id, name: employee.name, salary: employee.salary};

    } catch (error) {
        return (error);
    }
}

module.exports = getEmployeeAndSalary;