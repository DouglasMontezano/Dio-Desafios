/*3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:5 1 3 9 10 12   

    Saída:
        // Números Pares: 10, 12
*/

// require do arquivo externo
const {Buscapares, Print} = require('./func_aux_07_03');
// definição da lista e atribuição
const lista = [5, 1, 3,9, 10, 12];
// invocando a função Buscapares e passando a lista de valores
const numerospares = Buscapares(lista);
// Invoca a função Print passando os numeros pares 
Print(numerospares);
