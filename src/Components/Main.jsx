import React from "react";

function Main() {

  const [ingredients, setIngredients] = React.useState([]);
  const listIngrediants = ingredients.map((E) => {
    return <li>{E}</li>;
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    
  }
  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <ul>{listIngrediants}</ul>
    </main>
  );
}

export default Main;
