//!  Entrega 1.5: Node Utils

// Nivell 1 - Exercici 1
// Crea una funció que, en executar-la, escrigui una frase en un fitxer.

//*Exercici  Corregit  ------------------     (29-5-22)     --------------------

const os = require('os');
const fs = require('fs');

const writeSentence = () => {
    let frase = 'Estic escrivint una frase en un arxiu!!!';
    fs.writeFile('write_file.txt', frase, (err) => {
        if (err) {
            throw err;
        }
        console.log("Frase escrita a l'arxiu `write_file.txt`!");
    });
}
writeSentence();



// Nivell 1 - Exercici 2
// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

//*Exercici  Corregit  ------------------     (29-5-22)     --------------------

const showSentence = () => {
    let nomArxiu = "write_file.txt";

    fs.readFile(nomArxiu, 'utf8', (error, frase) => {
        if (error) throw error;
        console.log(`El contingut de l'arxiu és: ${frase}`);
    });
}
showSentence();



// Nivell 1 - Exercici 3
/* Crea una funció que comprimeixi el fitxer del nivell 1.*/


//*Exercici  Corregit  ------------------     (29-5-22)     --------------------

const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');

const arxiuZip = createGzip();
const arxiuAComprimir = createReadStream('write_file.txt');
const destinacio = createWriteStream('write_file.txt.gz');

const createFileZip = () => {
    pipeline(arxiuAComprimir, arxiuZip, destinacio, (err) => {
        if (err) {
            console.error('Ha ocurregut un errer:', err);
        }
    });
}
createFileZip()



// Exercici 1
// Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.


//*Exercici  Corregit  ------------------     (29-5-22)     --------------------

const missatgeRecursiu = () => {
    let i = 0;
    setInterval(() => {
        console.log(`${i++}.- Aquest és un missatge recursiu! `);
    }, 1000)
}

missatgeRecursiu();



// Nivell 2 - Exercici 2
/* Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador
 utilizant Node Child Processes.// No està fet amb appendchild*/

const urlUser = os.homedir();
const files = fs.readdir(urlUser, (err, files) => {
    if (err) {
        console.log('Error', err.message);
    } else {
        console.log(`Contingut del directori de l'usuari ${urlUser}:`, files);
    }
})


// Exercici 1
/*  Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.
Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algorisme aes-192-cbc, i esborri els fitxers inicials.
Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
Inclou un README amb instruccions per a l'execució de cada part.*/

// TODO crear una funció que guardi els dos fitxers codificats /  Encriptats amb l'algoritme aes-192-cbc   /   Que després esborri els fitxers incicials.
// TODO Crear una altra funció que desencripti i descodifiqui el dos fitxers anteriors, tornat a obtenir una còpia de l'inicial.
// TODO Fer un Readme


// TODO crear una funció que creï dos fitxers codificats, de l'arxiu del nivell 1.


function encriptar(nomArxiu) {

    let binaryData = btoa(nomArxiu);
    console.log("encriptado:", binaryData);
    fs.writeFile('encryptBase64.txt', binaryData, (error) => {
        if (error) {
            throw error;
        }
        console.log("Arxiu comprimit en Base 64 creat amb éxit, anomenat 'encryptBase64.txt'");
    });

    let longBinaryData = binaryData.length;
    let hexValue = "";
    let encriptatHexadecimal = "";
    for (let i = 0; i < longBinaryData; i++) {
        let character = binaryData[i]
        let asciiCode = character.charCodeAt(0);
        hexValue = asciiCode.toString(16);
        encriptatHexadecimal += hexValue;
    }

    fs.writeFile('encryptHexadecimal.txt', encriptatHexadecimal, (error) => {
        if (error) {
            throw error;
        }
        console.log("Arxiu comprimit en Hexadecimal creat amb éxit, anomenat 'encryptHexadecimal.txt'");
    });
    console.log("hexValue", encriptatHexadecimal);
}
encriptar()
