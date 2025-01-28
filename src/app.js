/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let Numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let Simbolo = ["♥", "♦", "♠", "♣"];

  let Imagenes = {
    "A": "url('https://www.google.com/imgres?q=messi&imgurl=https%3A%2F%2Ffifpro.org%2Fmedia%2Ffhmfhvkx%2Fmessi-world-cup.jpg%3Frxy%3D0.48356841796117644%2C0.31512414378031967%26width%3D1600%26height%3D1024%26rnd%3D133210253587130000&imgrefurl=https%3A%2F%2Ffifpro.org%2Fes%2Fapoyar-a-los-y-las-futbolistas%2Finfluencia-del-jugador%2Fworld11%2Fmessi-la-leyenda-que-busca-en-el-world-11-un-nuevo-record&docid=Wgp57JoYFnquhM&tbnid=to9nLj-BigllKM&vet=12ahUKEwiQwpq2s5iLAxUwhv0HHRAtJMwQM3oFCIEBEAA..i&w=1600&h=1024&hcb=2&ved=2ahUKEwiQwpq2s5iLAxUwhv0HHRAtJMwQM3oFCIEBEAA')",
    "2": "url('https://www.google.com/imgres?q=cuti%20romero&imgurl=https%3A%2F%2Fstrikers.futbol%2F__export%2F1674682437763%2Fsites%2Fstrikers%2Fimg%2F2023%2F01%2F25%2Fcuti_romero.jpg_996506077.jpg&imgrefurl=https%3A%2F%2Fstrikers.futbol%2Fcracks%2FNo-lo-puede-explicar-Cuti-Romero-revela-intimidades-de-la-Seleccion-Argentina-antes-y-despues-de-ser-campeones-del-Mundial-Qatar-2022-20230125-0035.html&docid=SFil9Thl1ZUBXM&tbnid=19k4Qw9206IyTM&vet=12ahUKEwi4pIfcsJiLAxWu-LsIHZvIEYYQM3oECGIQAA..i&w=1500&h=1500&hcb=2&ved=2ahUKEwi4pIfcsJiLAxWu-LsIHZvIEYYQM3oECGIQAA')",
    "3": "url('https://via.placeholder.com/150/008000/FFFFFF?text=3')",
    "4": "url('https://via.placeholder.com/150/FFFF00/FFFFFF?text=4')",
    "5": "url('https://via.placeholder.com/150/FFA500/FFFFFF?text=5')",
    "6": "url('https://via.placeholder.com/150/800080/FFFFFF?text=6')",
    "7": "url('https://via.placeholder.com/150/00FFFF/FFFFFF?text=7')",
    "8": "url('https://via.placeholder.com/150/FFC0CB/FFFFFF?text=8')",
    "9": "url('https://via.placeholder.com/150/808080/FFFFFF?text=9')",
    "10": "url('https://via.placeholder.com/150/000000/FFFFFF?text=10')",
    "J": "url('https://via.placeholder.com/150/FF6347/FFFFFF?text=J')",
    "Q": "url('https://via.placeholder.com/150/4682B4/FFFFFF?text=Q')",
    "K": "url('https://via.placeholder.com/150/32CD32/FFFFFF?text=K')"
  };

  function generateRandomCarta() {
    let randomNumero = Numero[Math.floor(Math.random() * Numero.length)];
    let randomSimbolo = Simbolo[Math.floor(Math.random() * Simbolo.length)];

    let NumeroElement = document.getElementById("Numero");
    let SimbolotopElement = document.getElementById("Simbolo-top");
    let SimbolodownElement = document.getElementById("Simbolo-down");
    let CartaElement = document.getElementById("carta");

    NumeroElement.textContent = randomNumero;
    SimbolotopElement.textContent = randomSimbolo;
    SimbolodownElement.textContent = randomSimbolo;

    let Red = randomSimbolo === "♥" || randomSimbolo === "♦";
    NumeroElement.style.color = Red ? "red" : "black";
    SimbolotopElement.style.color = Red ? "red" : "black";
    SimbolodownElement.style.color = Red ? "red" : "black";

    // Cambiar la imagen de fondo de la carta
    CartaElement.style.backgroundImage = Imagenes[randomNumero];
  }

  // Generar una carta al cargar la página
  generateRandomCarta();

  // Agregar evento al botón para generar nueva carta
  document.getElementById("actualizarCarta").addEventListener("click", generateRandomCarta);
};
