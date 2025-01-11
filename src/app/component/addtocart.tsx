'use client'
import React, { useState } from "react";

const ProductPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Add to cart functionality
  const addToCart = () => {
    console.log(`Added to cart: Quantity = ${quantity}`);
    alert(`Added ${quantity} item(s) to the cart!`);
  };

  return (
    <div className="flex  items-center  ">
      <div className="flex justify-center gap-5">
        {/* Quantity Selector */}
        <div className="bg-[#F0F0F0] flex justify-center w-[25%] rounded-3xl gap-6 items-center ">
          <button
            onClick={decreaseQuantity}
            className="text-2xl"
          >
            -
          </button>
          <p className="text-2xl ">{quantity}</p>
          <button
            onClick={increaseQuantity}
            className="text-2xl font-bold text-gray-700"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <div className="w-[400px] flex items-center">
          <button
            onClick={addToCart}
            className="bg-black text-white w-[70%] rounded-3xl py-2 text-lg font-medium hover:bg-gray-800 transition"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
