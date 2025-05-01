export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'dessert';
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  dietaryInfo: {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
  };
  featured?: boolean;
}

export interface Chef {
  id: string;
  name: string;
  imageUrl: string;
  speciality: string;
  bio: string;
}