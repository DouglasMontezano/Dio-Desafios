/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto,
 considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

let preço_produto = 120.00;
let forma_pag = 4;
const desc_av_deb = preço_produto * 0.9;
const desc_av_din_pix = preço_produto * 0.85;
const duas_vezes = preço_produto * 1;
const mais_duas_vezes = preço_produto * 1.1;

if (forma_pag === 1) {
 console.log('o valor a vista no débito é R$ ' + desc_av_deb);
} else if (forma_pag === 2) {
 console.log('o valor a vista no dinheiro ou pix é R$ ' + desc_av_din_pix);
} else if (forma_pag === 3) {
 console.log('o valor em duas vezes é R$ ' + duas_vezes);
} else if (forma_pag === 4) {
 console.log('o valor mais de duas vezes é R$ ' + mais_duas_vezes);
}






