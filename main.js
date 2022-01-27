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

    const arrUstensiles = item.ustensils;
    // console.log(arrUstensiles);
    const allUstensiles = ustensils.concat(arrUstensiles);
    console.log(allUstensiles);

    arrIngredients.forEach(function (ing) {
      const ingredient = ing.ingredient;
      const arrIngredients = [ing.ingredient];
      const allIngredientInArray = arrIngredients.concat();
      // console.log(allIngredientInArray);
      const quantity = ing.quantity;
      const unit = ing.unit;
      showIngredients += `<li>${ingredient} : ${quantity} ${unit}</li>`;


      /// BTN Ingredients ///
      const btnAfficheIngredients = document.querySelector(".dropbtn1");
      const dropContentIngredients = document.querySelector(".dropdown-content");
      const showIngredientList = `<ul class="ul-btn-ingredients"><li>${ingredient}</li></ul>`
      dropContentIngredients.innerHTML += showIngredientList;
      
      btnAfficheIngredients.addEventListener("click", function () {
        dropContentIngredients.style.display = "block";
        dropDownIngredient.classList.toggle("dropdown-ingredients-width");
      });



      /// BTN Ustensiles ///
      const btnAfficheUstensiles = document.querySelector(".dropbtn3");
      const dropContent3 = document.querySelector(".dropdown-content-ustensiles");
      const dropDownUstensiles = document.querySelector(".dropdown-ustensiles");
      // const showIngredientList = `<ul class="ul-btn-ingredients"><li>${ingredient}</li></ul>`
      // dropContentIngredients.innerHTML += showIngredientList;
    
      btnAfficheUstensiles.addEventListener("click", function () {
        dropContent3.style.display = "block";
        dropDownUstensiles.classList.toggle("dropdown-ingredients-width");
      });
    });

    /// Appareils ///


    /// BTN Appareil ///
    const btnAfficheAppareils = document.querySelector(".dropbtn2");
    const dropContent2 = document.querySelector(".dropdown-content-appareil");
    const dropDownAppareils = document.querySelector(".dropdown-appareil");
    // const showAppareilList = `<ul class="ul-btn-ingredients"><li>${appareils}</li></ul>`
    // dropContentIngredients.innerHTML += showAppareilList;
      
    btnAfficheAppareils.addEventListener("click", function () {
      dropContent2.style.display = "block";
      dropDownAppareils.classList.toggle("dropdown-ingredients-width");
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
              <ul class="show-ingredient">${showIngredients}
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