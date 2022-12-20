// IMC com funcoes
// foi solicitado pelo professor para ajustar o exercício 02 aula 03 em funçoes específicas

// funçao  que alcula IMC
function calculaImc(peso, altura){
 return (peso / Math.pow(altura, 2)).toFixed(2);
}
// Funçao que classifica o grau de risco ou não baseado no IMC
function classificacao(imc){
 if (imc < 18.5) {
  return 'Você está abaixo do peso e seu IMC é de  '+ imc;
 }else if (imc >= 18.5 && imc < 25) {
  return 'Você está com peso normal e seu IMC é de  '+ imc;
 }else if (imc >= 25 && imc < 30) {
  return 'Você está a cima do peso e seu IMC é de  '+ imc;
 }else if (imc >= 30 && imc < 40) {
  return 'Você está obeso e seu IMC é de  '+ imc;
 }else if (imc >= 40){ 
  return 'Você está com obesidade grave e seu IMC é de '+ imc;
 }
}

// (Main) Função não nomeada que substitui a (function main) isolando o escopo da função principal - Função imediatamente invocada
(function (){
 const peso = 62;
 const altura = 1.62;
 const imc = calculaImc(peso, altura); 
 console.log(classificacao(imc));
})();
