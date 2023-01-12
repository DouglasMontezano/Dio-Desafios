// 1) Crie um programa que dado um número imprima a sua tabuada.


const numero = 5;
let tabuada=[];

for (let i = 0; i <= 10; i++) {
 tabuada[i] = numero * i;
}
console.log(tabuada);
