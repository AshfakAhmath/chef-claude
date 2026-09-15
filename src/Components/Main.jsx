import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";

function Main() {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const listIngrediants = ingredients.map((E) => {
    return <li>{E}</li>;
  });

  const [recipeShown, setRecipeShown] = React.useState(false);
  function handleRecipe() {
    setRecipeShown((prevRecipeShown) => !prevRecipeShown);
  }

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  }
  return (
    <main>
      <form action={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <IngredientsList
        handleRecipe={handleRecipe}
        listIngrediants={listIngrediants}
        ingredients={ingredients}
      />
      <ClaudeRecipe recipeShown={recipeShown} />
    </main>
  );
}

export default Main;
