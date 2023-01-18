/*1) Faça um programa que receba um número e escreva a sua respectiva tabuada.
    Exemplo:
        Entrada:
            2

        Saída:
            2x1 = 2
            2x2 = 4
            2x3 = 6
            2x4 = 8
            2x5 = 10
            2x6 = 12
            2x7 = 14
            2x8 = 16
            2x9 = 18
            2x10 = 20
*/
// recebendo objeto contendo as funções exportadas do arquivo func_aux.
const {ListTabuada, Print} = require('./func_aux');
// chamada da função ListTabuada passando como parametro o valor "2" e atribundo-a na constante "tab".
const tab = ListTabuada(2);
// chamada da função Print passando como parametro a const tab.
Print(tab);