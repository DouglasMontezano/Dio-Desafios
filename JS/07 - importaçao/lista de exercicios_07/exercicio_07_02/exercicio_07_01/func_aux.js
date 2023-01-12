// definindo as variáveis
let valor_maior=0;
let valor_menor ;

// função que retorna o valor maior e menor de uma lista passada como parametro.
function Maiormenor(valor_r){
// percorre a lista verificando se o valor definido no indice é maior ou menor e em cada caso atribuindo a suas variáveis
for(i=0; i < valor_r.length; i++){ 
  if(valor_maior < valor_r[i]){
  valor_maior = valor_r[i];
  }  
  if (valor_menor > valor_r[i]||valor_menor==undefined){
    valor_menor = valor_r[i];
  }
}
// variavel retorno recebe uma lista com dois valores o maior e o menor como definido anteriormente na seleção feita no if.
let retorno =[valor_maior, valor_menor]; 
// retorno da lista chamada "retorno".
return retorno;
}
// função que recebe a lista e printa os valores definidos pelo indice 0 e indece 1, correspondendo ao maior e menor valor.
function Print(lista){
  console.log("O maior valor é "+ lista[0] + " e o menor é "+ lista[1]);
}
// exportando o objeto contendo as funções.
module.exports = {Maiormenor, Print};
