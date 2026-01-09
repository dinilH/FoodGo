import { useEffect, useState } from "react";
import { getRecipes, deleteRecipe } from "../services/recipeService";
import RecipeItem from "./RecipeItem";
import "./RecipeList.css";

function RecipeList({ onEdit }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const response = await getRecipes();
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        await deleteRecipe(id);
        fetchRecipes();
      } catch (error) {
        console.error("Error deleting recipe:", error);
        alert("Failed to delete recipe");
      }
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="recipe-list">
        <div className="loading">Loading recipes...</div>
      </div>
    );
  }

  return (
    <div className="recipe-list">
      <div className="recipe-list-header">
        <h2>All Recipes</h2>
        <span className="recipe-count">{recipes.length} recipe{recipes.length !== 1 ? 's' : ''}</span>
      </div>
      
      {recipes.length === 0 ? (
        <div className="empty-state">
          <p>No recipes yet! Create your first recipe to get started. 👨‍🍳</p>
        </div>
      ) : (
        recipes.map((recipe) => (
          <RecipeItem
            key={recipe._id}
            recipe={recipe}
            onDelete={handleDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
}

export default RecipeList;
