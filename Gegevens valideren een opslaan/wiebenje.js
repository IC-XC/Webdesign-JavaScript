"use strict";

/*document.getElementById("onthoudMe").onclick = function () {
  sessionStorage.setItem("voornaam", document.getElementById("voornaam").value);
};*/ 


const voornaam = SessionStorage.getItem("voornaam");
if (voornaam !== null) {
  document.getElementById("voornaam").innerText = voornaam;
} 