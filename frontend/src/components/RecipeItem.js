import "./RecipeItem.css";

function RecipeItem({ recipe, onDelete, onEdit }) {
  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h3>{recipe.title}</h3>
        {recipe.cookingTime > 0 && (
          <span className="cooking-time">
            ⏱️ {recipe.cookingTime} min
          </span>
        )}
      </div>
      
      {recipe.description && (
        <p className="recipe-description">{recipe.description}</p>
      )}

      <div className="recipe-section">
        <h4>📋 Ingredients</h4>
        <ul className="ingredients-list">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="recipe-section">
        <h4>👨‍🍳 Instructions</h4>
        <ol className="instructions-list">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="recipe-actions">
        <button className="btn-edit" onClick={() => onEdit(recipe)}>
          ✏️ Edit
        </button>
        <button className="btn-delete" onClick={() => onDelete(recipe._id)}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default RecipeItem;
