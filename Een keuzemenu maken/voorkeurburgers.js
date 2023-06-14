"use strict";
const linksSelect = document.getElementById("links");
const rechtsSelect = document.getElementById("rechts");
const eenNaarRechtsButton = document.getElementById("eenNaarRechts");
const allesNaarRechtsButton = document.getElementById("allesNaarRechts");
const eenNaarLinksButton = document.getElementById("eenNaarLinks");
const allesNaarLinksButton = document.getElementById("allesNaarLinks");

allesNaarRechtsButton.onclick = function () {
    verplaatsAlleBurgersVanNaar(linksSelect, rechtsSelect);
    // huidige knop disabelen:
    this.disabled = true;
    // knop << enabelen:
    allesNaarLinksButton.disabled = false;
};

allesNaarLinksButton.onclick = function () {
    verplaatsAlleBurgersVanNaar(rechtsSelect, linksSelect);
    // huidige knop disabelen:
    this.disabled = true;
    // knop << enabelen:
    allesNaarRechtsButton.disabled = false;
};

function verplaatsAlleBurgersVanNaar(vanSelect, naarSelect) {
    // vanSelect: de select vanwaar je de options wil kopiëren
    // naarSelect: de select naarwaar je de options wil kopiëren
    // itereren over alle te kopiëren options:
    for (const vanOption of vanSelect.options) {
        // option maken in de select naarwaar je de options kopieert:
        const naarOption = document.createElement("option");
        naarOption.innerText = vanOption.innerText;
        naarSelect.appendChild(naarOption);
    }
    // de options verwijderen in de select vanwaar je de options kopieerde
    vanSelect.options.length = 0;
}

linksSelect.onchange = function () {
    eenNaarRechtsButton.disabled = false;
};

eenNaarRechtsButton.onclick = function () {
    verplaatsEenBurgerVanNaar(linksSelect, rechtsSelect);
    // de huidige knop (>) disabelen:
    this.disabled = true;
    // de knop >> disabelen als de linkse select leeg is:
    if (linksSelect.length === 0) {
        allesNaarRechtsButton.disabled = true;
    }
    // de knop << enabelen, want de rechtse select bevat nu minstens één burger:
    allesNaarLinksButton.disabled = false;
};

rechtsSelect.onchange = function () {
    eenNaarLinksButton.disabled = false;
};

eenNaarLinksButton.onclick = function () {
    verplaatsEenBurgerVanNaar(rechtsSelect, linksSelect);
    // de huidige knop (<) disabelen:
    this.disabled = true;
    // de knop << disabelen als de linkse select leeg is:
    if (rechtsSelect.length === 0) {
        allesNaarLinksButton.disabled = true;
    }
    // de knop >> enabelen, 
    // want de linkse select bevat nu minstens één burger:
    allesNaarRechtsButton.disabled = false;
};

function verplaatsEenBurgerVanNaar(vanSelect, naarSelect) {
    // vanSelect: de select vanwaar je de option wil kopiëren
    // naarSelect: de select naarwaar je de option wil kopiëren
    // de burger die de gebruiker gekozen heeft:
    const naam = vanSelect.value;
    // een option maken in de select naarwaar je kopieert:
    const option = document.createElement("option");
    option.innerText = naam;
    naarSelect.appendChild(option);
    // de option verwijderen in de select vanwaar je kopieert:
    vanSelect.remove(vanSelect.selectedIndex);
}