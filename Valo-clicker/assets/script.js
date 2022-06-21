"use strict";
// Element html
const attaque = document.querySelector(".attaque");
const scoreSecText = document.querySelector(".scoreSecText");

// variable de départ - Début de game
let score = 0;
let scorePerSecond = 0;

//Classic
let classicPrice = 100;
let classicNumber = 0;
const classic = document.getElementById("classic");
const classicTextContent = document.querySelector(".classic--nb");
const classicPriceText = document.querySelector(".classic--price");

//Frenzy
let frenzyPrice = 5000;
let frenzyNumber = 0;
const frenzy = document.getElementById("frenzy");
const frenzyTextContent = document.querySelector(".frenzy--nb");
const frenzyPriceText = document.querySelector(".frenzy--price");

//ghost
let ghostPrice = 50000;
let ghostNumber = 0;
const ghost = document.getElementById("ghost");
const ghostTextContent = document.querySelector(".ghost--nb");
const ghostPriceText = document.querySelector(".ghost--price");

//sheriff
let sheriffPrice = 100000;
let sheriffNumber = 0;
const sheriff = document.getElementById("sheriff");
const sheriffTextContent = document.querySelector(".sheriff--nb");
const sheriffPriceText = document.querySelector(".sheriff--price");

//spectre
let spectrePrice = 200000;
let spectreNumber = 0;
const spectre = document.getElementById("spectre");
const spectreTextContent = document.querySelector(".spectre--nb");
const spectrePriceText = document.querySelector(".spectre--price");

//guardian
let guardianPrice = 300000;
let guardianNumber = 0;
const guardian = document.getElementById("guardian");
const guardianTextContent = document.querySelector(".guardian--nb");
const guardianPriceText = document.querySelector(".guardian--price");

//phantom
let phantomPrice = 400000;
let phantomNumber = 0;
const phantom = document.getElementById("phantom");
const phantomTextContent = document.querySelector(".phantom--nb");
const phantomPriceText = document.querySelector(".phantom--price");

//vandal
let vandalPrice = 500000;
let vandalNumber = 0;
const vandal = document.getElementById("vandal");
const vandalTextContent = document.querySelector(".vandal--nb");
const vandalPriceText = document.querySelector(".vandal--price");

//odin
let odinPrice = 600000;
let odinNumber = 0;
const odin = document.getElementById("odin");
const odinTextContent = document.querySelector(".odin--nb");
const odinPriceText = document.querySelector(".odin--price");

//operator
let operatorPrice = 10000000;
let operatorNumber = 0;
const operator = document.getElementById("operator");
const operatorTextContent = document.querySelector(".operator--nb");
const operatorPriceText = document.querySelector(".operator--price");

//knife
let knifePrice = 50000000;
let knifeNumber = 0;
const knife = document.getElementById("knife");
const knifeTextContent = document.querySelector(".knife--nb");
const knifePriceText = document.querySelector(".knife--price");

// click spike img
document.querySelector(".spike--gros").addEventListener("click", function () {
  score++;
  attaque.textContent = score;
});

// ------------------ Achat classic -------------------------

classic.addEventListener("click", function () {
  if (score >= classicPrice) {
    score = score - classicPrice;
    classicPrice = Math.round(classicPrice * 1.5);
    classicNumber++;
    classicPriceText.textContent = classicPrice;
    classicTextContent.textContent = classicNumber;
    attaque.textContent = score;
  }

  if (classicNumber >= 10) {
    const frenzy = document.getElementById("frenzy");
    frenzy.classList.remove("hide");
  }
});

// ------------------ Achat frenzy ------------------
frenzy.addEventListener("click", function () {
  if (score >= frenzyPrice) {
    score = score - frenzyPrice;
    frenzyPrice = Math.round(frenzyPrice * 1.6);
    frenzyNumber++;
    frenzyPriceText.textContent = frenzyPrice;
    frenzyTextContent.textContent = frenzyNumber;
    attaque.textContent = score;
  }
  if (frenzyNumber >= 10) {
    const ghost = document.getElementById("ghost");
    ghost.classList.remove("hide");
  }
});

// ------------------  Achat ghost ------------------
ghost.addEventListener("click", function () {
  if (score >= ghostPrice) {
    score = score - ghostPrice;
    ghostPrice = Math.round(ghostPrice * 1.6);
    ghostNumber++;
    ghostPriceText.textContent = ghostPrice;
    ghostTextContent.textContent = ghostNumber;
    attaque.textContent = score;
  }
  if (ghostNumber >= 10) {
    const sheriff = document.getElementById("sheriff");
    sheriff.classList.remove("hide");
  }
});

// ------------------  Achat sheriff ------------------
sheriff.addEventListener("click", function () {
  if (score >= sheriffPrice) {
    score = score - sheriffPrice;
    sheriffPrice = Math.round(sheriffPrice * 1.6);
    sheriffNumber++;
    sheriffPriceText.textContent = sheriffPrice;
    sheriffTextContent.textContent = sheriffNumber;
    attaque.textContent = score;
  }
  if (sheriffNumber >= 10) {
    const spectre = document.getElementById("spectre");
    spectre.classList.remove("hide");
  }
});

// ------------------  Achat spectre ------------------
spectre.addEventListener("click", function () {
  if (score >= spectrePrice) {
    score = score - spectrePrice;
    spectrePrice = Math.round(spectrePrice * 1.6);
    spectreNumber++;
    spectrePriceText.textContent = spectrePrice;
    spectreTextContent.textContent = spectreNumber;
    attaque.textContent = score;
  }
  if (spectreNumber >= 10) {
    const guardian = document.getElementById("guardian");
    guardian.classList.remove("hide");
  }
});

// ------------------  Achat guardian ------------------
guardian.addEventListener("click", function () {
  if (score >= guardianPrice) {
    score = score - guardianPrice;
    guardianPrice = Math.round(guardianPrice * 1.6);
    guardianNumber++;
    guardianPriceText.textContent = guardianPrice;
    guardianTextContent.textContent = guardianNumber;
    attaque.textContent = score;
  }
  if (guardianNumber >= 10) {
    const phantom = document.getElementById("phantom");
    phantom.classList.remove("hide");
  }
});

// ------------------  Achat phantom ------------------
phantom.addEventListener("click", function () {
  if (score >= phantomPrice) {
    score = score - phantomPrice;
    phantomPrice = Math.round(phantomPrice * 1.6);
    phantomNumber++;
    phantomPriceText.textContent = phantomPrice;
    phantomTextContent.textContent = phantomNumber;
    attaque.textContent = score;
  }
  if (phantomNumber >= 10) {
    const vandal = document.getElementById("vandal");
    vandal.classList.remove("hide");
  }
});

// ------------------  Achat vandal ------------------
vandal.addEventListener("click", function () {
  if (score >= vandalPrice) {
    score = score - vandalPrice;
    vandalPrice = Math.round(vandalPrice * 1.6);
    vandalNumber++;
    vandalPriceText.textContent = vandalPrice;
    vandalTextContent.textContent = vandalNumber;
    attaque.textContent = score;
  }
  if (vandalNumber >= 10) {
    const odin = document.getElementById("odin");
    odin.classList.remove("hide");
  }
});

// ------------------  Achat odin ------------------
odin.addEventListener("click", function () {
  if (score >= odinPrice) {
    score = score - odinPrice;
    odinPrice = Math.round(odinPrice * 1.6);
    odinNumber++;
    odinPriceText.textContent = odinPrice;
    odinTextContent.textContent = odinNumber;
    attaque.textContent = score;
  }
  if (odinNumber >= 10) {
    const operator = document.getElementById("operator");
    operator.classList.remove("hide");
  }
});

// ------------------  Achat operator ------------------
operator.addEventListener("click", function () {
  if (score >= operatorPrice) {
    score = score - operatorPrice;
    operatorPrice = Math.round(operatorPrice * 1.6);
    operatorNumber++;
    operatorPriceText.textContent = operatorPrice;
    operatorTextContent.textContent = operatorNumber;
    attaque.textContent = score;
  }
  if (operatorNumber >= 10) {
    const knife = document.getElementById("knife");
    knife.classList.remove("hide");
  }
});

// ------------------  Achat knife ------------------
knife.addEventListener("click", function () {
  if (score >= knifePrice) {
    score = score - knifePrice;
    knifePrice = Math.round(knifePrice * 1.6);
    knifeNumber++;
    knifePriceText.textContent = knifePrice;
    knifeTextContent.textContent = knifeNumber;
    attaque.textContent = score;
  }
});

// ------------------ Update score par second ------------------
setInterval(function () {
  scorePerSecond =
    classicNumber * 10 +
    frenzyNumber * 20 +
    ghostNumber * 50 +
    sheriffNumber * 500 +
    spectreNumber * 900 +
    guardianNumber * 1400 +
    phantomNumber * 200 +
    vandalNumber * 2000 +
    odinNumber * 3000 +
    operatorNumber * 5000 +
    knifeNumber * 10000;

  score = score + scorePerSecond;
  // score = score + frenzyNumber * 20;
  // score = score + ghostNumber * 50;
  // score = score + sheriffNumber * 500;
  // score = score + spectreNumber * 900;
  // score = score + guardianNumber * 1400;
  // score = score + phantomNumber * 2000;
  // score = score + vandalNumber * 2000;
  // score = score + odinNumber * 3000;
  // score = score + operatorNumber * 5000;
  // score = score + knifeNumber * 10000;
  attaque.textContent = score;
  scoreSecText.textContent = scorePerSecond;
}, 1);
