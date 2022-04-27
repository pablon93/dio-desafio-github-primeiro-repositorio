//Tipos primitivos:

// boolean
var vOuF = false;
console.log(vOuF);
console.log(typeof(vOuF));

//number

var numero = 1;
console.log(numero);
console.log(typeof(numero));

//string

var texto = "olá mundo!"
console.log(texto);
console.log(typeof(texto));

//como declarar

var variavel = 'Pablo';
variavel = false
console.log(variavel);
console.log(typeof(variavel));

let variavel2 = 'PAblo'
variavel2 = 'Ferreira'
console.log(variavel2);
console.log(typeof(variavel2));

const constante = 'Pablo'
console.log(constante);

//Variáveis em Escopos

var escopoglobal = 'global';
console.log(escopoglobal);

function escopolocal(){
    let escopolocal = 'local';
    console.log(escopolocal);
}

escopolocal()
