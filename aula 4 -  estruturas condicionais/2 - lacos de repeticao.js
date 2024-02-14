//for 
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',]; // criado array que recebe 5 valores;

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', } //criado objeto que recebe 3 propriedades;

// O for executa uma instrução até que ela seja falsa
for(let indice = 0; indice < array.length; indice++) { //abri um paretese para declarar uma condição e abri chaves para declarar a instrução
    console.log(indice); //aqui está a instrução;
}
//dentro da condição criei uma variavel chamada indice que vai começar em 0(no array seria o 'valor1')
//depois criei uma condição: enquanto indice for menor que o array.length...
//lenghth significa o tamanho total da array, ou seja, enquanto o indice não atingir o valor de 5(que e o valor total da array) ele vai axecutar uma função...
// Essa função vai ser que o indice vai receber mais um(indice++) a cada repetição que ele fizer;
//resposta:Ele imprimiu os indice da array -> 0,1, 2, 3, 4



// for/in 
//executa repetição a partir de uma propriedade
//COM ARRAY
for(let i in array) {
    console.log(i);
}
//resultado: 0,1, 2, 3, 4
//A cor do resultado vai aparecer em branco, porque é uma string e não numero.

//com object
for(i in object) {  //ele vai criar uma variavel de estado chamada (i) dentro de object/ vai percorrer cada propriedade de object e imprimir as propriedades.
    console.log(i);
}
//podemos utilizar somente o i, porque o javascrip já vai compriender que é uma variavel de estado.
//resultado: propriedade1, propriedade2, propriedade3;

//for/of - executa repetição a partir de valor
//com array
for (i of array){ //criado variavel de estado chamada (i);
    console.log(i);
}
//Ao inves de imprimir o indice, ele vai imprimir o valor de cada indice.
// resultado: valor1, valor2, valor3, valor4, valor5;


//FOR/OF com objetos
for(i of object.propriedade3){ //criado variavel de estado chamada (i);
    console.log(i);
}
//O For/of não funciona com objetos pois as propriedades variam,
//mas memmo assim se voce queiser pegar e só, passar a propriedade dentro da condição(object.propriedade3);
//Ele vai imprimir cada letra em uma linha: v, a, l o, r, 3 = por esse motivo não funciona em for/of;


//WHILE(enquanto)
var a = 0; //variavel a recebe 0;

while (a < 10){  // enquanto (a) for menor que (10);
    a++;         // então ele vai somar (a) com (1) que é esse (a++(ele vai receber mais 1))/ a cada interação;
    console.log(a);
}
//a verificação e feita antes da execução
//resultado: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;

//DO/WHILE(até que)
var a = 0;
do {
    a++;
    console.log(a);
} while (a < 10) //ate que (a) seja menor que 10;
//a verificação é feita depois da execução;
//resultado: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;
