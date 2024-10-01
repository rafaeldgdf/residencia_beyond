function somarComDelay(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

somarComDelay(3, 4)
    .then(resultado => {
        console.log(`Resultado da primeira soma: ${resultado}`);
        return somarComDelay(resultado, 5);
    })
    .then(resultadoFinal => console.log(`Resultado final: ${resultadoFinal}`));
