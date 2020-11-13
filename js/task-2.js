const ingredientsRef = document.querySelector("#ingredients");

const arrIngredients = ingredients.map(elem => {
  const ingredient = document.createElement("li");
  ingredient.textContent = elem;

  return ingredient;
});

ingredientsRef.append(...arrIngredients) 

const ingredientsRef = document.querySelector("#ingredients");
ingredients.forEach(element => {
   const ingredient = document.createElement("li");
   ingredient.textContent = element;
   ingredientsRef.appendChild(ingredient);
});