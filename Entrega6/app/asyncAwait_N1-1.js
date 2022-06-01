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

        let positionEmployee = (employees.findIndex(found => found.id === id));
        console.log("posicion:", positionEmployee)
        if (positionEmployee != -1) {
            resolve(`id: ${id}, name: ${employees[positionEmployee].name}`);
            // ( employees[positionEmployee].name);
        } else {
            reject(`No s'ha trobat el treballador amb l'ID ${id}`);
        }
    });
}

getEmployee(3)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))

const getSalary = (id) => {
    return new Promise((resolve, reject) => {

        let positionEmployee = (salaries.findIndex(found => found.id === id));
        console.log("posicion:", positionEmployee)
        if (positionEmployee != -1) {
            resolve(`id ${id}, name: ${salaries[positionEmployee].salary} `);
        } else {
            reject(`No s'ha trobat el treballador amb l'ID ${id}`);
        }
    });
}

getSalary(3)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))


async function asyncFunction(id) {
    try {
        const currentEmployee = await getEmployee(id);
        const currentSalary = await getSalary(id);
        console.log(`L'empleat amb l'ID ${position} és: ${currentEmployee}, i té ${currentSalary} € de salari`);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getEmployee,
    getSalary,
    asyncFunction
};



