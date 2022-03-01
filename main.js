
    let digitosDoCartao = document.querySelector('#boxInputDigitosCartao');
    let arrayInversaDigitosDoCartao = [];
    let arrayPosicaoParDaArrayInversaDigitosDoCartao = [];
    let arrayPosicaoParMenor10 = [];
    let arrayPosicaoImparDaArrayInversaDigitosDoCartao = [];
    let arrayDeNumerosMaioresQue9DaArrayPosicaoParDaArrayInversaDigitosDoCartao = [];
    let concatenandoOsNovosDigitosDocartao;


    function exibirDigitosDoCartao () {
        let valorDigitosDoCartao = digitosDoCartao.value;

        let exibirNumeroDoCartao = document.querySelector('#exibirONumeroDoCartao');
        exibirNumeroDoCartao.textContent = valorDigitosDoCartao;
    }

    function obterArrayInversaDoNumeroDoCartao (){

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


    let validarDigitosDoCartao = document.querySelector('#validarNumeroDocartao');

        validarDigitosDoCartao.addEventListener('click',function () {
            exibirDigitosDoCartao();
            obterArrayInversaDoNumeroDoCartao();
            obterArrayIndexParVezes2();
            arrayPosicaoParMenorQue10();
            obterArrayDeIndexParVezes2MaioresQue9();
        });










