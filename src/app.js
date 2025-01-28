/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let Numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let Simbolo = ["♥", "♦", "♠", "♣"];

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

    
  }
  generateRandomCarta();

  document.getElementById("actualizarCarta").addEventListener("click", generateRandomCarta);
};
