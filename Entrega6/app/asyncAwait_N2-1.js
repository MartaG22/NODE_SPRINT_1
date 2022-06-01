const doubleAfterTwoSeconds = (a) => {
    let result = a * 2;
    let message = `${a} * 2 = ${result}`
    return new Promise(resolve => setTimeout(() => resolve(message), 2000))
}

async function asyncDoubleNumber(number1) {
    try {
        const result = await doubleAfterTwoSeconds(number1);
        console.log(result)
        // console.log((`${number1} * 2 = ${result}`));
    } catch (error) {
        console.log("Nivell 2 - Exercici 1A:  No s'ha pogut realitzar l'operació");
    }
}
asyncDoubleNumber(parseInt(Math.random() * 100))


module.exports = {
    asyncDoubleNumber,
};

