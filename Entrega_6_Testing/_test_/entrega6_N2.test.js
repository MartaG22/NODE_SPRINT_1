// Verifica mitjançant tests l'execució de l'exercici Async/Await N2 E1 utilitzant Jest Fake Timers.
// Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.
// Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.

//!  NIVELL 2 - A
// Verifica mitjançant tests l'execució de l'exercici Async/Await N2 E1 utilitzant Jest Fake Timers.
//! exercici Async/Await N2 E1
// Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
// Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

/*
const {doubleAfterTwoSeconds, asyncDoubleNumber} = require("../app/N2A_AsyncAwait.js");

describe("Ens ha de donar com a resposta el doble del nombre introduit", () => {
  test("El doble de 4 és 8", async () => {
    await expect(doubleAfterTwoSeconds(4)).toBe(8);
    // const x = await doubleAfterTwoSeconds(4);
    // expect(x).toBe(8);
  });
});
jest.setTimeout(12000);
*/




//! Nivell2 - B
// Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.
//! exercici  Classes & Arrow Functions - N2 E2
/*Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.*/

const Persona = require("../app/N2B_Classes.js");
const nom = require("../__mocks__/N2B_Classe_Persona.js");

jest.mock("../__mocks__/N2B_Classe_Persona.js");

test("Comprovar la crida al constructor de la Classe Persona, a partir d'un Mock", () => {
  const novaPersona = new Persona.Persona(nom["nom"]);
  expect(novaPersona.dirNom()).toBe("Gerard");
});




//! Nivell2 - C
// Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.
//! Nivell 3 - Exercici 1
// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
/*
const exercici_N2C_ClasseAbstracta = require("../app/N2C_ClasseAbstracta");

describe("Verifiquem la Classe Abstracta, crear un Animal", () => {
  let nouAnimal;

  beforeAll(() => {
    nouAnimal = exercici_N2C_ClasseAbstracta.crearAnimal("Balena", "acuàtic");
  });

  test("Instanciem la classe animal correctament >>> 🐳", () => {
    expect(nouAnimal).toEqual({animal: "Balena", tipoAnimal: "acuàtic"})
  });

  test("Com es desplaça aquest nou animal?", () => {
    expect(nouAnimal.desplaza()).toBe(`Aquest animal és ${this.tipoAnimal}`)
  });

});
*/
