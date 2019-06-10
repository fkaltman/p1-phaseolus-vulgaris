const DOMAIN = 'https://api.edamam.com/search';
const API_KEY = 'd3c898c7d464fa12837f2d46ad960a11';
const APP_ID = 'bea133e4';

const BASE_URL = `${DOMAIN}?q=beans&app_id=${APP_ID}&app_key=${API_KEY}`;
// add &vegetarian to the above line after everthing is working
let button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('.recipe-list');

// const makeACard = (recipe) => {
//   // console.log(recipe)
//   const recipeCard = document.createElement('div');
//   recipeCard.innerHTML = `
//    <button>Save to favorites.</button>
//    `;

//   list.appendChild(recipeCard)
// }



// < !--Edamam's example using "curl":
// curl "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free" -->


//Current results are not vegetarian with either of the searches below
// https://api.edamam.com/search?q=blackbeans&app_id=bea133e4&app_key=d3c898c7d464fa12837f2d46ad960a11&healthLabels=vegetarian

// https://api.edamam.com/search?q=blackbeans&app_id=bea133e4&app_key=d3c898c7d464fa12837f2d46ad960a11&vegetarian


const searchRecipe = async () => {
  const searchRecipe = `${BASE_URL}`;
  const response = await axios.get(`${DOMAIN}?q=beans&app_id=${APP_ID}&app_key=${API_KEY}`);
  console.log(response);
  // render(response.data.Search);

}

button.addEventListener('click', () => {
  // console.log(input.value);
  searchRecipe();
});

// this event listener has an input but I an "I'm feeling lucky" / roulette style recipe picker.  (With save option, if possible)






//Rather than linking to another API for black bean cookbooks, I would prefer to find a way to save the favorites from the black bean rando search.  Book search too, time permitting.