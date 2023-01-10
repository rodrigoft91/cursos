var titulo = (document.querySelector(".titulo"))

titulo.textContent = "Aparecida Nutricionista"


var tdImc = document.querySelectorAll(".info-imc")

var tdPeso = document.querySelectorAll(".info-peso")

var peso = tdPeso.textContent

var tdAltura = document.querySelectorAll(".info-altura")

var altura = tdAltura.textContent

var imc = peso / (altura * altura)

tdImc.textContent = imc

var pesovalido = true
var alturavalida = true


if(peso < 0 || peso >=1000){

    tdImc.textContent = "Peso Inválido"
    pesovalido = false


}else if ( altura < 0 || altura >= 3){

    tdImc.textContent = "Altura inválida"
    altura = false

}else if (pesovalido && alturavalida){

    tdImc.textContent = imc

}






