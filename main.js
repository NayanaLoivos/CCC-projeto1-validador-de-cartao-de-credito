
    let digitosDoCartao = document.querySelector('#boxInputDigitosCartao');
    let arrayInversaDigitosDoCartao = [];
    let arrayPosicaoParDaArrayInversaDigitosDoCartao = [];
   

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
            if( i % 2 === 0 && i !== 0) {
                let posicao = arrayInversaDigitosDoCartao[i];
                arrayPosicaoParDaArrayInversaDigitosDoCartao.push(posicao*(2));
            }
        }
    }
    console.log(arrayPosicaoParDaArrayInversaDigitosDoCartao); //testar



    let validarDigitosDoCartao = document.querySelector('#validarNumeroDocartao');

        validarDigitosDoCartao.addEventListener('click',function () {
            exibirDigitosDoCartao();
            obterArrayInversaDoNumeroDoCartao();
            obterArrayIndexParVezes2();
        });










