
    //Criando referencia do conteudo da pagina
    let digitosDoCartao = document.querySelector('#boxInputDigitosCartao');

    //Array digitos do cartão
    let arrayInversaDigitosDoCartao = [];

    //Array base do codigo
    let arrayPosicaoParDaArrayInversaDigitosDoCartao = [];

    //Arrays necessarios para a uniao de novos digitos
    let arrayPosicaoImparDaArrayInversaDigitosDoCartao = [];
    let arrayPosicaoParMenor10 = [];
    let arrayDeNumerosMaioresQue9DaArrayPosicaoParDaArrayInversaDigitosDoCartao = [];

    //Arrays novos digitos
    let concatenandoOsNovosDigitosDocartao = [];

    let novosDigitosSomados = 0;


    function exibirDigitosDoCartao () {
        let valorDigitosDoCartao = digitosDoCartao.value;

        let exibirNumeroDoCartao = document.querySelector('#exibirONumeroDoCartao');
        exibirNumeroDoCartao.textContent = valorDigitosDoCartao;
    }

    function obterArrayInversaDoNumeroDoCartao () {

        for(let i = digitosDoCartao.value.length - 1; i >= 0; i--){
            arrayInversaDigitosDoCartao.push(digitosDoCartao.value[i]);
        }
        console.log(arrayInversaDigitosDoCartao); //testar
    }

    function obterArrayIndexParVezes2 () {
        for(let i = 0; i < arrayInversaDigitosDoCartao.length; i++) {
            if (i % 2 === 0 && i !== 0) {
                let posicao = arrayInversaDigitosDoCartao[i];
                arrayPosicaoParDaArrayInversaDigitosDoCartao.push(posicao * (2));

            }else {
                let posicao = arrayInversaDigitosDoCartao[i];
                arrayPosicaoImparDaArrayInversaDigitosDoCartao.push(posicao);
            }

        }
        console.log(arrayPosicaoParDaArrayInversaDigitosDoCartao); //testar
        console.log(arrayPosicaoImparDaArrayInversaDigitosDoCartao); //testar        c
    }

    function arrayPosicaoParMenorQue10 () {
        for(let i =0; i < arrayPosicaoParDaArrayInversaDigitosDoCartao.length; i++) {
            if(arrayPosicaoParDaArrayInversaDigitosDoCartao[i] < 10) {
                let posicao = arrayPosicaoParDaArrayInversaDigitosDoCartao[i];
                arrayPosicaoParMenor10.push(posicao);
            }
        }
        console.log(arrayPosicaoParMenor10);
    }

    function obterArrayDeIndexParVezes2MaioresQue9 () {
        for(let i = 0; i < arrayPosicaoParDaArrayInversaDigitosDoCartao.length; i++){
            if(arrayPosicaoParDaArrayInversaDigitosDoCartao[i] > 9) {
                let posicao = arrayPosicaoParDaArrayInversaDigitosDoCartao[i];
                arrayDeNumerosMaioresQue9DaArrayPosicaoParDaArrayInversaDigitosDoCartao.push(1 + (posicao - 10));
            }
        }
        console.log(arrayDeNumerosMaioresQue9DaArrayPosicaoParDaArrayInversaDigitosDoCartao); //testar
    }

    function UnirNovosDigitosDoCartao () {
        concatenandoOsNovosDigitosDocartao = [...arrayPosicaoImparDaArrayInversaDigitosDoCartao, ...arrayPosicaoParMenor10, ...arrayDeNumerosMaioresQue9DaArrayPosicaoParDaArrayInversaDigitosDoCartao];
        console.log(concatenandoOsNovosDigitosDocartao) //testar
    }

    function somandoOsNovosDigitos () {
        for(let i =0; i < concatenandoOsNovosDigitosDocartao.length; i++) {
            novosDigitosSomados = novosDigitosSomados + Number(concatenandoOsNovosDigitosDocartao[i]);
        }
        console.log(novosDigitosSomados);
    }

    let validarDigitosDoCartao = document.querySelector('#validarNumeroDocartao');

        validarDigitosDoCartao.addEventListener('click',function () {
            exibirDigitosDoCartao();
            obterArrayInversaDoNumeroDoCartao();
            obterArrayIndexParVezes2();
            arrayPosicaoParMenorQue10();
            obterArrayDeIndexParVezes2MaioresQue9();
            UnirNovosDigitosDoCartao();
            somandoOsNovosDigitos();
        });











