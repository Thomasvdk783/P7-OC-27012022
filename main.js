"use strict";
/////////////////////////////////////////

// fetch initialization //
async function dataRecipes() {
  const responseJSON = await fetch("../../Data/ApiRecipes.json");
  const responseJS = await responseJSON.json();
  const recipes = responseJS.recipes;

  // Show Recipes
  recipes.forEach((item) => {
    const arrIngredients = item.ingredients;
    let showIngredients;
    arrIngredients.forEach(function (ing) {
      const ingredient = ing.ingredient;
      const quantity = ing.quantity;
      const unit = ing.unit;
      showIngredients += `<li>${ingredient} : ${quantity} ${unit}</li>`;
    });

    const containerRecipes = document.getElementById("list-recipes");
    const recipeCard = `<section class="card-recipe">
            <figure>
              <img src="medias/food.jpg" alt="" />
            </figure>
            <article class="bottom-part-card-recipe">
              <header class="card-header">
                  <h2>${item.name}</h2>
                  <p class="p-time">
                      <img src="./medias/time.svg" alt="time of recipe">
                      ${item.time}
                  </p>
              </header>
              <article class="ingredients-explication">
              <ul class="show-ingredient">${showIngredients}</ul>
                  <p>
                      ${item.description}
                  </p>
              </article>
            </article>
          </section>`;

    containerRecipes.innerHTML += recipeCard;
  });
}
dataRecipes();










////////////////////////////////////////////////////////////////
/////////////////////////
//// BTN appareil /////
// import dataRecipes from "./dataApi.js";

// export default function myFunctionAppareils() {
//   const btnAfficheIngredients = document.querySelector(".dropbtn2");
//   const dropContent = document.querySelector(".dropdown-content-appareil");
//   const dropDownIngredient = document.querySelector(".dropdown-appareil");

//   btnAfficheIngredients.addEventListener("click", function () {
//     dropContent.style.display = "block";
//     // dropDownIngredient.classList.toggle("dropdown-ingredients-width");
//   });
//   dataRecipes();
// }
// myFunctionAppareils();





/////////////////////////////////////////////

//// BTN appareil /////
// import dataRecipes from "./dataApi.js";

// export default function myFunctionAppareils() {
//   const btnAfficheIngredients = document.querySelector(".dropbtn2");
//   const dropContent = document.querySelector(".dropdown-content-appareil");
//   const dropDownIngredient = document.querySelector(".dropdown-appareil");

//   btnAfficheIngredients.addEventListener("click", function () {
//     dropContent.style.display = "block";
//     // dropDownIngredient.classList.toggle("dropdown-ingredients-width");
//   });
//   dataRecipes();
// }
// myFunctionAppareils();


/////////////////////////////////////////////////////
//// BTN ustensiles /////

// import dataRecipes from "./dataApi.js";

// export default function myFunctionUstensiles() {
//   const btnAfficheIngredients = document.querySelector(".dropbtn3");
//   const dropContent = document.querySelector(".dropdown-content-ustensiles");
//   const dropDownIngredient = document.querySelector(".dropdown-ustensiles");

//   btnAfficheIngredients.addEventListener("click", function () {
//     dropContent.style.display = "block";
//     // dropDownIngredient.classList.toggle("dropdown-ingredients-width");
//   });
//   dataRecipes();
// }
// myFunctionUstensiles();


