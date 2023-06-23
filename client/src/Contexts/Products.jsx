import React from 'react';

// Create a ProductContext
const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);


const products = [
  {
    id: 1,
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkYPuiuxkAgOOue8pjMaVHojeVQWzBekEvA&usqp=CAU",
    name: "Carrot",
    Details: "Fresh organic carrots from local farms",
    Description: "These carrots are packed with nutrients and have a sweet taste.",
    Rating: 4.5,
    Company: "Farm Fresh",
    Discount: 10,
    type: 1,
    price: 2.99,
    Reviews: [
      { Name: "John", Rating: 5, Review: "Best carrots I've ever tasted!" },
      { Name: "Sarah", Rating: 4, Review: "Great quality and value for money." }
    ]
  },
  {
    id: 2,
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkYPuiuxkAgOOue8pjMaVHojeVQWzBekEvA&usqp=CAU",
    name: "Apple",
    Details: "Crisp and juicy apples picked from orchards",
    Description: "Enjoy the natural sweetness and crunchiness of these apples.",
    Rating: 4.2,
    Company: "Orchard Delights",
    Discount: 0,
    type: 2,
    price: 1.49,
    Reviews: [
      { Name: "Mike", Rating: 4, Review: "Delicious apples, perfect for snacking." },
      { Name: "Emily", Rating: 4.5, Review: "Highly recommended. Best apples in town!" }
    ]
  },
  {
    id: 3,
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkYPuiuxkAgOOue8pjMaVHojeVQWzBekEvA&usqp=CAU",
    name: "Soup",
    Details: "Homemade soup made with fresh ingredients",
    Description: "Warm and comforting, our soup is a perfect meal for chilly days.",
    Rating: 4.8,
    Company: "Kitchen Delights",
    Discount: 20,
    type: 3,
    price: 5.99,
    Reviews: [
      { Name: "Lisa", Rating: 5, Review: "Absolutely delicious! Reminds me of home-cooked meals." },
      { Name: "David", Rating: 4.5, Review: "Great variety and flavors. Perfect for a quick meal." }
    ]
  },
  {
    id: 4,
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkYPuiuxkAgOOue8pjMaVHojeVQWzBekEvA&usqp=CAU",
    name: "Banana",
    Details: "Fresh and ripe bananas for a healthy snack",
    Description: "These bananas are packed with potassium and make a great addition to your breakfast.",
    Rating: 4.3,
    Company: "Fruit Paradise",
    Discount: 5,
    type: 2,
    price: 0.49,
    Reviews: [
      { Name: "Sophia", Rating: 4, Review: "Good quality bananas at an affordable price." },
      { Name: "Daniel", Rating: 4.5, Review: "Sweet and tasty. I eat them every day!" }
    ]
  },
  {
    id: 5,
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkYPuiuxkAgOOue8pjMaVHojeVQWzBekEvA&usqp=CAU",
    name: "Milk",
    Details: "Fresh and nutritious cow's milk",
    Description: "Our milk is sourced from local dairy farms and is rich in calcium and vitamins.",
    Rating: 4.7,
    Company: "Dairy Delights",
    Discount: 0,
    type: 2,
    price: 3.99,
    Reviews: [
      { Name: "Olivia", Rating: 5, Review: "Creamy and delicious. Perfect for my morning coffee." },
      { Name: "Michael", Rating: 4.5, Review: "High-quality milk with great taste." }
    ]
  },
  {
    id: 6,
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkYPuiuxkAgOOue8pjMaVHojeVQWzBekEvA&usqp=CAU",
    name: "Bread",
    Details: "Freshly baked bread made with premium ingredients",
    Description: "Our bread is soft, fluffy, and has a wonderful aroma. Perfect for sandwiches or toast.",
    Rating: 4.6,
    Company: "Artisan Bakery",
    Discount: 15,
    type: 3,
    price: 2.49,
    Reviews: [
      { Name: "Ethan", Rating: 4, Review: "Great bread. I love the variety of flavors." },
      { Name: "Ava", Rating: 5, Review: "Freshly baked and tastes amazing." }
    ]
  },
  {
    id: 7,
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkYPuiuxkAgOOue8pjMaVHojeVQWzBekEvA&usqp=CAU",
    name: "Eggs",
    Details: "Farm-fresh eggs from free-range chickens",
    Description: "Our eggs are laid by happy and healthy chickens, ensuring high-quality and nutritious eggs.",
    Rating: 4.9,
    Company: "Happy Hen Farms",
    Discount: 0,
    type: 4,
    price: 2.99,
    Reviews: [
      { Name: "Noah", Rating: 5, Review: "The best eggs I've ever had. The yolks are so vibrant!" },
      { Name: "Mia", Rating: 4.5, Review: "Fresh and delicious. Perfect for baking." }
    ]
  },

  {
    id: 8,
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkYPuiuxkAgOOue8pjMaVHojeVQWzBekEvA&usqp=CAU",
    name: "Carrot",
    Details: "Fresh organic carrots from local farms",
    Description: "These carrots are packed with nutrients and have a sweet taste.",
    Rating: 4.5,
    Company: "Farm Fresh",
    Discount: 10,
    type: 1,
    price: 2.99,
    Reviews: [
      { Name: "John", Rating: 5, Review: "Best carrots I've ever tasted!" },
      { Name: "Sarah", Rating: 4, Review: "Great quality and value for money." }
    ]
  },
  {
    id: 9,
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkYPuiuxkAgOOue8pjMaVHojeVQWzBekEvA&usqp=CAU",
    name: "Carrot",
    Details: "Fresh organic carrots from local farms",
    Description: "These carrots are packed with nutrients and have a sweet taste.",
    Rating: 4.5,
    Company: "Farm Fresh",
    Discount: 10,
    type: 1,
    price: 2.99,
    Reviews: [
      { Name: "John", Rating: 5, Review: "Best carrots I've ever tasted!" },
      { Name: "Sarah", Rating: 4, Review: "Great quality and value for money." }
    ]
  },
];

const Product_categories = [
  {
    id: 1,
    name: "Vegetables"
  },
  {
    id: 2,
    name: "Fruits"
  },
  {
    id: 3,
    name: "Juices"
  }
];

        const getProductById = (productId) => {
            return products.find((product) => product.id === productId);
          };
  return (
    // Provide the products through the ProductContext
    <ProductContext.Provider value={{products,Product_categories,getProductById}}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
