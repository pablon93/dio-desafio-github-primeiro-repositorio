//função declarativa

function funcao(){
    console.log('Mensagem da função')
}

funcao();

//função com parâmetros

function fparametro(primeiro, segundo){
    console.log(primeiro, segundo)
}

fparametro('Tudo Certo!', 'Jovem!!!');

//função de expressão

var funcao = function(){
    console.log('Sou uma mensagem da função de expressão!')
}

funcao();

//arrow function

var funcao = () => {
    console.log('Sou uma arrow function')
}
funcao();
