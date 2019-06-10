const DOMAIN = 'https://api.edamam.com/search';
const API_KEY = 'd3c898c7d464fa12837f2d46ad960a11';
const APP_ID = 'bea133e4';

const BASE_URL = `${DOMAIN}?q=blackbeans&app_id=${APP_ID}&app_key=${API_KEY}`;
// add &vegetarian to the above line after everthing is working
let button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('.recipe-list');

// const makeACard = (recipe) => {
//   // console.log(recipe)
//   const recipeCard = document.createElement('div');
//   recipeCard.innerHTML = `
//     <img src = ${data.hits[0].recipe.image} />
//   //<button>Stuff</button>
//   `;

//   list.appendChild(recipeCard)
// }

//Current results are not vegetarian with either of the searches below:
//&healthLabels=vegetarian
//&vegetarian

const searchRecipe = async () => {
  const searchRecipe = `${BASE_URL} `;
  const response = await axios.get(`${BASE_URL} `);

  console.log(response);
  const makeACard = (recipe) => {
    // console.log(recipe)
    const recipeCard = document.createElement('div');
    recipeCard.innerHTML = `
      <img src = ${response.data.hits[0].recipe.image} />
    //<button>Stuff</button>
    `;

    list.appendChild(recipeCard)
  }
  makeACard(response.data.hits[0].recipe.image)
}

button.addEventListener('click', () => {
  // console.log(input.value);
  searchRecipe();
});

// this event listener has an input but I an "I'm feeling lucky" / roulette style recipe picker.  (With save option, if possible)






//Rather than linking to another API for black bean cookbooks, I would prefer to find a way to save the favorites from the black bean rando search.  Book search too, time permitting.