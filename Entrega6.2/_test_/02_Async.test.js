//Nivell 1 - B   //! SIN ACABAR - ME DA ERROR
// Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1

const {asyncFunction} = require("../app/02_AsyncAwait_N1E1.js");
// const testB = require("../app/asyncAwait_N1-1.js");

describe("Testeja el funcionament de l'exercici de l'entrega del Nivell 1 - Exercici 1", () => {
    test('Employee with ID: 2 should return Bill Gates', async () => {
        try {
            await expect(asyncFunction(2).resolve.toMatch(
            `L'empleat amb l'ID 2 és: Bill Gates, i té 4000 € de salari`
            ));
        
        }catch (error) {
         
            await expect(asyncFunction(5)).rejects.toThrow(error)
        }
    })
});
