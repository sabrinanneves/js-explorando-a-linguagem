console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`; para comentar  selecionaremos esse trecho de código e apartaremos o atalho 
// "Ctrl + K + C" e descomentar o U



const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) // adicionando um item na lista
console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

 listaDeDestinos.splice(1,1); // Remover item da lista. Precisaremos declarar a quantidade de itens a serem deletados e a posição inicial para que a remoção seja feita
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]); // exibir um item da lista