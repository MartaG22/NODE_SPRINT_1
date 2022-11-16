//! Entrega 1.4: Async / Await

// Nivell 1 - Exercici 1   // --- CORREGIT  //! REPASSAT 

/* Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu salari, 
 usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.*/


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
        if (empleatBuscat) {
            resolve(empleatBuscat);
        } else {
            reject(new Error(`No s'ha trobat el treballador amb l'ID ${id}`));
        }
    });
};

const getSalary = (empleat) => {
    return new Promise((resolve, reject) => {
        let empleatBuscat = salaries.find(salario => salario.id === empleat.id);

        if (empleatBuscat) {
            resolve(empleatBuscat.salary);
        } else {
            reject(new Error(`No s'ha trobat salari.`));
        }
    });
};

async function asyncFunction(idEmpleat) {
    try {
        const currentEmployee = await getEmployee(idEmpleat);
        const currentSalary = await getSalary(currentEmployee);
        return(`L'empleat amb l'ID ${idEmpleat} és: ${currentEmployee.name}, i té ${currentSalary} € de salari`);
    } catch (Error) {
        return(Error);
    }
};

// asyncFunction(3);
module.exports = {getEmployee, getSalary, asyncFunction};