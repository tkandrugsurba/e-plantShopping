import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plantsArray = [
  {
    category: "Indoor Plants",
    plants: [
      {
        name: "Snake Plant",
        image: "snake-plant.jpg",
        description: "Low maintenance and air purifying.",
        cost: 20,
      },
      {
        name: "Fiddle Leaf Fig",
        image: "fiddle-leaf-fig.jpg",
        description: "Beautiful and elegant.",
        cost: 35,
      },
    ],
  },
  {
    category: "Outdoor Plants",
    plants: [
      {
        name: "Rosemary",
        image: "rosemary.jpg",
        description: "Fragrant herb for cooking.",
        cost: 10,
      },
      {
        name: "Lavender",
        image: "lavender.jpg",
        description: "Relaxing scent for your garden.",
        cost: 15,
      },
    ],
  },
];

const ProductList = () => {
  const [addedToCart, setAddedToCart] = useState({});
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Get total quantity from Redux
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant)); // Dispatch addItem action to Redux store
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true, // Mark plant as added to cart
    }));
  };

  return (
    <div className="product-grid">
      <header>
        <h1>Paradise Nursery</h1>
        <div className="cart-info">Cart Items: {totalQuantity}</div>
      </header>
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>
          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />
                <div className="product-title">{plant.name}</div>
                <p className="product-description">{plant.description}</p>
                <p className="product-cost">${plant.cost}</p>
                <button
                  className="product-button"
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
