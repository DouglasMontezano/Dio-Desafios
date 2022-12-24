/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoa {
nome; 
altura; 
peso; 

constructor (nome, altura, peso){
 this.nome = nome;
 this.altura= altura;
 this.peso = peso;
}
// metodo que calcula imc
calc_imc(){
 let imc = (this.peso/Math.pow(this.altura,2)).toFixed(2);
 return imc;
}
// metodo que classifica o imc
classificar_imc(){
let imc = this.calc_imc();
 if (imc < 18.5) {
  return ('Você está abaixo do peso e seu IMC é de  '+ imc);
 }else if (imc >= 18.5 && imc < 25) {
  return ('Você está com peso normal e seu IMC é de  '+ imc);
 }else if (imc >= 25 && imc < 30) {
  return ('Você está a cima do peso e seu IMC é de  '+ imc);
 }else if (imc >= 30 && imc < 40) {
  return ('Você está obeso e seu IMC é de  '+ imc);
 }else if (imc >= 40){ 
  return ('Você está com obesidade grave e seu IMC é de '+ imc);
 }
}
}
const p1 = new Pessoa('José',1.75, 50);
// console.log(`O IMC de ${p1.nome}, é ${p1.calc_imc()}`);
console.log(p1.classificar_imc());


