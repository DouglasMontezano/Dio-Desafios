// 2) Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado.

let lista = [1,2,3,4,5,6,7,8,9,10];
// let numeropar; 
for (i = 0; i < lista.length; i++) {
 if((lista[i]%2)===0){
  console.log(lista[i]);
 }
}