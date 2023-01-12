/*2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

// require do arquivo externo
const {Maiormenor, Print} = require('./func_aux');
// definindo a lista de valores.
const lista = [4, 100, 150, 90, 200];
// chamada da função enviando a lista como argumento
const retorno = Maiormenor(lista);
// enviando o retorno da função anterior como parametro da função print.
Print(retorno);

