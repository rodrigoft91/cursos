console.log(`If's encadeados`);


const listaDeDestinos = new Array(
 `Brasilia`,
 `São Paulo`,
 `Rio de Janeiro`,
 `Ceilândia`,
 `Samambaia`,
 `Ocidental`
);

let idade = 20;

console.log(`Lista de Destinos disponíveis:`);

console.log(listaDeDestinos);

console.log(`Vendas de passagen permitidas para pessoas que tenham a partir de 15 anos!`);


if (idade >= 15) {

 console.log(`Sua idade é ${idade} anos!`);
 console.log(`Você está dentro da idade permitida, compra efetuada`);
 listaDeDestinos.splice(1, 1);

 console.log(`Destino escolhido: São Paulo.`)

 console.log(`Lista de destinos diponiveis:`);
 console.log(listaDeDestinos);

} else {

 console.log(`Venda não permitida!`);
 console.log(`Vendas de passagen permitidas para pessoas que tenham a partir de 15 anos!`);

 console.log(`Lista de Destinos disponíveis:`);
 console.log(listaDeDestinos);

}

const readline = require('readline').createInterface({

 input: process.stdin,
 output: process.stdout

})

readline.question(`Qual sua idade?:, ${idade} `);