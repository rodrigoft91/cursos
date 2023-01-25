

const nome = 'Rodrigo França';
const sobrenome = 'Teixeira';
const idade = 31;
const altura = 1.71;
const peso = 83;
let anoNascimento;

anoNascimento = 2022 - idade;

let imc = peso / (altura * altura);

const total = imc.toFixed(2);


console.log(`${nome} ${sobrenome}, tem ${idade} anos e pesa ${peso} kg`);

console.log(`Tem ${altura} de altura e seu IMC e de: ${total}.`);

console.log(`${nome}, nasceu em: ${anoNascimento}`);



