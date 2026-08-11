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
  description?: string;
  price: number;
  priceNote?: string;
  image?: string;
  tag?: string;
};

export type CartLine = {
  item: MenuItem;
  quantity: number;
};

export const menuItems: MenuItem[] = [
  { id: 'chicken-cheese-goujon', category: 'Appetizers', name: 'Chicken Cheese Goujon', description: 'A harmonious blend of succulent chicken and rich cheddar, golden-fried to perfection, paired with peri peri mayo dip', price: 1199 },
  { id: 'peri-bite', category: 'Appetizers', name: 'Peri Bite', description: 'Golden-breaded fried chilies, generously stuffed with a tantalizing blend of chicken and cheese, perfectly paired with crispy fries', price: 799 },
  { id: 'chicken-quesadilla', category: 'Appetizers', name: 'Chicken Quesadilla', description: 'Tortillas brimming with mexican-spiced chicken, vibrant vegetables, and luscious shredded cheese. Served alongside tomato salsa and zesty sauce', price: 799 },
  { id: 'fried-platter', category: 'Appetizers', name: 'Fried Platter', description: 'Featuring crispy chicken strips, golden onion rings, perfectly seasoned french fries, and decadent chicken lollipop. Accompanied by a chilled ranch and garlic mayo', price: 1499, tag: 'For sharing' },
  { id: 'chicken-cheese-nachos', category: 'Appetizers', name: 'Chicken Cheese Nachos', description: 'Cheesy chips adorned with layers of salsa-covered chicken, crowned with a luscious cheese sauce and salsa', price: 1099 },
  { id: 'tacos', category: 'Appetizers', name: 'Tacos', description: 'Seasoned chicken entwined with bell peppers, garlic, iceberg lettuce, and a hint of spicy salsa for an explosion of flavors', price: 1149 },
  { id: 'dynamite-prawn', category: 'Appetizers', name: 'Dynamite Prawn', description: 'Batter-fried prawns, artfully topped with our irresistible dynamite dressing', price: 1149 },
  { id: 'dynamite-chicken', category: 'Appetizers', name: 'Dynamite Chicken', description: 'Tender chicken pieces marinated in a flavorful blend of spices and grilled to perfection, offering a burst of savory goodness in every bite', price: 999 },
  { id: 'hot-buffalo-wings', category: 'Appetizers', name: 'Hot Buffalo Wings', description: 'Buffalo wings marinated with hot and sour sauce topped with sesame seeds with red buffalo sauce', price: 899 },
  { id: 'mozzarella-sticks', category: 'Appetizers', name: 'Mozzarella Sticks', description: 'Premium mozzarella sticks boast oozy cheese encased in a crispy coating', price: 999 },
  { id: 'butterfly-prawns', category: 'Appetizers', name: 'Butterfly Prawns', description: 'Crispy deep fried prawns served with fries & tartar sauce', price: 1650 },
  { id: 'mayo-garlic-fries', category: 'Appetizers', name: 'Mayo Garlic Fries', description: 'Crispy fries tossed in a creamy garlic mayo sauce, creating a savory and indulgent treat', price: 550 },
  { id: 'fried-calamari', category: 'Appetizers', name: 'Fried Calamari', description: 'Tender pieces of squid soaked in butter milk, coated in seasoned flour served with tatar sauce', price: 1199 },
  { id: 'potato-spud', category: 'Appetizers', name: 'Potato Spud', description: 'Grilled chicken and vegetables and a creamy alfredo sauce nestled in with a baked jacket potato crowned with cheese and spring onion served with a side of ranch dressing', price: 799 },
  { id: 'prawn-tempura', category: 'Appetizers', name: 'Prawn Tempura', description: 'Irresistible blend of crispy, airy light prawns, perfectly battered in a Japanese style', price: 1495 },
  { id: 'cheesy-mushroom-fries', category: 'Appetizers', name: 'Cheesy Mushroom Fries', description: 'Crispy golden fries topped with savory sauteed mushroom and smothered in melted cheese', price: 799 },
  { id: 'potato-the-bravo', category: 'Appetizers', name: 'Potato The Bravo', description: 'Indulge in our spicy roasted potato wedges, perfectly tossed with zesty green chilies, fresh coriander, and olives. Served alongside a garlic sauce', price: 699 },

  { id: 'thai-soup', category: 'Soup', name: 'Thai Soup', description: 'Blend of fragrant thai spices and tender chicken, served in a flavorful broth', price: 499, priceNote: 'Family Rs 1,495' },
  { id: 'corn-soup', category: 'Soup', name: 'Corn Soup', description: 'Chicken corn soup served with fresh vegetables, optional eggs, and crisp crackers', price: 499, priceNote: 'Family Rs 1,495' },
  { id: 'hot-sour-soup', category: 'Soup', name: 'Hot & Sour Soup', description: 'Hot and sour soup served with fish crackers', price: 499, priceNote: 'Family Rs 1,495' },
  { id: 'cream-mushroom-soup', category: 'Soup', name: 'Cream of Mushroom', description: 'Cream of mushroom soup, served with garlic bread for a rich and comforting experience', price: 599, priceNote: 'Family Rs 1,599' },

  { id: 'hawaii-special-salad', category: 'Salad', name: 'Hawaii Special Salad', description: 'Our go-to salad made with crisp iceberg lettuce, crunchy bread, succulent cheesy tomatoes, zesty olives, spicy jalapenos, and a generous sprinkle of Parmesan cheese', price: 999 },
  { id: 'grilled-chicken-salad', category: 'Salad', name: 'Grilled Chicken Salad', description: 'A refreshing mix of crisp greens, cherry tomatoes, cucumbers, and grilled chicken, drizzled with your choice of dressing for a light yet satisfying meal', price: 1099 },
  { id: 'caesar-salad', category: 'Salad', name: 'Caesar Salad', description: 'Crisp iceberg and romaine lettuce, caesar dressing, croutons, and grilled chicken slices', price: 999 },

  { id: 'hawaii-special-sandwich', category: 'Sandwich', name: 'Hawaii Special Sandwich', description: 'A hot cheese sandwich typically prepared by heating slice of cheese between slice of bread with a cooking fat such butter or mayonnaise', price: 1299 },
  { id: 'club-sandwich', category: 'Sandwich', name: 'Club Sandwich', description: 'Classic club sandwich, crafted with white bread and served with a side of golden fries', price: 1150 },
  { id: 'grilled-chicken-sandwich', category: 'Sandwich', name: 'Grilled Chicken Sandwich', description: 'Juicy marinated chicken paired with crisp iceberg lettuce, juicy tomato, and creamy egg mayo, all nestled between perfectly golden-fried bread for an unforgettable flavor experience', price: 1150 },
  { id: 'beef-roast-sandwich', category: 'Sandwich', name: 'Beef Roast Sandwich', description: 'Laden with thinly sliced roasted beef, crisp vegetables, and a velvety cream spread', price: 1350 },
  { id: 'philly-cheesesteak-sandwich', category: 'Sandwich', name: 'Philly Cheesesteak Sandwich', description: 'Mouthwatering steak and cheese sandwich featuring succulent, thinly sliced beef steak and gooey melted cheese, all nestled in a soft, fresh hoagie roll. Pair it with crispy fries', price: 1350 },

  { id: 'chicken-fajita-wraps', category: 'Wraps', name: 'Chicken Fajita Wraps', description: 'Delight in our soft, crispy tortillas bursting with flavorful chicken fajita, crisp iceberg, lettuce, capsicum, olives, and a rich slice of cheddar, all drizzled with our creamy mayo dressing', price: 1250 },
  { id: 'beef-fajita-wraps', category: 'Wraps', name: 'Beef Fajita Wraps', description: 'Indulge in soft tortillas stuffed with succulent beef fajita, crisp iceberg lettuce, vibrant capsicum, zesty olives, savory onions, and rich American cheddar', price: 1349 },
  { id: 'crispy-chicken-wraps', category: 'Wraps', name: 'Crispy Chicken Wraps', description: 'Indulge in a delicious crispy chicken wrap, packed with fresh, crunchy lettuce, zesty jalapeños, and a mouthwatering slice of cheese, all drizzled with creamy mayo dressing', price: 1299 },

  { id: 'beef-pepper-steak', category: 'Beef Steak', name: 'Beef Pepper Steak', description: 'Loaded tenderloin with veggies in an Asian-inspired sauce, served with baked potato at your desired temperature', price: 2099 },
  { id: 'beef-moroccan-steak', category: 'Beef Steak', name: 'Beef Moroccan Steak', description: 'Grilled tenderloin marinated in exotic spices, elegantly served with side of your choice', price: 2099 },
  { id: 'beef-mushroom-steak', category: 'Beef Steak', name: 'Beef Mushroom Steak', description: 'Tenderloin featuring mushroom sauce in a rich and creamy garlic blend, accompanied by side of your choice', price: 2099 },
  { id: 'beef-double-decker-steak', category: 'Beef Steak', name: 'Beef Double Decker Steak', description: 'House specialty — a 250g double-layered tenderloin flap steak with cheddar slice cheese, melted on top of our signature sauce, and your choice of sideline', price: 2099, tag: 'House specialty' },
  { id: 'entrecote-cafe-hawaii-de-paris', category: 'Beef Steak', name: 'Entrecote Cafe Hawaii de Paris', description: 'Cafe hawaii de paris sauce is a butter based sauce served with grilled beef when it is served with the sliced portion of an entrecote of four fillet sauce', price: 2450 },
  { id: 'grilled-beef-fillet-steak', category: 'Beef Steak', name: 'Grilled Beef Fillet Steak', description: 'Prime cut of sliced grilled beef, served with rosemary potatoes, creamy spinach & garlic herb butter', price: 2099 },
  { id: 'chef-specials-steak', category: 'Beef Steak', name: 'Chef Specials Steak', description: 'Savour 250 grams of juicy tenderloin steak, topped with rich melted cheese, all nestled in our exquisite signature vegetable sauce. Pair it with your choice of a delightful sideline for a truly unforgettable meal', price: 2399, tag: "Chef's special" },

  { id: 'chicken-tarragon', category: 'Chicken', name: 'Chicken Tarragon', description: 'Freshly prepared chicken meets the insistent herbal notes of tarragon, served with side of your choice', price: 1650 },
  { id: 'chicken-moroccan', category: 'Chicken', name: 'Chicken Moroccan', description: 'Grilled chicken, expertly marinated in exotic spices, served with a side of your choice', price: 1650 },
  { id: 'mushroom-chicken', category: 'Chicken', name: 'Mushroom Chicken', description: 'Tender chicken bathed in a rich, creamy garlic sauce infused with the earthy delight of mushroom, perfectly complemented by a side of your choice', price: 1650 },
  { id: 'jalapeno-chicken', category: 'Chicken', name: 'Jalapeno Chicken', description: 'Grilled chicken generously filled with a creamy jalapeno sauce, served alongside side of your choice', price: 1650 },
  { id: 'cheese-fried-chicken', category: 'Chicken', name: 'Cheese Fried Chicken', description: 'Deep-fried chicken, adorned with green onions and generously topped with melted organic mozzarella cheese, paired with the duo of sauces, alongside side of your choice', price: 1750 },
  { id: 'mascava-chicken', category: 'Chicken', name: 'Mascava Chicken', description: 'Golden fried chicken breast stuffed with mushroom, served with creamy tarragon sauce sidelined with your choice mashed potato/fries or rice', price: 1750 },
  { id: 'italian-chicken', category: 'Chicken', name: 'Italian Chicken', description: 'Golden fried chicken breast topped with grilled pepperoni, tomato sauce & cheese, sidelined with your choice mashed potato/fries or rice', price: 1750 },
  { id: 'chicken-cheesy-angry-steak', category: 'Chicken', name: 'Chicken Cheesy Angry Steak', description: 'Mouthwatering grilled chicken, perfectly melted mozzarella cheese, caramelized onions, and a chef-crafted trio of sauces', price: 1799 },
  { id: 'parmesan-chicken', category: 'Chicken', name: 'Parmesan Chicken', description: 'Indulge in our crispy chicken fillet, generously coated in a rich cream and tomato sauce, and finished with a savory layer of crushed parmesan cheese', price: 1799 },

  { id: 'beef-chilli-dry', category: 'Chinese', name: 'Beef Chilli Dry', description: 'Dry beef chili, expertly cut into thin strips, marinated and served with a side of rice', price: 1450 },
  { id: 'chicken-chowmein', category: 'Chinese', name: 'Chicken Chowmein', description: 'Immerse yourself in the secret sauce magic of our chicken chowmein that promises to captivate your palate', price: 1250 },
  { id: 'thai-asian-beef-bowl', category: 'Chinese', name: 'Thai Asian Beef Bowl', description: 'Thai beef stir fry, featuring seasoned vegetables tossed in thai sauce and served with fried rice', price: 1499 },
  { id: 'chicken-manchurian', category: 'Chinese', name: 'Chicken Manchurian', description: 'Manchurian chicken with red sauce and whole chili, served with a side of fried rice', price: 1199 },
  { id: 'chicken-chilli-dry', category: 'Chinese', name: 'Chicken Chilli Dry', description: 'Crispy chicken and vegetables served with rice', price: 1299 },
  { id: 'chicken-shashlik', category: 'Chinese', name: 'Chicken Shashlik', description: 'Tender pieces of marinated chicken skewered with colorful bell peppers, onions, and grilled to perfection, served with fragrant rice pilaf', price: 1199 },
  { id: 'mexican-beef', category: 'Chinese', name: 'Mexican Beef', description: 'Beef stir fry with seasoned vegetables tossed in our Hawaii signature sauce, served with garlic rice', price: 1450 },
  { id: 'stir-fry-chicken', category: 'Chinese', name: 'Stir Fry Chicken', description: 'Chicken stir fry with seasoned vegetables tossed in our Hawaii signature sauce, served with garlic rice', price: 1299 },
  { id: 'schezwan-chicken', category: 'Chinese', name: 'Schezwan Chicken', description: 'Indulge in our tender, juicy, and crispy chicken, perfectly paired with a vibrant sweet and spicy sauce brimming with zesty red chilies and fresh green onions. Served with fragrant fried rice', price: 1299 },

  { id: 'hawaii-special-burger', category: 'Burger', name: 'Hawaii Special Burger', description: 'Beef lava patty with melted cheese topped with crispy onion rings, grilled mushrooms, smoke and bbq sauces', price: 1299, image: '/images/seafood-platter.jpg', tag: 'Signature' },
  { id: 'chicken-bombastic', category: 'Burger', name: 'Chicken Bombastic', description: 'A deep-fried 200g chicken patty generously stuffed with a delectable blend of mozzarella and cheddar cheese', price: 1299 },
  { id: 'beef-old-school', category: 'Burger', name: 'Beef Old School', description: 'With a topping of succulent beef undercut, smothered in mozzarella sauce, and accompanied by a medley of taco-inspired vegetables', price: 1099 },
  { id: 'crispy-burger', category: 'Burger', name: 'Crispy Burger', description: 'Crispy chicken fried perfection, delivering the juiciest bite and unparalleled satisfaction', price: 950 },

  { id: 'hawaii-special-supreme-pizza', category: 'Pizza', name: 'Hawaii Special Supreme Pizza', description: 'Served with marinated chicken, pepperoni, olive jalapeños & mozzarella cheese', price: 1550 },
  { id: 'creamy-shishtaouk-pizza', category: 'Pizza', name: 'Creamy Shishtaouk Pizza', description: 'Creamy tikka capsicum, black olives, sliced onions, tomatoes, and mozzarella pizza', price: 1550 },
  { id: 'pepperoni-pizza', category: 'Pizza', name: 'Pepperoni Pizza', description: 'Pepperoni masterpiece featuring beef pepperoni, tomato red sauce, mozzarella cheese, jalapenos, and a touch of chili oil', price: 1550 },
  { id: 'spicy-ranch-pizza', category: 'Pizza', name: 'Spicy Ranch Pizza', description: 'Boasting ranch-marinated chicken, tomatoes, and jalapenos atop a light ranch sauce base for a tantalizing blend of heat and creaminess', price: 1550 },
  { id: 'margherita-pizza', category: 'Pizza', name: 'Margherita Pizza', description: 'Classic Margherita pizza, adorned with luscious mozzarella cheese, sliced tomatoes, and basil leaves, finished with a drizzle of chili oil', price: 1399 },
  { id: 'turkish-chicken-pied', category: 'Pizza', name: 'Turkish Chicken Pied', description: 'A crispy turkish flatbread pizza, topped with succulent chicken, creamy cheese, vibrant capsicum, savory onions, and zesty jalapenos, accompanied by a rich garlic dip that enhances every bite', price: 1450 },
  { id: 'turkish-beef-pied', category: 'Pizza', name: 'Turkish Beef Pied', description: 'A delectable oval flatbread hailing from Turkey, generously garnished with savory beef mince and a vibrant medley of fresh vegetables, including onions, capsicum, jalapenos, and juicy tomatoes', price: 1499 },

  { id: 'cajun-spicy-pasta', category: 'Pasta', name: 'Cajun Spicy Pasta', description: 'Pan-fried penne pasta in a luscious Italian white creamy Cajun spicy sauce, paired with enticing garlic bread', price: 1450 },
  { id: 'fettuccine-alfredo-pasta', category: 'Pasta', name: 'Fettuccine Alfredo Pasta', description: 'Fettuccine bathed in our rendition of the classic alfredo sauce, enriched with sundried tomatoes, and accompanied by perfectly paired garlic bread', price: 1450 },
  { id: 'lasagna-style', category: 'Pasta', name: 'Lasagna Style', description: 'Soft noodles enveloped in slow-cooked beef mince luxuriously layered with bechamel sauce and crowned with piping hot cheese', price: 1450 },
  { id: 'bolognese-pasta', category: 'Pasta', name: 'Bolognese Pasta', description: 'Bolognese pasta with a harmonious blend of robust red sauce, savory beef mince, Parmesan cheese, and basil leaves, complemented by garlic bread', price: 1350 },
  { id: 'chef-ahsan-special-pasta', category: 'Pasta', name: 'Chef Ahsan Special Pasta', description: 'Fettuccine pasta tossed with minced beef & spicy pomodoro sauce, topped shaved parmesan, served with garlic bread', price: 1550 },
  { id: 'penny-al-pollo-rustico', category: 'Pasta', name: 'Penny Al Pollo Rustico', description: 'Our Mamamia crispy chicken is perfectly paired with tender penne pasta, zesty olives, spicy jalapeños, and vibrant capsicum with rich Italian cream and gooey mozzarella cheese melted on top. Enjoy it alongside with buttery garlic bread', price: 1450 },

  { id: 'sole-fish', category: 'Sea Food', name: 'Sole Fish', description: 'Shallow-fried sole fish with cream sauce and vegetables, elegantly served with steamed rice', price: 1699 },
  { id: 'chilli-garlic-prawn', category: 'Sea Food', name: 'Chilli Garlic Prawn', description: 'Fresh prawns cooked in chili butter oil, served with garlic bread for a delightful culinary experience', price: 1550 },
  { id: 'fish-and-chips', category: 'Sea Food', name: 'Fish and Chips', description: "Our classic marinated Bangus fish, fried to a stunning golden hue. It's served by crispy fries and a ranch sauce", price: 1699 },
  { id: 'mediterranean-fish', category: 'Sea Food', name: 'Mediterranean Fish', description: 'Mediterranean fish, based on a herbed foundation and adorned with the taste of creamy sauce', price: 1699 },
  { id: 'tamarind-fish', category: 'Sea Food', name: 'Tamarind Fish', description: 'Crisp fried fish served with a spicy Tamarind Sauce', price: 1699 },
  { id: 'crispy-pan-fried-fish', category: 'Sea Food', name: 'Crispy Pan Fried Fish', description: 'Experience the delight of pan-fried crispy fish fillets, perfectly complemented by a creamy sauce. Serve it alongside sauteed vegetables and fragrant garlic rice', price: 1899 },
  { id: 'lobster-thermidor', category: 'Sea Food', name: 'Lobster Thermidor', description: 'In a lobster meat add gruyere and parmesan cheese with dijon mustard pepper. Stir until the cheese melts and the sauce is smooth. Serve with garlic rice', price: 9999, tag: 'Chef special' },
  { id: 'grilled-lobster', category: 'Sea Food', name: 'Grilled Lobster', description: 'Grilled Garlic Butter Lobster is grilled over the coals covered in butter and topped with Paprika & serve with garlic rice & vegetables', price: 9999, tag: 'Chef special' },

  { id: 'cappuccino', category: "Coffee's", name: 'Cappuccino', price: 499 },
  { id: 'cafe-latte', category: "Coffee's", name: 'Cafe Latte', price: 499 },
  { id: 'expresso', category: "Coffee's", name: 'Expresso', price: 345 },
  { id: 'americano', category: "Coffee's", name: 'Americano', price: 345 },
  { id: 'mocha', category: "Coffee's", name: 'Mocha', price: 550 },
  { id: 'cold-affogato', category: "Coffee's", name: 'Cold Affogato', price: 450 },
  { id: 'hot-chocolate', category: "Coffee's", name: 'Hot Chocolate', price: 550 },
  { id: 'spanish-latte', category: "Coffee's", name: 'Spanish Latte', price: 550 },
  { id: 'cold-coffee', category: "Coffee's", name: 'Cold Coffee', price: 450 },
  { id: 'green-tea', category: "Coffee's", name: 'Green Tea', price: 250 },
  { id: 'mix-tea', category: "Coffee's", name: 'Mix Tea', price: 250 },
  { id: 'coffees-flavours', category: "Coffee's", name: "Coffee's Flavours", price: 195 },

  { id: 'vanilla-frappe', category: 'Frappes', name: 'Vanilla', price: 495 },
  { id: 'chocolate-frappe', category: 'Frappes', name: 'Chocolate', price: 495 },
  { id: 'hazelnut-frappe', category: 'Frappes', name: 'Hazelnut', price: 495 },
  { id: 'caremel-frappe', category: 'Frappes', name: 'Caremel', price: 495 },

  { id: 'passion-boba', category: 'Mocktails', name: 'Passion Boba', description: 'Fresh passion fruit puree mixed with crushed ice, topping with flavors boba', price: 595 },
  { id: 'strawberry-boba', category: 'Mocktails', name: 'Strawberry Boba', description: 'Fresh strawberries puree mixed with crushed ice, topping with flavors boba', price: 595 },
  { id: 'jonny-rocket', category: 'Mocktails', name: 'Jonny Rocket', description: 'A very refreshing drink combination of pomegranate, redgrapes & lemon juice', price: 595 },
  { id: 'fruit-punch', category: 'Mocktails', name: 'Fruit Punch', description: 'A mixed drink made with mix fruit juice, and can be served on the rocks', price: 495 },
  { id: 'all-berry-margrita', category: 'Mocktails', name: 'All Berry Margrita', description: 'A sweet and sour drink that combines the tartness of lemon juice with the cooling effect of mix berry', price: 495 },
  { id: 'blue-margrita', category: 'Mocktails', name: 'Blue Margrita', description: 'A slush base drink combination of blue lagoon syrup, lemon juice, sugar syrup', price: 495 },
  { id: 'blue-adam-red-bull', category: 'Mocktails', name: 'Blue Adam (Red Bull)', description: 'Red bull blue edition is a blueberry-flavored energy drink', price: 495 },
  { id: 'all-berries-smoothie', category: 'Mocktails', name: 'All Berries Smoothie', description: 'A blended mixture of mix fruits', price: 795 },
  { id: 'pina-colada', category: 'Mocktails', name: 'Pina Colada', description: 'A pina colada made with whipe cream coconut powder, pineapple juice, and served with blended ice', price: 495 },
  { id: 'mint-lemonade', category: 'Mocktails', name: 'Mint Lemonade', description: 'A refreshing drink to enjoy on a hot sunny day. The lemons add a nice tangy acidity while the mint brings in a nice cooling effect', price: 495 },
  { id: 'mojito', category: 'Mocktails', name: 'Mojito', description: 'Made from fresh mint, muddled limes, sugar syrup and lime wheel, which is combined and mixed using crushed ice to form a long, refreshing mocktail', price: 395 },
  { id: 'fresh-juice', category: 'Mocktails', name: 'Fresh Juice', price: 399 },
  { id: 'fresh-lime', category: 'Mocktails', name: 'Fresh Lime', price: 320 },
  { id: 'soft-drink', category: 'Mocktails', name: 'Soft Drink', price: 220 },
  { id: 'mineral-water-large', category: 'Mocktails', name: 'Mineral Water Large', price: 220 },
  { id: 'mineral-water-small', category: 'Mocktails', name: 'Mineral Water Small', price: 120 },

  { id: 'oreo-shake', category: 'Shakes', name: 'Oreo', price: 545 },
  { id: 'chocolate-shake', category: 'Shakes', name: 'Chocolate', price: 495 },
  { id: 'strawberry-shake', category: 'Shakes', name: 'Strawberry', price: 495 },
  { id: 'vanilla-shake', category: 'Shakes', name: 'Vanilla', price: 495 },
];

export function formatPrice(price: number) {
  return `Rs ${price.toLocaleString('en-PK')}`;
}