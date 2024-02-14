
let array = ['string', 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];

//forEach
array.forEach(function(item, index){console.log(item, index)});
// ele imprimiu a array com o indice, string no indice 0, 1 no indice 1, true no indice 2 e assim sucessivamente....
// resposta: 0: string 0, 1: 1 1, 2: true 2, ['array1'] 3, ['array2'] 4, ['array3'] 5, ['array4'] 6;

//push
array.push ('novo item');
console.log(array);
// ele vai adicinar um novo item no final da array;
// pode adicinar qulaquer dado: strig 'novo item', numer 0, nova array []....
//resultado: (8) [0: 'string', 1: 1, 2: true, 3: Array(1), 4: Array(1), 5: Array(1), 6: Array(1), 7: 'novo item'];

//pop
array.pop();
console.log(array);
//remove item no final do array;
//resultado: (7) [0: 'string', 1: 1, 2: true, 3: Array(1), 4: Array(1), 5: Array(1), 6: Array(1)];

//shift
array.shift();
console.log(array);
//remove item no início do array;
//resultado: (6) [0: 1, 1: true, 2: Array(1), 3: Array(1), 4: Array(1), 5: Array(1)];

//unshifit
array.unshift('novo item no inicio');
console.log(array);
//add item no início do array;
//resultado: (7) [0: 'novo item no inicio', 1: 1, 2: true, 3: Array(1), 4: Array(1), 5: Array(1),6: Array(1)];

//indexOf
console.log(array.indexOf(true));
//retorna o índice de um valor;
//resposta: indice 2 (o valor true, está no indice 2);

//splice
/*array.splice(0, 3);
console.log(array);*/
//Queremos que ele comece do indice 0 até o 3;
//remove ou substitui um item pelo índice;
//resposta: (4) [0: Array(1), 1: Array(1), 2: Array(1), 3: Array(1)];


//slice
let novoArray = array.slice(0, 3);
console.log(novoArray);
//retorna uma parte de um array existente;
//respostas: (3) [0: 'novo item no inicio', 1: 1, 2: true];




