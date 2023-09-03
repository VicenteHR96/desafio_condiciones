// DOM

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const btnVerificar = document.querySelector("#btn-verificar");
const mensajeValidacion = document.querySelector("#mensaje");

// Métodos

function filtro(event) {
  const tecla = event.key;

  // Evitar ., -, y e
  if ([".", ",", "-", "e"].includes(tecla)) {
    event.preventDefault();
  }
}

const verificar = () => {
  const valor1 = Number(input1.value);
  const valor2 = Number(input2.value);
  const valor3 = Number(input3.value);
  const totalStickers = valor1 + valor2 + valor3;

  if (totalStickers > 10) {
    mensajeValidacion.innerHTML = "No se permiten cantidades mayores a 10.";
    mensajeValidacion.style.color = "red";
  } else {
    mensajeValidacion.innerHTML =
      "Has agregado " + totalStickers + " Stickers.";
    mensajeValidacion.style.color = "black";
  }
};

// Eventos

btnVerificar.addEventListener("click", verificar);

// Agregar evento de filtro para evitar números decimales
input1.addEventListener("keydown", filtro);
input2.addEventListener("keydown", filtro);
input3.addEventListener("keydown", filtro);
