export const menuCategories = [
  'Appetizers',
  'Soup',
  'Salad',
  'Sandwich',
  'Wraps',
  'Beef Steak',
  'Chicken',
  'Chinese',
  'Burger',
  'Pizza',
  'Pasta',
  'Sea Food',
  "Coffee's",
  'Frappes',
  'Mocktails',
  'Shakes',
] as const;

export type MenuCategory = (typeof menuCategories)[number];

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
  image?: string;
  tag?: string;
};

export type CartLine = {
  item: MenuItem;
  quantity: number;
};

export const menuItems: MenuItem[] = [
  { id: 'app-bruschetta', category: 'Appetizers', name: 'Tropical Bruschetta', description: 'Toasted sourdough, tomato, basil, mango relish', price: 850, tag: "Chef's pick" },
  { id: 'app-prawns', category: 'Appetizers', name: 'Coconut Crispy Prawns', description: 'Crisp prawns, coconut crumb, pineapple chilli dip', price: 1450, image: '/images/hero-prawns.jpg' },
  { id: 'app-wings', category: 'Appetizers', name: 'Island Chicken Wings', description: 'Charred wings, house glaze, pickled cucumber', price: 1250 },
  { id: 'soup-tomato', category: 'Soup', name: 'Roasted Tomato Basil Soup', description: 'Slow-roasted tomato, basil oil, garlic croutons', price: 750 },
  { id: 'soup-thai', category: 'Soup', name: 'Thai Coconut Soup', description: 'Coconut broth, lemongrass, mushrooms, herbs', price: 950 },
  { id: 'salad-caesar', category: 'Salad', name: 'Classic Caesar Salad', description: 'Crisp romaine, parmesan, croutons, creamy dressing', price: 950 },
  { id: 'salad-mango', category: 'Salad', name: 'Mango Avocado Salad', description: 'Avocado, mango, greens, toasted seeds, lime dressing', price: 1150 },
  { id: 'sandwich-club', category: 'Sandwich', name: 'Cafe Hawaii Club', description: 'Grilled chicken, egg, lettuce, tomato, toasted bread', price: 1250 },
  { id: 'sandwich-steak', category: 'Sandwich', name: 'Philly Steak Melt', description: 'Sliced beef, caramelized onion, peppers, melted cheese', price: 1550 },
  { id: 'wrap-chicken', category: 'Wraps', name: 'Grilled Chicken Wrap', description: 'Herb chicken, greens, avocado, creamy lime sauce', price: 1250 },
  { id: 'wrap-prawn', category: 'Wraps', name: 'Prawn Mango Wrap', description: 'Crisp prawns, mango salsa, lettuce, chilli mayo', price: 1450 },
  { id: 'steak-tenderloin', category: 'Beef Steak', name: 'Hawaii Tenderloin', description: 'Grilled tenderloin, pepper jus, seasonal vegetables', price: 2950, tag: 'House favourite' },
  { id: 'steak-ribeye', category: 'Beef Steak', name: 'Island Ribeye', description: 'Prime ribeye, garlic butter, fries, garden salad', price: 3250 },
  { id: 'chicken-parm', category: 'Chicken', name: 'Chicken Parmesan', description: 'Crumbed chicken, tomato sugo, mozzarella, herbs', price: 1850 },
  { id: 'chicken-coconut', category: 'Chicken', name: 'Coconut Chicken Curry', description: 'Tender chicken, coconut curry, steamed jasmine rice', price: 1950 },
  { id: 'chinese-chowmein', category: 'Chinese', name: 'Hawaii Chow Mein', description: 'Wok-tossed noodles, vegetables, soy sesame glaze', price: 1450 },
  { id: 'chinese-chilli', category: 'Chinese', name: 'Chilli Chicken', description: 'Crisp chicken, peppers, spring onion, chilli sauce', price: 1650 },
  { id: 'burger-classic', category: 'Burger', name: 'The Classic Hawaii', description: 'Beef patty, cheddar, lettuce, tomato, house sauce', price: 1550, image: '/images/seafood-platter.jpg' },
  { id: 'burger-prawn', category: 'Burger', name: 'Crispy Prawn Burger', description: 'Crisp prawns, slaw, pickles, toasted brioche', price: 1650 },
  { id: 'pizza-margherita', category: 'Pizza', name: 'Sunset Margherita', description: 'Tomato, buffalo mozzarella, basil, olive oil', price: 1450 },
  { id: 'pizza-chicken', category: 'Pizza', name: 'Tropical Chicken Pizza', description: 'Smoked chicken, pineapple, peppers, mozzarella', price: 1750 },
  { id: 'pasta-alfredo', category: 'Pasta', name: 'Creamy Chicken Alfredo', description: 'Fettuccine, grilled chicken, parmesan cream', price: 1650 },
  { id: 'pasta-prawn', category: 'Pasta', name: 'Prawn Aglio e Olio', description: 'Spaghetti, prawns, garlic, chilli, parsley', price: 1850 },
  { id: 'seafood-platter', category: 'Sea Food', name: 'Hawaii Seafood Platter', description: 'Lobster, grilled fish, prawns, mango-lime salsa', price: 3000, image: '/images/seafood-platter.jpg', tag: 'For sharing' },
  { id: 'seafood-curry', category: 'Sea Food', name: 'Coconut Prawn Curry', description: 'Tiger prawns, green coconut, curry leaf, steamed rice', price: 2450, image: '/images/hero-prawns.jpg', tag: "Chef's pick" },
  { id: 'coffee-americano', category: "Coffee's", name: 'Island Americano', description: 'Bold espresso, hot water, a clean finish', price: 550 },
  { id: 'coffee-cappuccino', category: "Coffee's", name: 'Coconut Cappuccino', description: 'Espresso, silky foam, toasted coconut dust', price: 750 },
  { id: 'frappe-mocha', category: 'Frappes', name: 'Salted Caramel Mocha Frappe', description: 'Coffee, chocolate, caramel, whipped cream', price: 850 },
  { id: 'frappe-mango', category: 'Frappes', name: 'Mango Cream Frappe', description: 'Fresh mango, vanilla cream, crushed ice', price: 850 },
  { id: 'mocktail-spritz', category: 'Mocktails', name: 'Sunset Spritz', description: 'Pineapple, citrus, basil, sparkling water', price: 850, image: '/images/cocktail.jpg', tag: 'Zero-proof' },
  { id: 'mocktail-blue', category: 'Mocktails', name: 'Blue Lagoon', description: 'Blue curaçao, lemon, lime, soda, fresh mint', price: 850 },
  { id: 'shake-chocolate', category: 'Shakes', name: 'Dark Chocolate Shake', description: 'Rich chocolate, vanilla ice cream, cocoa nibs', price: 900 },
  { id: 'shake-strawberry', category: 'Shakes', name: 'Strawberry Cloud', description: 'Fresh strawberries, vanilla, cream, berry swirl', price: 900 },
];

export function formatPrice(price: number) {
  return `Rs ${price.toLocaleString('en-PK')}`;
}