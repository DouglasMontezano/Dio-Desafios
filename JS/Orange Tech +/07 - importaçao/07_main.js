// utiliza o arquivo externo para achar o maior valor em uma lista de valores
// resolução do professor

const { gets, print } = require('./07_funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;
for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}
print(maiorValorEncontrado);