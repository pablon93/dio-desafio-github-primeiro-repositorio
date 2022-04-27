function calculadora(){
    const operacao = Number(prompt('ESCOLHA UMA OPERAÇÃO:\n 1 - SOMA (+)\n 2 - SUBTRAÇÃO (-)\n 3 - MULTIPLICAÇÃO (*)\n 4 - DIVISÃO (/)\n 5 - DIVISÃO INTEIRA (%)\n 6 - POTENCIAÇÃO (**)'));    
}
let n1 = number.prompt('Insira um valor:');
let n2 = number.prompt('Insira o segundo valor:');
let resultado;

function soma(){
    resultado = n1 + n2;
    alert('${n1} + ${n2} = ${resultado}');
}

function subtracao(){
    resultado = n1 - n2;
    alert('${n1} - ${n2} = ${resultado}');
}

function multiplicacao(){
    resultado = n1 * n2;
    alert('${n1} * ${n2} = ${resultado}');
}

function divisao(){
    resultado = n1 / n2;
    alert('${n1} / ${n2} = ${resultado}');
}

function divisaoInteira(){
    resultado = n1 % n2;
    alert('${n1} % ${n2} = ${resultado}');
}

function potenciacao(){
    resultado = n1 ** n2;
    alert('${n1} ** ${n2} = ${resultado}');
}

if(operacao == 1){
    soma();
}else if (operacao == 2) {
    subtracao();
}else if (operacao == 3) {
    multiplicacao();
}else if (operacao == 4) {
    divisao();
}else if (operacao == 5) {
    divisaoInteira();
}else if (operacao == 6) {
    potenciacao();
}
calculadora();

