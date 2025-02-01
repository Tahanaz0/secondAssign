"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { RiDeleteBinFill } from "react-icons/ri";

type Product = {
    title: string;
    rate: number;
    name: string;
    id: string;
    description: string;
    price: number;
    discountPercent: number;
    priceWithoutDiscount: number;
    rating: number;
    ratingCount: number;
    tags: string[];
    sizes: string[];
    image?: {
      _type: string;
      asset: {
        _type: string;
        _ref: string;
      };
    };
    quantity?: number;  // ✅ Added quantity
    color?: string;  // ✅ Added color
};
function Cart() {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [promoCode, setPromoCode] = useState<string>("");

    const handleApplyPromo = () => {
        alert(`Promo code "${promoCode}" applied!`);
    };

    const handleCheckout = () => {
        alert("Proceeding to checkout...");
    };

    // const cartItems = [
    //     {
    //         id: 1,
    //         name: "Gradient Graphic T-shirt",
    //         size: "Large",
    //         color: "White",
    //         price: 145,
    //         quantity: 1,
    //         image: "/shirt.png", // Replace with actual image URL
    //     },
    //     {
    //         id: 2,
    //         name: "Checkered Shirt",
    //         size: "Medium",
    //         color: "Red",
    //         price: 180,
    //         quantity: 1,
    //         image: "/shirt2.png", // Replace with actual image URL
    //     },
    //     // {
        //   id: 3,
        //   name: "Skinny Fit Jeans",
        //   size: "Large",
        //   color: "Blue",
        //   price: 240,
        //   quantity: 1,
        //   image: "/shop.png", // Replace with actual image URL
        // },
    
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(storedCart);
        console.log(storedCart , 'locaallocaal')
      }, []);
      
    return (
        <>
            <div className="flex justify-between p-6   ">

                
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl ">

                    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

                    {cartItems.map((item) => (
                        <div key={item.id} className="border-b hover:bg-gray-50 flex justify-between gap-3 p-5">

                            <Image src={item.image} alt="" width={150} height={150}></Image>
                            <ul>
                                <li className=" px-4">Product:{item.name}</li>
                                <li className=" px-4">Size: {item.sizes}</li>
                                <li className=" px-4">Color:{item.color}</li>
                                <li className=" px-4">Price: ${item.price}</li>
                                <li className=" px-4">Quantity:{item.quantity}</li>
                            </ul>
                            <RiDeleteBinFill style={{
                                fill: 'red',
                                display: 'flex',
                                alignItems: 'end'
                            }} />
                        </div>
                    ))}

                    {/* Total Section */}
                    <div className="mt-4 flex justify-between items-center">
                        <h3 className="text-xl font-bold">Total</h3>
                        <p className="text-xl font-bold">
                            ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                        </p>
                    </div>
                </div>



                <div className="max-w-lg mx-auto bg-white shadow-md  rounded-2xl p-6">
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                    <table className="w-full mb-4">
                        <tbody>
                            <tr>
                                <td className="text-gray-600 py-2">Subtotal</td>
                                <td className="text-right font-semibold">$565</td>
                            </tr>
                            <tr>
                                <td className="text-gray-600 py-2">Discount (-20%)</td>
                                <td className="text-right font-semibold text-green-500">-$113</td>
                            </tr>
                            <tr>
                                <td className="text-gray-600 py-2">Delivery Fee</td>
                                <td className="text-right font-semibold">$15</td>
                            </tr>
                            <tr>
                                <td className="text-gray-800 font-bold py-2">Total</td>
                                <td className="text-right font-bold text-lg">$467</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Promo Code Input */}
                    <div className="flex items-center gap-3 mb-4">
                        <input
                            type="text"
                            placeholder="Add promo code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <button
                            onClick={handleApplyPromo}
                            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                        >
                            Apply
                        </button>
                    </div>

                    {/* Checkout Button */}
                    <button
                        onClick={handleCheckout}
                        className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
                    >
                        Go to Checkout
                    </button>
                </div>
            </div>
        </>
    )
}
export default Cart;