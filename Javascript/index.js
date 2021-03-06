'use strict'

////////////////////////////////////////////////////////////////

// // below Import other js components //
// import { dataRecipes } from './fetching.js'
// import { searchBarRecipes } from './searchBar.js'
// import { dropdownIngredients } from './BTN/btnIngredients.js'
// import { dropdownAppareils } from './BTN/btnAppareils.js'
// import { dropDownUstensiles } from './BTN/btnUstensiles.js'


// /// Main content for JS ///
// searchBarRecipes()
// dropdownIngredients()
// dropdownAppareils()
// dropDownUstensiles()
// dataRecipes()

import {showRecipes} from '../javascriptV2/showRecipes.js';
import {userSearchData} from '../javascriptV2/userSearchData.js';

showRecipes();

const searchBar = document.getElementById("searchbar");
searchBar.addEventListener("keyup", userSearchData(searchBar.value));