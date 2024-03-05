console.log(`Trabalhando com condicionais`);



const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagem = true
console.log('Destinos possíveis:');
console.log(listaDeDestinos);

// para indentar alt + shift + f
if (idadeComprador >= 18 ||estaAcompanhada == true ) {
    console.log('Boa viagem!!')
    listaDeDestinos.splice(1, 1); // Remover item da lista
   
   
}

else {
    console.log("É menor de idade, não está acompanhada e não posso vender");
}

console.log('Embarque \n\n') //O \n é um caractere especial que possibilita que pulemos uma linha no momento de imprimir a mensagem de texto
if (idadeComprador >= 18 && temPassagem == true) {
    console.log('Boa viagem')
}
else {
    console.log('Não tem passagem comprada ou não é maior de 18')
}

console.log(listaDeDestinos);





//if (idadeComprador >= 18) {
//     console.log('Comprador maior de idade')
//     listaDeDestinos.splice(1, 1); // Remover item da lista
//     console.log("Destinos possíveis:");
//     console.log(listaDeDestinos);
// }
// else if (estaAcompanhada == true) {
//     console.log("Comprador é menor de idade, mas está acompanhado");
//     listaDeDestinos.splice(1, 1); // Remover item da lista

// }
// else {
//     console.log("É menor de idade, não está acompanhada e não posso vender");
// }


// console.log(idadeComprador >= 18);
// console.log(idadeComprador != 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador > 18);
// console.log(idadeComprador == 18);
// console.log(idadeComprador > 18);

