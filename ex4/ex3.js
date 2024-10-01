function obterDadosDeAPI(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao obter dados da API.");
            }
            return response.json();
        })
        .then(dados => {
            if (dados.erro) {
                throw new Error("CEP não encontrado.");
            }
            console.log(dados);
        })
        .catch(erro => console.log(erro.message));
}

// Chamando a função com um CEP válido
obterDadosDeAPI('52120195');  
