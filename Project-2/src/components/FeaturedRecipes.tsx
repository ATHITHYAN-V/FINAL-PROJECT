import React from 'react';
import { recipes } from '../data/recipes';
import RecipeCard from './RecipeCard';
import { Link } from './Link';

const FeaturedRecipes: React.FC = () => {
  const featuredRecipes = recipes.filter(recipe => recipe.featured);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Featured Recipes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and seasonal recipes, hand-picked by our chefs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
          {recipes.slice(0, 3 - featuredRecipes.length).map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/recipes"
            className="inline-block px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full transition-colors duration-300"
          >
            View All Recipes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;