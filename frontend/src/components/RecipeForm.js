import { useState, useEffect } from "react";
import { createRecipe, updateRecipe } from "../services/recipeService";
import "./RecipeForm.css";

function RecipeForm({ selectedRecipe, refresh }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [instructions, setInstructions] = useState([""]);
  const [cookingTime, setCookingTime] = useState("");

  useEffect(() => {
    if (selectedRecipe) {
      setTitle(selectedRecipe.title || "");
      setDescription(selectedRecipe.description || "");
      setIngredients(selectedRecipe.ingredients || [""]);
      setInstructions(selectedRecipe.instructions || [""]);
      setCookingTime(selectedRecipe.cookingTime || "");
    }
  }, [selectedRecipe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filteredIngredients = ingredients.filter(item => item.trim() !== "");
    const filteredInstructions = instructions.filter(step => step.trim() !== "");

    if (!title || filteredIngredients.length === 0 || filteredInstructions.length === 0) {
      alert("Please fill in title, at least one ingredient, and one instruction");
      return;
    }

    const recipeData = {
      title,
      description,
      ingredients: filteredIngredients,
      instructions: filteredInstructions,
      cookingTime: cookingTime || 0,
    };

    try {
      if (selectedRecipe) {
        await updateRecipe(selectedRecipe._id, recipeData);
      } else {
        await createRecipe(recipeData);
      }
      
      // Reset form
      setTitle("");
      setDescription("");
      setIngredients([""]);
      setInstructions([""]);
      setCookingTime("");
      
      refresh();
    } catch (error) {
      alert("Error saving recipe. Please try again.");
      console.error(error);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setIngredients([""]);
    setInstructions([""]);
    setCookingTime("");
    refresh();
  };

  return (
    <div className="recipe-form-card">
      <h2>{selectedRecipe ? "Edit Recipe" : "Add New Recipe"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Recipe Title *</label>
          <input 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="e.g., Chocolate Chip Cookies"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Brief description of your recipe..."
            rows="3"
          />
        </div>

        <div className="form-group">
          <label>Ingredients *</label>
          {ingredients.map((item, index) => (
            <div key={index} className="input-with-button">
              <input
                value={item}
                onChange={(e) => {
                  const updated = [...ingredients];
                  updated[index] = e.target.value;
                  setIngredients(updated);
                }}
                placeholder={`Ingredient ${index + 1}`}
              />
              {ingredients.length > 1 && (
                <button 
                  type="button" 
                  className="btn-remove"
                  onClick={() => {
                    const updated = ingredients.filter((_, i) => i !== index);
                    setIngredients(updated);
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button 
            type="button" 
            className="btn-add"
            onClick={() => setIngredients([...ingredients, ""])}
          >
            + Add Ingredient
          </button>
        </div>

        <div className="form-group">
          <label>Instructions *</label>
          {instructions.map((step, index) => (
            <div key={index} className="input-with-button">
              <textarea
                value={step}
                onChange={(e) => {
                  const updated = [...instructions];
                  updated[index] = e.target.value;
                  setInstructions(updated);
                }}
                placeholder={`Step ${index + 1}`}
                rows="2"
              />
              {instructions.length > 1 && (
                <button 
                  type="button" 
                  className="btn-remove"
                  onClick={() => {
                    const updated = instructions.filter((_, i) => i !== index);
                    setInstructions(updated);
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button 
            type="button" 
            className="btn-add"
            onClick={() => setInstructions([...instructions, ""])}
          >
            + Add Instruction
          </button>
        </div>

        <div className="form-group">
          <label>Cooking Time (minutes)</label>
          <input
            type="number"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            placeholder="e.g., 30"
            min="0"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            {selectedRecipe ? "Update Recipe" : "Create Recipe"}
          </button>
          {selectedRecipe && (
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default RecipeForm;
