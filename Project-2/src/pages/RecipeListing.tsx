import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import CategoryFilter from '../components/CategoryFilter';
import { recipes } from '../data/recipes';
import { Recipe } from '../types';

const RecipeListing: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [displayedRecipes, setDisplayedRecipes] = useState<Recipe[]>(recipes);
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilters, setDietaryFilters] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false
  });

  useEffect(() => {
    let filtered = [...recipes];

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(recipe => recipe.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(recipe => 
        recipe.title.toLowerCase().includes(query) || 
        recipe.description.toLowerCase().includes(query)
      );
    }

    // Filter by dietary preferences
    if (dietaryFilters.vegetarian) {
      filtered = filtered.filter(recipe => recipe.dietaryInfo.vegetarian);
    }
    if (dietaryFilters.vegan) {
      filtered = filtered.filter(recipe => recipe.dietaryInfo.vegan);
    }
    if (dietaryFilters.glutenFree) {
      filtered = filtered.filter(recipe => recipe.dietaryInfo.glutenFree);
    }

    setDisplayedRecipes(filtered);
  }, [activeCategory, searchQuery, dietaryFilters]);

  const handleDietaryFilterChange = (filter: keyof typeof dietaryFilters) => {
    setDietaryFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  return (
    <div className="pt-20 bg-gray-50">
      <div className="bg-orange-500 py-16 px-4 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Recipes</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Browse our collection of delicious recipes for every occasion, taste, and dietary preference.
        </p>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search for recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-sm"
          />
        </div>

        {/* Category Filters */}
        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Dietary Preference Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => handleDietaryFilterChange('vegetarian')}
            className={`px-4 py-2 rounded-full text-sm border transition-all ${
              dietaryFilters.vegetarian
                ? 'bg-green-500 text-white border-green-500'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Vegetarian
          </button>
          <button
            onClick={() => handleDietaryFilterChange('vegan')}
            className={`px-4 py-2 rounded-full text-sm border transition-all ${
              dietaryFilters.vegan
                ? 'bg-green-500 text-white border-green-500'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Vegan
          </button>
          <button
            onClick={() => handleDietaryFilterChange('glutenFree')}
            className={`px-4 py-2 rounded-full text-sm border transition-all ${
              dietaryFilters.glutenFree
                ? 'bg-amber-500 text-white border-amber-500'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Gluten-Free
          </button>
        </div>

        {/* Recipe Grid */}
        {displayedRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No recipes found</h3>
            <p className="text-gray-500">
              Try adjusting your filters or search query to find recipes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeListing;