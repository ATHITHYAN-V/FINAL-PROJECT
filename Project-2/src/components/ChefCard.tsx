import React from 'react';
import { Chef } from '../types';
import { Link } from './Link';

interface ChefCardProps {
  chef: Chef;
}

const ChefCard: React.FC<ChefCardProps> = ({ chef }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-64 overflow-hidden">
        <img
          src={chef.imageUrl}
          alt={chef.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-1">{chef.name}</h3>
        <p className="text-orange-500 font-medium text-sm mb-3">{chef.speciality}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{chef.bio}</p>
        <Link
          to={`/chefs/${chef.id}`}
          className="inline-block text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;