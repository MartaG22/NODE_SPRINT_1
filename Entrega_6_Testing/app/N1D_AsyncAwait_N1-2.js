// Nivell 1 - Exercici 2   // -------- CORREGIT

/* Crea una nova funció asíncrona que cridi a una altra que retorni una Promise
 que efectuï la seva funció resolve() després de 2 segons de la seva invocació.*/

//Exercici  Corregit  ------------     (29-5-22)  -------------  //! OKKK!! -- 2 PUNTOS (MAX)


const sumAfterTwoSeconds = (a, b) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(a) || !isNaN(b)) {
            setTimeout(() => resolve(a + b), 2000);
        } else {
            return(Error);
        }
    });
};

async function asyncOperation(a, b) {
    try {
        const result = await sumAfterTwoSeconds(a, b);
        return (`Resultat després de 2 segons: ${result}`);
    } catch (Error) {
        return(Error, "Nivell 1 - Exercici 2:  No s'ha pogut realitzar l'operació");
    }
}
// asyncOperation(4, 5);
 module.exports = {asyncOperation, sumAfterTwoSeconds};