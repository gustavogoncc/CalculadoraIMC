document.getElementById('imcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    var imc = peso / (altura * altura);

    var resultado = '';

    if (isNaN(imc)) {
        resultado = 'Por favor, insira valores válidos para altura e peso.';
    } else {
        resultado = 'Seu IMC é: ' + imc.toFixed(2) + '. ';

        if (imc < 18.5) {
            resultado += 'Você está abaixo do peso ideal.';
        } else if (imc >= 18.5 && imc < 24.9) {
            resultado += 'Seu peso está dentro da faixa considerada saudável.';
        } else if (imc >= 25 && imc < 29.9) {
            resultado += 'Você está acima do peso ideal.';
        } else {
            resultado += 'Você está com obesidade.';
        }
    }

    document.getElementById('resultado').innerHTML = resultado;
});
