// DOM

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const btnVerificar = document.querySelector("#btn-verificar");
const mensajeValidacion = document.querySelector("#mensaje");

//Métodos

const verificar = () => {
  const valor1 = input1.value;
  const valor2 = input2.value;
  const valor3 = input3.value;
  const totalStickers = valor1 + valor2 + valor3;

  if (totalStickers == "911") {
    mensajeValidacion.innerHTML = "Password 1 correcto.";
    mensajeValidacion.style.color = "black";
  } else if (totalStickers == "714") {
    mensajeValidacion.innerHTML = "Password 2 correcto.";
    mensajeValidacion.style.color = "black";
  } else {
    mensajeValidacion.innerHTML = "Password incorrecto.";
    mensajeValidacion.style.color = "red";
  }
};

//Eventos

btnVerificar.addEventListener("click", verificar);
