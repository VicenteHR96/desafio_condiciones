// DOM

const imgCar = document.querySelector(".img-car");

// Métodos

const borderOn = () => {
  if (imgCar.style.border === "2px solid red") {
    imgCar.style.border = "none";
  } else {
    imgCar.style.border = "2px solid red";
  }
};

// Eventos

imgCar.addEventListener("click", borderOn);
