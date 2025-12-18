console.log("Hello World");

// 1. Henter hamburger ikonet fra HTML
const hamburgerToggle = document.getElementById("hamburgerToggle");
//                              .querySelector("#hamburgerToggle");
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

const dropDownOne = document.querySelector("#dropDownOne");
console.log(dropDownOne);

dropDownOne.addEventListener("click", function () {
  console.log("Clicked?");

  const showTextOne = document.querySelector("#showTextOne");

  showTextOne.classList.toggle("visible");
});
