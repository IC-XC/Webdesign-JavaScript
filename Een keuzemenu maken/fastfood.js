"use strict";

const aantalHamburgers = document.getElementById("hamburgers").length;
document.getElementById("aantalHamburgers").innerText = aantalHamburgers;

document.getElementById("hamburgers").onchange = function () {
    document.getElementById("keuzeBurger").innerText = this.value;
  }; 


  
const aantalFrieten = document.getElementsByName("friet").length;
document.getElementById("aantalFrieten").innerText = aantalFrieten; 

for (const inputFriet of document.getElementByName("friet")) {
  inputFriet.onchange = function () {
    document.getElementById("keuzeFriet").innerText = this.value;
}; 
}


const aantalDesserts = document.getElementsByName("dessert").length;
document.getElementById("aantalDesserts").innerText = aantalDesserts;  


for (const eenInputDessert of getElementsByName("dessert")) {
  inputDessert.onchange = function() {
    let keuzes = "";
    for (const eenInputDessert of getElementsByName("dessert")) {
      if (eenInputDessert.checked) {
        keuzes += `${eenInputDessert.parentElement.innerText},`;
      }
    }
  document.getElementById("keuzeDessert").innerText = this.value;
  };
} 