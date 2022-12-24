/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.

As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));

Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/
class Pessoa {
nome; 
peso; 
altura; 
construct(nome, altura, peso){
 this.nome = nome;
 this.altura=altura;
 this.peso = peso;
}
calc_imc(nome,altura, peso){
 let imc = (peso/Math.pow(altura,2)).toFixed(2)
 // return imc;
 console.log(`O IMC de ${nome}, é ${imc}`);
}
}
const p1 = new Pessoa();
p1.calc_imc('José',1.72, 78);


