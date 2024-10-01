async function carregarDados(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        
        if (!response.ok) {
            throw new Error("Erro ao buscar os dados do CEP.");
        }
        
        const dados = await response.json();
        
        if (dados.erro) {
            throw new Error("CEP não encontrado.");
        }

        console.log("Dados carregados com sucesso:", dados);
    } catch (erro) {
        console.log(erro.message);
    } finally {
        console.log("Processo finalizado");
    }
}

// Teste com um CEP válido
carregarDados("52120195");  
