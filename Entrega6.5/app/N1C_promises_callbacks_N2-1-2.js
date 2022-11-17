// 03 C- Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).


//! Nivell 2 - Exercici 1  // 
// Donats els objectes employees i salaries, crea una arrow function getEmployee()
// que retorni una Promise efectuant la cerca en l'objecte pel seu id.


let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        let empleatBuscat = employees.find(employee => employee.id == id)
        // let positionEmployee = (employees.findIndex(found => found.id === id));
        if (empleatBuscat) {
            resolve(empleatBuscat);
            // resolve(`Empleat:  ${employees[positionEmployee].name}!`);
        } else {
            reject(new Error(`No s'ha trobat el treballador amb l'ID ${id}`));
        }
    });
}

// getEmployee(2)
//     .then(resolve => console.log(resolve))
//     .catch(Error => console.log(Error))


//! Nivell 2 - Exercici 2  

/* Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i
  retorni el seu salari.*/

const getSalary = (empleat) => {
    return new Promise((resolve, reject) => {
        let empleatBuscat = salaries.find(salario => salario.id === empleat.id);
        // console.log(empleatBuscat);
        if (empleatBuscat) {
            // resolve(`Salari: ${empleatBuscat.salary}`);
            resolve(`Salari: ${empleatBuscat.salary}`);
        } else {
            reject(new Error(`No s'ha trobat aquest treballador`));
        }
    });
}


// let empleat = { id: 2, name: 'Bill Gates' }
// getSalary(empleat)
//     .then(resolve => console.log(resolve))
//     .catch(Error => console.log(Error))


module.exports = {
    getEmployee,
    getSalary,
};
