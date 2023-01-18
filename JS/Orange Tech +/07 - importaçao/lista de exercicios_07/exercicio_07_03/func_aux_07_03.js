
const pares = [];
// Função que recebe uma lista e percorre todos os indices encontrando numeros pares
function Buscapares(lista) {
  for (i = 0; i < lista.length; i++) {
    // se o numero verificado tiver resto 0 ao dividir por 2 significa que é par então ele é atribuido na lista "pares[i]"
    if (lista[i] % 2 == 0) {
      pares.push(lista[i]);
    }
  }
  return pares;
}
// função que printa no console os valores par encontados dentro da lista pares.
function Print(text){  
  console.log(' Os numeros par encontrado foram '+ text);
}

module.exports = {Buscapares, Print};

