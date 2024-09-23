function executarOperacao(a, b, operacao) {
    switch (operacao) {
      case 'soma':
        return a + b;
      case 'multiplicacao':
        return a * b;
      case 'divisao':
        return a / b;
      case 'subtracao':
        return a - b;
      default:
        return 'Operação inválida';
    }
  }
  
  // Exemplo de uso:
  const resultadoSoma = executarOperacao(10, 5, 'soma');
  console.log(`Soma: ${resultadoSoma}`); 
  
  const resultadoMultiplicacao = executarOperacao(10, 5, 'multiplicacao');
  console.log(`Multiplicação: ${resultadoMultiplicacao}`); 
  
  const resultadoDivisao = executarOperacao(10, 5, 'divisao');
  console.log(`Divisão: ${resultadoDivisao}`); 
  
  const resultadoSubtracao = executarOperacao(10, 5, 'subtracao');
  console.log(`Subtração: ${resultadoSubtracao}`); 
  