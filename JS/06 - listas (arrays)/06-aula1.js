// Calcular a media de notas escolares como sugerido em exercicios anteriores.

const notas = [];
notas.push(5);
notas.push(5);
notas.push(8);
notas.push(8);
notas.push(8);
let somanotas=0;

for(let i=0; i < notas.length; i++){
 somanotas = somanotas + notas[i];
}
const media = somanotas/notas.length;
console.log("A Média geral é "+ media );