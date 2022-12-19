/*
let val_etanol = prompt("Digite o valor do Etanol"); 
let val_gasolina = prompt("Digite o valor do Gasolina"); 
let tipo_comb = prompt("Digite o tipo de combustivel G(Gasolina) ou E(Etanol)"); 
let media_comb_g = prompt("Digite quantos Km/L seu veículo consome com gasolina"); 
let media_comb_e = prompt("Digite quantos Km/L seu veículo consome com etanol"); 
let km_tot = prompt("Digite o total de Km da sua viagem");
*/

//Declaração de variáveis
let val_etanol = 4.2;
let val_gasolina = 4.8;
let tipo_comb = 'g';
let media_comb_g = 14;
let media_comb_e = 10;
let km_tot = 100;

//condicionais
if (tipo_comb === 'G' || tipo_comb === 'g') {
 var valor_tot = ((km_tot / media_comb_g) * val_gasolina);
}

else if (tipo_comb === 'E' || tipo_comb === 'e') {
 var valor_tot = ((km_tot / media_comb_e) * val_etanol);
}

//calculo final
console.log('O valor total gasto na viagem usando o combustível  ' + tipo_comb + '  foi de R$ ' + valor_tot.toFixed(4));