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
            resolve(`L'empleat amb id ${id} s'ha trobat, ha estat  ${employees[positionEmployee].name}!`);
        } else {
            reject(`No s'ha trobat el treballador amb l'ID ${id}`);
        }
    });
}

getEmployee(5)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))


const getSalary = (id) => {
    return new Promise((resolve, reject) => {

        let positionEmployee = (salaries.findIndex(found => found.id === id));
        console.log("posicion:", positionEmployee)
        if (positionEmployee != -1) {
            resolve(`L'empleat amb id ${id} té  ${salaries[positionEmployee].salary} € de salari!`);
        } else {
            reject(`No s'ha trobat el treballador amb l'ID ${id}`);
        }
    });
}

getSalary(2)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))




let id = 3
getEmployee(id)
    .then(name => {
        console.log("Nom empleat:", name)
        return getSalary(id)
    }).then(salary => {
        console.log(salary)
    });


// getEmployee(1).then(name => {
//     console.log(name);
//     return getSalary(name);
// }).then(salary => {
//     console.log(salary)
// }).catch(Error);


module.exports = {
    getEmployee,
    getSalary,
};


