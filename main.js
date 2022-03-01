
    let digitosDoCartao = document.querySelector('#boxInputDigitosCartao');
    let arrayInversaDigitosDoCartao = [];

    function obterArrayInversaDoNumeroDoCartao ( ){

        for(let i = digitosDoCartao.value.length - 1; i >= 0; i--){
            arrayInversaDigitosDoCartao.push(digitosDoCartao.value[i]);
        }
        console.log(arrayInversaDigitosDoCartao); //testar
    }

    function exibirDigitosDoCartao () {
        let valorDigitosDoCartao = digitosDoCartao.value;

        let exibirNumeroDoCartao = document.querySelector('#exibirONumeroDoCartao');
        exibirNumeroDoCartao.textContent = valorDigitosDoCartao;
    }

       let validarDigitosDoCartao = document.querySelector('#validarNumeroDocartao');

        validarDigitosDoCartao.addEventListener('click',function () {
            obterArrayInversaDoNumeroDoCartao();
            exibirDigitosDoCartao();
        })


