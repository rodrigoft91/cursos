console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
 `Brasilia`,
 `São Paulo`,
 `Rio de Janeiro`,
 `Ceilândia`,
 `Samambaia`,
 `Ocidental`
);

let idade = prompt(`Viagem sem acompanhamento dos pais a partir de 15 anos! 

Digite a sua idade: `);

idade = Number(idade);

if (idade >= 15) {

 alert(`Você tem ${idade} anos!
 
Viagem autorizada`);

} else {

 alert(`Comprador menor da idade permitida!
 
 Viagem não autorizada!
 
 `);
}

