import React from 'react';
import Hero from '../components/Hero';
import FeaturedRecipes from '../components/FeaturedRecipes';
import FeaturedChefs from '../components/FeaturedChefs';
import Newsletter from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <main>
      <Hero
        title="Discover Delicious Recipes"
        subtitle="From quick weeknight dinners to gourmet weekend feasts, find the perfect recipe for any occasion."
        imageUrl="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg"
        ctaText="Explore Recipes"
        ctaLink="/recipes"
      />
      
      <FeaturedRecipes />
      
      <div className="bg-orange-500 py-20 px-4 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            "Cooking is like love. It should be entered into with abandon or not at all."
          </h2>
          <p className="text-xl italic">— Harriet Van Horne</p>
        </div>
      </div>
      
      <FeaturedChefs />
      <Newsletter />
    </main>
  );
};

export default Home;