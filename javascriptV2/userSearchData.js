// Cette page va être appeler quand l'utilisateur va écrire dans la barre de recherche.
import { fetchDataRecipe } from "./fetchDataRecipe.js";
import { showRecipes } from "./showRecipes.js";
import { fullBtn } from "./BTN/fullBtn.js"

export const userSearchData = async () => {
  const searchBar = document.getElementById("searchbar");

  // Tu récupères le Json
  const data = await fetchDataRecipe();
  const result = data.recipes;
  let showGoodCard = [];
  const resultSearch = searchBar.value.toLowerCase();

  // Tu vérifies le nombre de caractère que l'utilisateur à entrer
  if (resultSearch.length >= 3) {
    result.forEach((item) => {
      if (
        item.name.toLowerCase().includes(resultSearch) === true ||
        item.description.toLowerCase().includes(resultSearch) === true ||
        item.appliance.toLowerCase().includes(resultSearch) === true
      ) {
        showGoodCard.push(item); // 5
      } else {
        item.ustensils.find((result) => {
          if (result.toLowerCase().includes(resultSearch) === true) {
            showGoodCard.push(item); // 5
          }
        });
        const ingredients = item.ingredients;
        ingredients.forEach((ing) => {
          if (ing.ingredient.toLowerCase().includes(resultSearch) === true) {
            showGoodCard.push(item); //
          }
        });
      }
    });
  } else {
    // Si l'utilisateur à écrit moins de 3 caractére, tu fais rien
    showGoodCard = result;
  }
  console.log('showGoodCard', showGoodCard)
  showRecipes(showGoodCard);
  fullBtn(showGoodCard)
};
