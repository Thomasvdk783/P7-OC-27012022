"use strict";

////////////////////////////////////////////////////////////////

export function dropdownIngredients() {
  const btnIngredients = document.getElementById("dropbtn1");
  const dropContentIngredients = document.querySelector(".dropdown-content");
  const iconIngredients = document.querySelector(".fa-chevron-down");
  const inputIngredients = document.getElementById("myInputIngredients")

  // au clique sur le bouton
  // une liste d'ingrédients apparaît
  btnIngredients.addEventListener("click", function () {
    dropContentIngredients.classList.toggle(
      "show-dropdown-content-ingredients"
    );
    iconIngredients.classList.toggle("fa-chevron-up")
    btnIngredients.classList.toggle("btn-width")
    inputIngredients.classList.toggle("input-width")
  });
}
