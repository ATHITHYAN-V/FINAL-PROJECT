import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Avocado Toast with Poached Eggs',
    description: 'Start your day with this nutritious and delicious breakfast classic. Creamy avocado spread on toasted sourdough, topped with perfectly poached eggs.',
    imageUrl: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg',
    category: 'breakfast',
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    ingredients: [
      '2 slices sourdough bread',
      '1 ripe avocado',
      '2 eggs',
      '1 tablespoon white vinegar',
      'Salt and pepper to taste',
      'Red pepper flakes (optional)',
      'Fresh herbs for garnish'
    ],
    instructions: [
      'Toast the sourdough bread until golden and crispy.',
      'While bread is toasting, bring a pot of water to a gentle simmer and add vinegar.',
      'Crack each egg into a small bowl, then gently slide into the simmering water.',
      'Poach eggs for 3-4 minutes until whites are set but yolks are still runny.',
      'Mash the avocado in a bowl with salt and pepper.',
      'Spread the mashed avocado on the toasted bread.',
      'Top each slice with a poached egg, season with salt, pepper, and red pepper flakes if desired.',
      'Garnish with fresh herbs and serve immediately.'
    ],
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: false
    },
    featured: true
  },
  {
    id: '2',
    title: 'Mediterranean Quinoa Salad',
    description: 'A refreshing and protein-packed salad perfect for lunch or as a side dish. Bursting with Mediterranean flavors and nutrients.',
    imageUrl: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg',
    category: 'lunch',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    ingredients: [
      '1 cup quinoa, rinsed',
      '2 cups vegetable broth',
      '1 cucumber, diced',
      '1 cup cherry tomatoes, halved',
      '1/2 red onion, finely diced',
      '1/2 cup kalamata olives, pitted and halved',
      '1/2 cup feta cheese, crumbled',
      '1/4 cup fresh parsley, chopped',
      '1/4 cup fresh mint, chopped',
      '3 tablespoons extra virgin olive oil',
      '2 tablespoons lemon juice',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Cook quinoa in vegetable broth according to package instructions. Allow to cool.',
      'In a large bowl, combine cooled quinoa, cucumber, tomatoes, red onion, olives, feta, parsley, and mint.',
      'In a small bowl, whisk together olive oil, lemon juice, salt, and pepper.',
      'Pour dressing over salad and toss to combine.',
      'Chill for at least 30 minutes before serving to allow flavors to meld.'
    ],
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: true
    }
  },
  {
    id: '3',
    title: 'Herb-Crusted Rack of Lamb',
    description: 'An elegant main course perfect for special occasions. Tender lamb coated with a fragrant herb crust.',
    imageUrl: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg',
    category: 'dinner',
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    ingredients: [
      '2 racks of lamb (8 ribs each), frenched',
      '2 tablespoons Dijon mustard',
      '3 cloves garlic, minced',
      '1/4 cup fresh rosemary, finely chopped',
      '1/4 cup fresh thyme, finely chopped',
      '1/4 cup fresh parsley, finely chopped',
      '1 cup breadcrumbs',
      '3 tablespoons olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'Season lamb racks with salt and pepper.',
      'Heat a large skillet over high heat. Sear lamb racks until browned on all sides, about 2-3 minutes per side.',
      'In a bowl, mix together Dijon mustard and minced garlic.',
      'In another bowl, combine herbs, breadcrumbs, and olive oil.',
      'Brush seared lamb with mustard mixture, then press herb mixture onto the lamb.',
      'Place lamb on a roasting rack in a baking dish, with bones facing up.',
      'Roast for 20-25 minutes for medium-rare (internal temperature of 125-130°F).',
      'Allow to rest for 10 minutes before carving between the bones to serve.'
    ],
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: true
    }
  },
  {
    id: '4',
    title: 'Tiramisu',
    description: 'A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
    imageUrl: 'https://images.pexels.com/photos/6341409/pexels-photo-6341409.jpeg',
    category: 'dessert',
    prepTime: 30,
    cookTime: 0,
    servings: 8,
    ingredients: [
      '6 egg yolks',
      '3/4 cup granulated sugar',
      '1 cup mascarpone cheese, room temperature',
      '1 1/2 cups heavy cream',
      '1 teaspoon vanilla extract',
      '1 1/2 cups strong coffee, cooled',
      '2 tablespoons rum (optional)',
      '24 ladyfinger cookies',
      '2 tablespoons unsweetened cocoa powder'
    ],
    instructions: [
      'In a bowl, beat egg yolks and sugar until pale and thick.',
      'Add mascarpone and mix until smooth.',
      'In a separate bowl, whip heavy cream and vanilla until stiff peaks form.',
      'Gently fold whipped cream into mascarpone mixture.',
      'Combine coffee and rum in a shallow dish.',
      'Quickly dip ladyfingers in coffee mixture (don\'t soak them) and arrange in a single layer in a 9x13 inch dish.',
      'Spread half of the mascarpone mixture over the ladyfingers.',
      'Repeat with another layer of soaked ladyfingers and remaining mascarpone mixture.',
      'Dust the top with cocoa powder.',
      'Cover and refrigerate for at least 6 hours or overnight before serving.'
    ],
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: false
    },
    featured: true
  },
  {
    id: '5',
    title: 'Roasted Vegetable Buddha Bowl',
    description: 'A nourishing plant-based bowl packed with colorful roasted vegetables, grains, and protein.',
    imageUrl: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
    category: 'dinner',
    prepTime: 15,
    cookTime: 30,
    servings: 2,
    ingredients: [
      '1 sweet potato, cubed',
      '1 cup brussels sprouts, halved',
      '1 red bell pepper, sliced',
      '1 cup broccoli florets',
      '1 tablespoon olive oil',
      '1 teaspoon cumin',
      '1 teaspoon paprika',
      'Salt and pepper to taste',
      '1 cup cooked quinoa',
      '1 cup chickpeas, drained and rinsed',
      '1 avocado, sliced',
      '2 tablespoons tahini',
      '1 tablespoon lemon juice',
      '1 tablespoon water',
      'Fresh herbs for garnish'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'Toss vegetables with olive oil, cumin, paprika, salt, and pepper.',
      'Spread on a baking sheet and roast for 25-30 minutes, stirring halfway.',
      'While vegetables are roasting, whisk together tahini, lemon juice, and water to make the dressing.',
      'In each bowl, arrange quinoa, roasted vegetables, chickpeas, and avocado.',
      'Drizzle with tahini dressing and garnish with fresh herbs.'
    ],
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true
    }
  },
  {
    id: '6',
    title: 'Blueberry Pancakes',
    description: 'Fluffy homemade pancakes studded with fresh blueberries, perfect for a weekend breakfast.',
    imageUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
    category: 'breakfast',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    ingredients: [
      '2 cups all-purpose flour',
      '2 tablespoons sugar',
      '1 tablespoon baking powder',
      '1/2 teaspoon salt',
      '2 eggs',
      '1 3/4 cups milk',
      '1/4 cup melted butter',
      '1 teaspoon vanilla extract',
      '1 1/2 cups fresh blueberries',
      'Maple syrup for serving'
    ],
    instructions: [
      'In a large bowl, whisk together flour, sugar, baking powder, and salt.',
      'In another bowl, beat eggs, then add milk, melted butter, and vanilla.',
      'Pour wet ingredients into dry ingredients and stir just until combined (batter will be lumpy).',
      'Gently fold in blueberries.',
      'Heat a lightly oiled griddle or frying pan over medium-high heat.',
      'Pour 1/4 cup batter onto the griddle for each pancake.',
      'Cook until bubbles form and edges look dry, then flip and cook until golden brown.',
      'Serve warm with maple syrup.'
    ],
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: false
    }
  }
];