//! Functions & Template Literals

// Nivell 1 - Exercici 1 //!  -- OK!!!
function exercici1_1(nom, cognom) {
    console.log(nom, cognom);
}
exercici1_1("Perico", "Palotes");

// Nivell 2 - Exercici 1 //!  -- OK!!!
let nom1 = "Manolito";
let cognom1 = "García";
console.log(`${nom1} ${cognom1}`);

// Nivell 2 - Exercici 2  //! REPETIR -- 0 PUNTOS
function exercici2_2(valor) {
    console.log(valor);
}
let valor = "He aconseguit fer l'exercici!"
exercici2_2(`${valor}`);


// Nivell 3 - Exercici 1  //! REPETIR -- 0 PUNTOS

let miArray = [];
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
}


// Nivell 3 - Exercici 2   //!  -- OK!!!

let variable = (function (nom) { console.log(nom) })("Marta");