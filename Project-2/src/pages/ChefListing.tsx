import React from 'react';
import ChefCard from '../components/ChefCard';
import { chefs } from '../data/chefs';

const ChefListing: React.FC = () => {
  return (
    <div className="pt-20 bg-gray-50">
      <div className="bg-orange-500 py-16 px-4 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Chefs</h1>
        <p className="max-w-2xl mx-auto text-lg">
          The culinary experts behind our delicious recipes, bringing you flavors from around the world.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {chefs.map(chef => (
            <ChefCard key={chef.id} chef={chef} />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Join Our Culinary Team</h2>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Are you a passionate chef looking to share your culinary expertise with our community?
            We're always looking for talented individuals to join our team of culinary experts.
          </p>
          <div className="flex justify-center">
            <a 
              href="#" 
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors"
            >
              Apply Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefListing;