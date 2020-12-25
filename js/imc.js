
var inputAltura = document.getElementById('inputAltura');
var inputPeso = document.getElementById('inputPeso');
var txtResultado = document.getElementById('txtResultado');
var txtMensagem = document.getElementById('txtMensagem');
var imc = 0;

function calcularIMC(){
	
	imc = inputPeso.value/(inputAltura.value*inputAltura.value);
	
	mensagemImc();

	console.log(imc);
}

function mensagemImc(){

	if (imc < 18.5) {

		txtResultado.innerHTML = imc.toString().substr(0, 4);
		txtMensagem.innerHTML = "Abaixo do Peso";

	} else if (imc == 18.5 || imc <= 24.9) {

		txtResultado.innerHTML = imc.toString().substr(0, 4);
		txtMensagem.innerHTML = "Peso Normal";

	} else if (imc == 25 || imc <= 29.9) {

		txtResultado.innerHTML = imc.toString().substr(0, 4);
		txtMensagem.innerHTML = "Sobrepeso";

	} else if (imc == 30 || imc <= 34.9) {

		txtResultado.innerHTML = imc.toString().substr(0, 4);
		txtMensagem.innerHTML = "Obesidade Grau 1";

	} else if (imc == 35 || imc <= 39.9) {

		txtResultado.innerHTML = imc.toString().substr(0, 4);
		txtMensagem.innerHTML = "Obesidade Grau 2";

	} else if (imc > 40) {

		txtResultado.innerHTML = imc.toString().substr(0, 4);
		txtMensagem.innerHTML = "Obesidade Grau 3";

	}
}