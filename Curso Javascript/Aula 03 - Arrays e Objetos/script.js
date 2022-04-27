/*
//O que são vetores ou arrays

let array = ['Pablo', 1, true];
console.log(array);

let array2 = ['Pablo', 3, false, ['array1', 5, true], ['array2', 3, false], ['array3', 9, true, 'Pedro']];
console.log(array2[0]);

//foreach itera um array
array2.forEach(function( iten, index){console.log(iten, index)});

//push adciona item no final do array
array2.push('novo iten');
console.log(array2);

//pop remove item no final do array
array2.pop();
console.log(array2);

//shift remove item no inicio do array
array.shift();
console.log(array);

//unshift adiciona item no inicio do array
array.unshift('novo iten no inicio');
console.log(array);

//indexOf retorna o indice de um valor
console.log(array.indexOf(true))

//splice remove ou substitui um iten por um indice
array.splice(0, 3);
console.log(array);*/

//OBJETOS

let object = {string: 'string', number: 1, boolean: true, array: ["arrayTestes"], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object);

var string = object.objectInterno;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);