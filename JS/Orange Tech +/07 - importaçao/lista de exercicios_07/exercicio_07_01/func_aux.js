const valor = 0;
let tabuada=[];
// função que calcula a tabuada do "valor" passado como parametro e retorna uma lista de valores contendo a tabuada de 0 a 10
function ListTabuada(valor){
 for(i=0; i<=10; i++){
  tabuada[i] = valor * i;
  }
  return tabuada;
}
// função que pinta no console o valor recebido como parametro.
function Print(text){
 console.log(text);
}
// exporta as fuções para reuso em qualquer contexto.
module.exports = {ListTabuada,Print};
