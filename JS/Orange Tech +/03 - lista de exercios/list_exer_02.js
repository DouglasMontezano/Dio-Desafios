/*2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;*/

const peso = 127;
const altura = 1.62;
const imc = (peso / Math.pow(altura, 2)).toFixed(2);
// console.log(imc);

if (imc < 18.5) {
 console.log('Você está abaixo do peso e seu IMC é de  '+ imc);
}else if (imc >= 18.5 && imc < 25) {
 console.log('Você está com peso normal e seu IMC é de  '+ imc);
}else if (imc >= 25 && imc < 30) {
 console.log('Você está a cima do peso e seu IMC é de  '+ imc);
}else if (imc >= 30 && imc < 40) {
 console.log('Você está obeso e seu IMC é de  '+ imc);
}else if (imc >= 40){ 
 console.log('Você está com obesidade grave e seu IMC é de '+ imc);
}


