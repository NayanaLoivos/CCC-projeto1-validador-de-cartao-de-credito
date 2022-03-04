const validarDigitosBotao = document.querySelector('#validarNumeroDocartao');
const digitosInformadosDoCartao = document.querySelector('#boxInputDigitosCartao');
const exibicaoNumeroDoCartao = document.querySelector('#exibirONumeroDoCartao');
const mensagemDeValidacao = document.querySelector('#exibirMensagemDeValidacao');

function obterDigitosInversoDoCartao(array) {
    let digitosInvertidos = [];
    for (let i = array.length - 1; i >= 0; i--) {
        digitosInvertidos.push(array[i]);
    }
    return digitosInvertidos;
}

function obterNumerosAte9(array) {
    let numerosAte9 = [];
    for (let i = 0; i < array.length; i++) {

        if (array[i] < 10) {
            let posicao = array[i];
            numerosAte9.push(posicao);
        }
    }
    return numerosAte9;
}

function obterNumerosAPartirDe10(array) {
    let numerosAPartirDe10 = [];
    for (let i = 0; i < array.length; i++) {

        if (array[i] > 9) {
            let posicao = array[i];
            numerosAPartirDe10.push(1 + (posicao - 10));
        }
    }
    return numerosAPartirDe10;
}

function transformarNumerosDoArray(array) {
    let numerosDeIndexImpar = [];
    let numerosDeIndexPar = [];
    for (let i = 0; i < array.length; i++) {

        if (i % 2 === 1) {
            let valorNaPosicao = array[i];
            numerosDeIndexImpar.push(valorNaPosicao * (2));

        } else {
            let valorNaPosicao = array[i];
            numerosDeIndexPar.push(valorNaPosicao);
        }
    }

    let numerosDeIndexImparAte9 = obterNumerosAte9(numerosDeIndexImpar);
    let numerosDeIndexParAPartirDe10 = obterNumerosAPartirDe10(numerosDeIndexImpar);

    let arraysConcatenados = [...numerosDeIndexPar, ...numerosDeIndexImparAte9, ...numerosDeIndexParAPartirDe10];

    return arraysConcatenados;

}

function somarDigitos(array) {
    let somaDeDigitos = 0;
    for (let i = 0; i < array.length; i++) {
        somaDeDigitos += Number(array[i]);
    }
    return somaDeDigitos;
}

function isValid(somaDeDigitos) {
    if (somaDeDigitos % 10 === 0) {
        return true;
    } else {
        return false;
    }
}

validarDigitosBotao.addEventListener('click', () => {
    const digitosInvertidos = obterDigitosInversoDoCartao(digitosInformadosDoCartao.value);
    exibicaoNumeroDoCartao.textContent = digitosInformadosDoCartao.value

    const novoArray = transformarNumerosDoArray(digitosInvertidos);
    const somaDosDigitos = somarDigitos(novoArray);

    if (isValid(somaDosDigitos)) {
        mensagemDeValidacao.innerText = 'Cartão de numeração VÁLIDA!';
    } else {
        mensagemDeValidacao.innerText = 'Cartão de numeração INVÁLIDA!';
    }
})