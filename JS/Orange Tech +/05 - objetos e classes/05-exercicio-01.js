/*1) Crie uma classe para representar carros. 

Os carros possuem uma marca, 
uma cor e 
um gasto médio de combustível por Kilômetro rodado.

Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

// (km_tot_perc, litros_tot_con, consumo_med, valor_tot_gasto, valor_litro, marca_veiculo, modelo_veiculo)

class Veiculo {
 marca_veiculo;
 modelo_veiculo;
 cor_veiculo;
 km_tot_perc;
 litros_tot_conb;
 valor_litro;
 consumo_med;
 valor_tot_gasto;
 
 constructor(marca_veiculo, modelo_veiculo, cor_veiculo) {
  this.marca_veiculo = marca_veiculo;
  this.modelo_veiculo = modelo_veiculo;
  this.cor_veiculo = cor_veiculo;
 }

 calculamediaveiculo(km_tot_perc, litros_tot_conb, valor_litro) {
  let consumo_med = km_tot_perc / litros_tot_conb;
  let valor_tot_gasto = valor_litro * litros_tot_conb;
  console.log(`O veículo ${this.modelo_veiculo} de cor ${this.cor_veiculo} da marca ${this.marca_veiculo}`);  
  console.log(`Fez um percurso total de ${km_tot_perc} Km, com consumo médio de ${consumo_med.toFixed(2)} Km por litro e com o valor total gasto de R$ ${valor_tot_gasto.toFixed(2)}`);
 }
}
const carro = new Veiculo ('vw', 'gol', 'preta');
carro.calculamediaveiculo(100,12,5);

const caminhao = new Veiculo('volvo','VOLVO-5445','cinza');
caminhao.calculamediaveiculo(2500,625,6.5);