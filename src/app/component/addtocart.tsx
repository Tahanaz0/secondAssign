'use client';
import React, { useState } from "react";
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const AddtoCart: React.FC = () => {
  const [quantity, setQuantity] = useState(0);

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Add to cart functionality
  const addToCart = () => {
    if (quantity <= 0) {
      alert("Please select a quantity greater than 0.");
      return;
    }

    const product = {
      id: 1, // Hardcoded product ID for now (make it dynamic in the future)
      name: "Sample Product", // Hardcoded product name
      quantity: quantity, // Selected quantity
    };

    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
   console.log(existingCart, )
   console.log(localStorage,'local storage')
    // Check if product already exists in the cart
    const productIndex = existingCart.findIndex((item: any) => item.id === product.id);

    if (productIndex > -1) {
      // Update quantity if product already exists
      existingCart[productIndex].quantity += quantity;
    } else {
      // Add new product to the cart
      existingCart.push(product);
    }

    // Save updated cart to localStorage
    localStorage.setItem( "cart", JSON.stringify(existingCart));

    alert(`Added ${quantity} item(s) to the cart!`);
  };

  return (
    <div className="flex items-center">
      <div className="flex justify-center gap-5">
        {/* Quantity Selector */}
        <div className="bg-[#F0F0F0] flex justify-center w-[25%] rounded-3xl gap-6 items-center">
          <button onClick={decreaseQuantity} className="text-2xl">
            -
          </button>
          <p className="text-2xl">{quantity}</p>
          <button onClick={increaseQuantity} className="text-2xl font-bold text-gray-700">
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

export default AddtoCart;
