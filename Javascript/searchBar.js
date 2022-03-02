'use strict';


// Search Bar //

export function searchBarRecipes() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let cardsRecipes = document.querySelectorAll(".card-recipe");
  
    for (let i = 0; i < cardsRecipes.length; i++) {
      if (!cardsRecipes[i].innerHTML.toLowerCase().includes(input)) {
        cardsRecipes[i].style.display = "none";
      } else {
        cardsRecipes[i].style.display = "list-item";
      }
    }
    return cardsRecipes;
  }
  const searchBar = document.getElementById("searchbar");
  searchBar.addEventListener("keyup", searchBarRecipes);