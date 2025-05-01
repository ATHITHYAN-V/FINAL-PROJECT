import React from 'react';
import { Clock, Users } from 'lucide-react';
import { Recipe } from '../types';
import { Link } from './Link';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {recipe.featured && (
          <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 flex space-x-2 p-2">
          {recipe.dietaryInfo.vegetarian && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              Vegetarian
            </span>
          )}
          {recipe.dietaryInfo.vegan && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              Vegan
            </span>
          )}
          {recipe.dietaryInfo.glutenFree && (
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
              Gluten-Free
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            <span>{recipe.prepTime + recipe.cookTime} min</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Users className="w-4 h-4 mr-1" />
            <span>{recipe.servings}</span>
          </div>
        </div>
        <Link
          to={`/recipes/${recipe.id}`}
          className="mt-4 block w-full text-center bg-transparent hover:bg-orange-500 text-orange-500 hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded transition-colors duration-300"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;