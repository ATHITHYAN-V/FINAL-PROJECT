import React, { useState, useEffect } from 'react';
import { Clock, Users, ChefHat, Printer } from 'lucide-react';
import { recipes } from '../data/recipes';
import { Recipe } from '../types';

interface RecipeDetailProps {
  id: string;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ id }) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [servings, setServings] = useState(0);

  useEffect(() => {
    const foundRecipe = recipes.find(r => r.id === id);
    if (foundRecipe) {
      setRecipe(foundRecipe);
      setServings(foundRecipe.servings);
    }
  }, [id]);

  if (!recipe) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Recipe not found</p>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const adjustServings = (newServings: number) => {
    setServings(newServings);
  };

  // Calculate adjusted ingredient amounts
  const getAdjustedIngredient = (ingredient: string) => {
    if (recipe.servings === servings) return ingredient;

    // Try to find a number at the start of the ingredient
    const match = ingredient.match(/^([\d./]+)(.+)$/);
    if (match) {
      const amount = parseFloat(eval(match[1]));
      const adjustedAmount = (amount * servings) / recipe.servings;
      return `${adjustedAmount % 1 === 0 ? adjustedAmount : adjustedAmount.toFixed(1)}${match[2]}`;
    }
    return ingredient;
  };

  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{recipe.title}</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">{recipe.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Recipe Meta Info */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex flex-wrap gap-6 justify-between">
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2 text-orange-500" />
            <div>
              <p className="text-sm text-gray-500">Prep Time</p>
              <p className="font-medium">{recipe.prepTime} min</p>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2 text-orange-500" />
            <div>
              <p className="text-sm text-gray-500">Cook Time</p>
              <p className="font-medium">{recipe.cookTime} min</p>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2 text-orange-500" />
            <div>
              <p className="text-sm text-gray-500">Total Time</p>
              <p className="font-medium">{recipe.prepTime + recipe.cookTime} min</p>
            </div>
          </div>
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-2 text-orange-500" />
            <div>
              <p className="text-sm text-gray-500">Servings</p>
              <div className="flex items-center">
                <button 
                  onClick={() => adjustServings(Math.max(1, servings - 1))}
                  className="text-gray-500 hover:text-orange-500 px-1"
                >
                  -
                </button>
                <span className="font-medium mx-1">{servings}</span>
                <button 
                  onClick={() => adjustServings(servings + 1)}
                  className="text-gray-500 hover:text-orange-500 px-1"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <ChefHat className="w-5 h-5 mr-2 text-orange-500" />
            <div>
              <p className="text-sm text-gray-500">Difficulty</p>
              <p className="font-medium">Medium</p>
            </div>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          >
            <Printer className="w-4 h-4 mr-2" />
            <span>Print Recipe</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b">Ingredients</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-baseline">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mr-3 mt-1.5 flex-shrink-0"></div>
                    <span>{getAdjustedIngredient(ingredient)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dietary Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b">Dietary Information</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full mr-3 ${recipe.dietaryInfo.vegetarian ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span>Vegetarian</span>
                </div>
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full mr-3 ${recipe.dietaryInfo.vegan ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span>Vegan</span>
                </div>
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full mr-3 ${recipe.dietaryInfo.glutenFree ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span>Gluten-Free</span>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-600 rounded-full font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="pt-1">
                      <p>{instruction}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;