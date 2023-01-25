// operadores aritméticos, atribuição e incremento.

// 
/*Aritméticos
* + Adição/ concatenação (- / *)
* ** Potenciação
* % resto da divisão
* 
*
*
*/

// Incremento Pós e Pré

let contador = 1;

contador++;
contador++;
contador++;

console.log(contador)

// Decremento Pós e Pré

let contador1 = 1;

contador1--;
contador1--;
contador1--;

console.log(contador1)


// Operadores de atruibuição

//  Leitura: contador = contador * outro valor;

const passo = 50;
let contador3 = 2;

contador3 *= passo;

console.log(contador3);

contador3 += passo;

console.log(contador3);

// COnversão de strings para numbers.

const num1 = 5;
const num2 = Number('10.5');
const num3 = Number('10');
const num4 = ('20.5')

let soma = num1 + num2 + num3;

console.log(soma);

console.log(typeof num1, typeof num2, typeof num3, typeof num4);







