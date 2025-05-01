import React from 'react';
import { chefs } from '../data/chefs';
import ChefCard from './ChefCard';
import { Link } from './Link';

const FeaturedChefs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Meet Our Chefs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know the culinary experts behind our amazing recipes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map(chef => (
            <ChefCard key={chef.id} chef={chef} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/chefs"
            className="inline-block px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full transition-colors duration-300"
          >
            View All Chefs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedChefs;