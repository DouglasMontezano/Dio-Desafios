/*Criando uma calculadora
Para este exercício vamos utilizar alguns métodos nativos do JavaScript:  
• Number() – para converter valores em números;
• Prompt() – para registrar entradas de usuário;
• Alert() – para mostrar mensagem ao usuário;
• Template Strings – para usar strings junto com expressões;
*/

var num1;
var num2;
var operacao;
var resultado;
// Função principal
function main() {
  var operacao = Number(prompt('Digite o tipo de operação que deseja realizar \n 1:Adiçao \n 2: Subtração \n 3: Divisão \n 4: Multiplicação \n 5:Exponenciação'));
  if (!operacao || operacao < 0 || operacao >= 7) {
    alert('Valor inválido');
    main();
  }
  else {
    num1 = Number(prompt('Digite o primeiro número'));
    num2 = Number(prompt('Digite o segundo número'));
    if (!num1 || !num2) {
      alert('Valor inválido');
      main();
    }
    else {
      switch (operacao) {
        case 1:
          resultado = Somar(num1, num2);
          alert(`O resultado é ${resultado}`);
          break;
        case 2:
          resultado = Subtrair(num1, num2);
          alert(`O resultado é ${resultado}`);
          break;
        case 3:
          resultado = Dividir(num1, num2);
          alert(`O resultado é ${resultado}`);
          break;
        case 4:
          resultado = Multiplicar(num1, num2);
          alert(`O resultado é ${resultado}`);
          break;
        case 5:
          resultado = Exponenciar(num1, num2);
          alert(`O resultado é ${resultado}`);
          break;
        default:
          console.log('Opção inválida');
      }
    }
  }
}
main();
// Funções que calculam o resultado das operações solicitadas pelo usuário
function Somar(num1, num2) { var result = num1 + num2; return result; }

function Subtrair(num1, num2) { var result = num1 - num2; return result; }

function Dividir(num1, num2) { var result = num1 / num2; return result; }

function Multiplicar(num1, num2) { var result = num1 * num2; return result; }

function Exponenciar(num1, num2) { var result = num1 ** num2; return result; }

