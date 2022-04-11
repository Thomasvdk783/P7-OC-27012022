// Cette page ne sert que pour Initialiser la page.
// Elle est chargé dès le début.

import { fetchDataRecipe } from './fetchDataRecipe.js'
import { showRecipes } from './showRecipes.js'
import { btn } from '../javascriptV2/BTN/btn.js';
// import { btn } from '../javascriptV2/BTN2/btn2.js';
 
export const initData = async () => {
    const response = await fetchDataRecipe();
    showRecipes(response.recipes)
    
    btn(response.recipes)
}