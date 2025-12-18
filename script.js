/* Ordbok:
const er en konstant variabel som ikke kan bytte verdi
document refererer til HTML dokumentet
.querySelector("#") henter et element med en spesifik id med # symbolet i string
.getElementById("") henter et spesifikt element med id
.addEventListener("click", function () {}) setter opp en hendelse som lytter etter et museklikk og kjører en anonym funksjon
.style manipulererer CSS med inline styling som for eksempel da display = flex
.classList.toggle("") ser gjennom en liste av de registrerte klassenavnene i koden og skrur av/på navnet gitt i string
*/

// Sjekker komunikasjon mellom index.html og script.js filene
console.log("Hello World");

// 1. Henter hamburger ikonet fra HTML
const hamburgerToggle = document.querySelector("#hamburgerToggle");
// Alternativ metode:           .getElementById("hamburgerToggle");

// Logger ut at vi henter riktig HTML element før vi går videre
console.log(hamburgerToggle);

// 2. Legger til en hendelse aktivtert med et museklikk
hamburgerToggle.addEventListener("click", function () {
  console.log("Is the button clicked?");

  // 3. Henter ul-elementet fra HTML
  const navList = document.querySelector("#navList");
  console.log(navList);

  // .style gir inline CSS
  // navList.style.display = "flex";

  // 4. Bytter vi aktivt klassenavn
  navList.classList.toggle("hamburgerList");
});

//
//

// 1.
const dropDownOne = document.querySelector("#dropDownOne");
console.log(dropDownOne);

// 2.
dropDownOne.addEventListener("click", function () {
  console.log("Clicked?");

  // 3.
  const showTextOne = document.querySelector("#showTextOne");

  // 4.
  showTextOne.classList.toggle("visible");
});

// 1.
const dropDownTwo = document.querySelector("#dropDownTwo");
console.log(dropDownOne);

// 2.
dropDownTwo.addEventListener("click", function () {
  console.log("Clicked?");

  // 3.
  const showTextTwo = document.querySelector("#showTextTwo");

  // 4.
  showTextTwo.classList.toggle("visible");
});