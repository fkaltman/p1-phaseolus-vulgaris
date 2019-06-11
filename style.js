const apiKey = 'd3c898c7d464fa12837f2d46ad960a11';
const appId = 'bea133e4';
const baseURL = "https://api.edamam.com/search?"
const search = `q=blackbeans&blackbean&excluded=pork&excluded=turkey&excluded=beef&excluded=chicken&excluded=sausage&app_id=${appId}&app_key=${apiKey}`
let button = document.querySelector('button');
const div = document.querySelector('div');
//const list = document.querySelector('.recipe-list');

button.addEventListener("click", async () => {
  const response = await axios.get(`${baseURL}${search} `)
  const recipes = response.data.hits
  const random = Math.floor(Math.random() * recipes.length)
  const randomRecipe = recipes[random].recipe
  div.innerHTML = `<a href=${randomRecipe.url}><p>${randomRecipe.label}</p></a><br><img src=${randomRecipe.image} class=foodPic>`


  // console.log(response);

});

  // this event listener has an input but I an "I'm feeling lucky" / roulette style recipe picker.  (With save option, if possible)

//Rather than linking to another API for black bean cookbooks, I would prefer to find a way to save the favorites from the black bean rando search.  Book search too, time permitting.