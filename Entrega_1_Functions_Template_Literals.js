//! Functions & Template Literals

// Nivell 1 - Exercici 1 //?  -- OK!!!
function exercici1_1(nom, cognom) {
    console.log(nom, cognom);
}
exercici1_1("Perico", "Palotes");



// Nivell 2 - Exercici 1 //?  -- OK!!!
let nom1 = "Manolito";
let cognom1 = "García";
console.log(`${nom1} ${cognom1}`);



// Nivell 2 - Exercici 2  //!  CORREGIT  26-7-22
// Invoca una funció que retorni un valor des de dins d'una template literal.

function frase(exercici) {
    return `He aconseguit fer l'${exercici}`;
}

let valor = "Exercici 2 del Nivell 2";
console.log(`Resultat: ${frase(valor)}`);




// Nivell 3 - Exercici 1  //!  CORREGIT  26-7-22
// Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola.
// Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.
//? - Al N3 E1 no estàs guardant còpies de la funció i excecutant-les després en bucle, estàs fent-ho tot alhora (i lo segon abans que lo primer).
//?També és molt confos que una funció faci alhora return i console.log (només hauria de fer el segon)

let miArray = [];
function comptar() {
    let nouNumero;
    let comptador = "";
    for (let i = 0; i <= 9; i++) {
        nouNumero = i.toString();
        if (i < 9) {
            comptador += `${nouNumero}, `;
        } else {
            comptador += nouNumero;
        }
    }
    console.log(comptador);
}

function model() {
    for (let j = 0; j < 10; j++) {
        miArray.push(comptar);
    }
}

function mostrarComptes() {
    miArray.forEach(funcio => funcio())
}

model();
mostrarComptes();



// (*(*(Exercici anterior)*)*)
/*let miArray = [];
let contador = "";
let nuevoNumero;
function model() {
    let contador = "";
    for (let i = 0; i <= 9; i++) {
        nuevoNumero = i.toString();
        if (i < 9) {
            contador += `${nuevoNumero}, `;
        } else {
            contador += nuevoNumero;
        }
    }
    console.log(contador)
    return contador;
}
for (let j = 0; j < 10; j++) {
    //let nombreFuncion = f + j;
    nuevoContador = model();
    miArray.push(nuevoContador);
}*/




// Nivell 3 - Exercici 2   //?  -- OK!!!
// Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.
let variable = (function (nom) { console.log(nom) })("Marta");