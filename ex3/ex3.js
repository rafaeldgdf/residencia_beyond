function mapearNomes(pessoas) {
    return pessoas.map(pessoa => pessoa.nome);
  }
  
  const pessoas = [
    { nome: 'Rafael', idade: 26 },
    { nome: 'Laura', idade: 22 },
    { nome: 'Matheus', idade: 25 }
  ];

  console.log(pessoas[1]);