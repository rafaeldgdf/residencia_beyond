function buscarUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = true; 

            if (sucesso) {
                resolve("nome do usuario");
            } else {
                reject("falhou");
            }
        }, 2000); 
    });
}

buscarUsuario()
    .then(usuario => console.log(usuario))
    .catch(erro => console.log(erro));