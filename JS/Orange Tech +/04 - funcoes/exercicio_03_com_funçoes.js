/*3 F) Elabore um algoritmo que calcule o que deve ser pago por um produto,
 considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/
function main(){ 
let preco_produto = 120.00;
let forma_pag = 4;
veri_cond_pag(forma_pag, preco_produto);}
main();

function add_desconto(preco_produto, desconto) {
 return (preco_produto - (preco_produto * (desconto / 100)));
}

function add_juros(preco_produto, juro) {
 return (preco_produto + (preco_produto * (juro / 100)));
}

function veri_cond_pag(forma_pag, preco_produto) {
 if (forma_pag === 1) {
  console.log('o valor a vista no débito é R$ ' + add_desconto(preco_produto, 10));
 } else if (forma_pag === 2) {
  console.log('o valor a vista no dinheiro ou pix é R$ ' + add_desconto(preco_produto, 15));
 } else if (forma_pag === 3) {
  console.log('o valor em duas vezes é R$ ' + preco_produto);
 } else if (forma_pag === 4) {
  console.log('o valor mais de duas vezes é R$ ' + add_juros(preco_produto, 10));
 }
}


