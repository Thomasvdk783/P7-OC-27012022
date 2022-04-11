import { fetchDataRecipe } from "./fetchDataRecipe.js";
import { showRecipes } from "./showRecipes.js";

export const userSearchData = async () => {
    const searchBar = document.getElementById("searchbar");
    // Récupération de la Data
    const data = await fetchDataRecipe();
    const result = data.recipes; 
    const resultSearch = searchBar.value.toLowerCase();
    let showGoodCard = [];

    if (resultSearch.length >= 3) {
        for ( const item of result ) {
            // console.log(item);
            if (
                item.name.toLowerCase().includes(resultSearch) === true ||
                item.description.toLowerCase().includes(resultSearch) === true ||
                item.appliance.toLowerCase().includes(resultSearch) === true
            ){
                showGoodCard.push(item)
            }else {
                item.ustensils.find((result) => {
                    if (result.toLowerCase().includes(resultSearch) === true) {
                      showGoodCard.push(item); // 5
                    }
                  }); 
                  const ingredients = item.ingredients;
                  for (let i = 0; i < ingredients.length; i++) {
                    //   console.log(ingredients[i])
                    const nameIng = ingredients[i].ingredient; 
                    // console.log(nameIng)
                        if(nameIng.toLowerCase().includes(resultSearch) === true){
                            showGoodCard.push(item)
                        }
                  }
            }
        }
    }
    else{
        showGoodCard = result;
    }
    showRecipes(showGoodCard);
};