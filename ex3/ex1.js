function calcularMedia(numeros) { 
    let soma = 0; 
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }    
    const media = soma / numeros.length; 
    return media;
  }

const numeros = [10, 10, 5, 8];
const media = calcularMedia(numeros);
console.log(media); 