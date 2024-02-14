let object = {string: 'string', Number: 1, boolean: true, array: ["array"], objectInterno:{objectInterno: 'objeto interno'}};
//object pode guardar outros objetos como uma array;

console.log(object.objectInterno);
// resultado: {ObjectInterno: 'objeto interno'};
//posso acessar qualquer objeto(ou todos), basta tirar o = objectInterno ou por outro parametro;

var string = object.string;
console.log(string);
//resultado: string;

var arrayInterno = object.array;
console.log(arrayInterno);
// resultado: ['array'];

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
//resultado: string true {objectInterno: 'objeto interno'};
