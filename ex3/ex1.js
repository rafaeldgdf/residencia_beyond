function calcularMedia(numeros) {
    const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    const media = soma / numeros.length;
    
    return media;
  }
  
  // Exemplo de uso:
  const numeros = [10, 20, 30, 40];
  const media = calcularMedia(numeros);
  console.log(media); // Saída: 25
  