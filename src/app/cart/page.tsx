"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { RiDeleteBinFill } from "react-icons/ri";
import Checkout from "@/checkout/page";

type CartProduct = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    color?: string;
    size?: string;
    image?: string;
};

function Cart() {
    const [cartItems, setCartItems] = useState<CartProduct[]>([]);
    


    useEffect(() => {
        const updateCart = () => {
            const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
            setCartItems(storedCart || []);
        };

        window.addEventListener("storage", updateCart);
        updateCart(); // Initial Load

        return () => {
            window.removeEventListener("storage", updateCart);
        };
    }, []);


    // const handleApplyPromo = () => {
    //     alert(`Promo code "${promoCode}" applied!`);
    // };

    // const handleCheckout = () => {
    //     alert("Proceeding to checkout...");
    // };


    const handleRemoveItem = (id: number) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        window.dispatchEvent(new Event("storage"));
    };
   console.log(cartItems,'cartitem')
    return (
        <>
            <div className="flex flex-col justify-between sm:flex-col md:flex-row lg:flex-row p-6">

                <div className="w-[500px] bg-white shadow-md rounded-2xl p-6">
                    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => {
                            console.log(item,'itemproduct')
                            return(
                            item && item.price ? (
                                <div key={item.id || index} className="border-b hover:bg-gray-50 flex justify-between gap-3 p-5">
                                    {item.image ? (
                                        <Image src={item.image} alt={item.name || "Product"} width={120} height={120} />
                                    ) : (
                                        <div className="w-[150px] h-[150px] bg-gray-200 flex items-center justify-center">
                                            <span>No Image</span>
                                        </div>
                                    )}
                                    <ul>
                                        <li className="px-4">{`Product:`} {item.name}</li>
                                        <li className="px-4">{`Size:`} {item.size || "N/A"}</li>
                                        <li className="px-4">{`Color: `}{item.color || "N/A"}</li>
                                        <li className="px-4">{`Price: $`}{item.price}</li>
                                        <li className="px-4">{`Quantity:`} {item.quantity}</li>
                                    </ul>
                                    <RiDeleteBinFill
                                        className="text-red-500 cursor-pointer"
                                        onClick={() => handleRemoveItem(item.id)}
                                    />
                                </div>
                            ) : null
                        )})
                    ) : (
                        <p className="text-center p-5">Your cart is empty</p>
                    )}

                    <div className="mt-4 flex justify-between items-center">
                        <h3 className="text-xl font-bold">Total</h3>
                        <p className="text-xl font-bold">
                            ${cartItems.reduce((total, item) => total + (item.price 
                            // * item.quantity
                                
                            ), 0).toFixed(2)}
                        </p>
                    </div>
                </div>
                    
                    <Checkout/>
                {/* <div className="max-w-lg mx-auto bg-white shadow-md rounded-2xl p-6 m-5">
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

                    <table className="w-full mb-4">
                        <tbody>

                            {cartItems.map((item, index) => (
                                <tr key={item.id || index}>
                                    <td className="text-gray-600 py-2">
                                        {item.name} 
                                    </td>
                                    <td className="text-right font-semibold">
                                        ${item.price * item.quantity}
                                    </td>
                                </tr>
                            ))}


                            <tr>
                                <td className="text-gray-600 py-2">Subtotal</td>
                                <td className="text-right font-semibold">
                                    ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                                </td>
                            </tr>

                            <tr>
                                <td className="text-gray-600 py-2">Discount (-20%)</td>
                                <td className="text-right font-semibold text-green-500">
                                    -${(cartItems.reduce((total, item) => total + item.price * item.quantity, 0) * 0.2).toFixed(2)}
                                </td>
                            </tr>


                            <tr>
                                <td className="text-gray-600 py-2">Delivery Fee</td>
                                <td className="text-right font-semibold">$15.00</td>
                            </tr>


                            <tr>
                                <td className="text-gray-800 font-bold py-2">Total</td>
                                <td className="text-right font-bold text-lg">
                                    ${(
                                        cartItems.reduce((total, item) => total + item.price * item.quantity, 0) * 0.8 + 15
                                    ).toFixed(2)}
                                </td>
                            </tr>
                        </tbody>
                    </table>

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


                    <button
                        onClick={handleCheckout}
                        className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
                    >
                        Go to Checkout
                    </button>
                </div> */}

            </div>
            <div className="flex justify-around gap-5 items-center flex-col sm:flex-col md:flex-row  bg-black text-white p-5 m-10 rounded-2xl">
                <div className=" w-[50%] sm:w-[50%] md:w[20%] lg:w-[35%]">
                    <h1 className="text-3xl "
                        style={{ fontWeight: 900 }}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                </div>
                <div className="flex w-[100%] sm:w-[100%] flex-col justify-center md:w-[30%]  gap-2">
                    <div className="flex    jutify-center items-center p-3 pl-7 bg-[#F0F0F1] gap-3 md:w-[100%] sm:bg-[#F0F0F1]  md:bg-[#F0F0F0]  rounded-full">
                        <Image src='/email.png' width={0} height={0} alt="search" sizes="100vw" className="w-5 sm:w-5 md:w-30"></Image>
                        <input className="w-[70%] sm:w-[40%] bg-[#F0F0F1] outline-none rounded-full md:w-full  "
                            type="search" placeholder="Enter your email address" name="" id="" />
                    </div>
                    <div>
                        <div className=" bg-[#F0F0F1]  w-[100%] text-center text-black outline-none rounded-full p-3 ">Subscribe to Newsletter</div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Cart;
