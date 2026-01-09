import { useState } from "react";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import "./App.css";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = () => {
    setSelectedRecipe(null);
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="App">
      <div className="app-header">
        <h1>🍽️ FoodGo</h1>
        <p>Discover and share amazing recipes</p>
      </div>
      <div className="app-content">
        <RecipeForm selectedRecipe={selectedRecipe} refresh={refresh} />
        <RecipeList key={refreshKey} onEdit={setSelectedRecipe} />
      </div>
    </div>
  );
}

export default App;
