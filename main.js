

function exibirDigitosDoCartao () {
    let digitosDoCartao = document.querySelector('#boxInputDigitosCartao');
    let valorDigitosDoCartao = digitosDoCartao.value;

    let exibirNumeroDoCartao = document.querySelector('#exibirONumeroDoCartao');
    exibirNumeroDoCartao.textContent = valorDigitosDoCartao;
}
   let validarDigitosDoCartao = document.querySelector('#validarNumeroDocartao');
    validarDigitosDoCartao.addEventListener('click', exibirDigitosDoCartao);


