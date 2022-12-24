/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoa {
nome; 
altura; 
peso; 

constructor(nome, altura, peso){
 this.nome = nome;
 this.altura= altura;
 this.peso = peso;
}
// calc_imc(nome,altura, peso){
calc_imc(){
 let imc = (this.peso/Math.pow(this.altura,2)).toFixed(2);
 // return imc;
 console.log(`O IMC de ${this.nome}, é ${imc}`);
}
}
const p1 = new Pessoa('José',1.75, 70);
p1.calc_imc();


