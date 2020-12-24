
var inputAltura = document.getElementById('inputAltura');
var inputPeso = document.getElementById('inputPeso');
var txtResultado = document.getElementById('txtResultado');
var imc = 0;

function calcularIMC(){
	
	imc = inputPeso.value/(inputAltura.value*inputAltura.value);
	
	txtResultado.innerHTML = imc.toString().substr(0, 4);

	console.log(imc);
}