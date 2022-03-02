
    //Criando referencias do conteudo da pagina
    let digitosInformadosDoCartao = document.querySelector('#boxInputDigitosCartao');
    let validarDigitosInformadosDoCartao = document.querySelector('#validarNumeroDocartao');

    let exibirNumeroDoCartao = document.querySelector('#exibirONumeroDoCartao');
    let exibirMensagemDeValidacao = document.querySelector('#exibirMensagemDeValidacao');

    //Array digitos do cartão
    let digitosInformadosDoCartaoInvertidos = [];

    //Array base do codigo
    let numerosDeIndexesImparesMultiplicadosPor2 = [];

    //Arrays necessarios para a uniao de novos digitos
    let numerosDeIndexesParesMantidos = [];
    let numerosAte9EncontradosAoMultiplicarPor2 = [];
    let numerosAPartirde10EncontradosAoMultiplicarPor2 = [];

    //Arrays novos digitos
    let concatenandoAManipulacaoDeDigitos = [];
    
    //Total dos novos digitos
    let somandoAManipulacaoDeDigitos = 0;


    function capturarNumeroDigitadosDoCartao () {

        let digitosDoCartao = digitosInformadosDoCartao.value;

        exibirNumeroDoCartao.textContent = digitosDoCartao;
    }

    function obterDigitosInversoDoCartao () {

        for(let i = digitosInformadosDoCartao.value.length - 1; i >= 0; i--) {
            digitosInformadosDoCartaoInvertidos.push(digitosInformadosDoCartao.value[i]);
        }

        console.log(digitosInformadosDoCartaoInvertidos); //testar
    }

    function obterMultiplicacaoPor2DosNumerosDeIndexesImparesMantendoOsNumerosDeIndexesPares () {

        for(let i = 0; i < digitosInformadosDoCartaoInvertidos.length; i++) {

            if (i % 2 === 1) {
                let posicao = digitosInformadosDoCartaoInvertidos[i];
                numerosDeIndexesImparesMultiplicadosPor2.push(posicao * (2));

            }else {
                let posicao = digitosInformadosDoCartaoInvertidos[i];
                numerosDeIndexesParesMantidos.push(posicao);
            }
        }

        console.log(numerosDeIndexesImparesMultiplicadosPor2); //testar
        console.log(numerosDeIndexesParesMantidos); //testar
    }

    function obterNumerosAte9DaArrayDeIndexesPares () {

        for(let i =0; i < numerosDeIndexesImparesMultiplicadosPor2.length; i++) {

            if(numerosDeIndexesImparesMultiplicadosPor2[i] < 10) {
                let posicao = numerosDeIndexesImparesMultiplicadosPor2[i];
                numerosAte9EncontradosAoMultiplicarPor2.push(posicao);
            }
        }

        console.log(numerosAte9EncontradosAoMultiplicarPor2); //testar
    }

    function obterNumerosAPartirDe10DaArrayDeIndexesPares () {

        for(let i = 0; i < numerosDeIndexesImparesMultiplicadosPor2.length; i++) {

            if(numerosDeIndexesImparesMultiplicadosPor2[i] > 9) {
                let posicao = numerosDeIndexesImparesMultiplicadosPor2[i];
                numerosAPartirde10EncontradosAoMultiplicarPor2.push(1 + (posicao - 10));
            }
        }

        console.log(numerosAPartirde10EncontradosAoMultiplicarPor2); //testar
    }

    function UnirNovosDigitosManipulados () {

        concatenandoAManipulacaoDeDigitos = [...numerosDeIndexesParesMantidos, ...numerosAte9EncontradosAoMultiplicarPor2, ...numerosAPartirde10EncontradosAoMultiplicarPor2];

        console.log(concatenandoAManipulacaoDeDigitos) //testar
    }

    function somarOsNovosDigitosManipulados () {

        for(let i =0; i < concatenandoAManipulacaoDeDigitos.length; i++) {
            somandoAManipulacaoDeDigitos = somandoAManipulacaoDeDigitos + Number(concatenandoAManipulacaoDeDigitos[i]);
        }
        console.log(somandoAManipulacaoDeDigitos); //testar
    }

    function compararAValidadeDoCartaoInformado () {

        if(somandoAManipulacaoDeDigitos % 10 === 0) {
            exibirMensagemDeValidacao.innerText = 'Cartão de numeração VÁLIDA!';
        }else {
            exibirMensagemDeValidacao.innerText = 'cartão de numeração INVÁLIDA!'
        }
    }


    //funcao de excucao
    validarDigitosInformadosDoCartao.addEventListener('click',function () {

        capturarNumeroDigitadosDoCartao();
        obterDigitosInversoDoCartao();
        obterMultiplicacaoPor2DosNumerosDeIndexesImparesMantendoOsNumerosDeIndexesPares();
        obterNumerosAte9DaArrayDeIndexesPares();
        obterNumerosAPartirDe10DaArrayDeIndexesPares();
        UnirNovosDigitosManipulados();
        somarOsNovosDigitosManipulados();
        compararAValidadeDoCartaoInformado();
        });











