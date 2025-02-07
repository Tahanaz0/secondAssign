"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/app/component/home/page";
import { getCartItems } from "@/app/action/action";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

export default function Checkout() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      setCartItems(items || []);
    };
  
    fetchCartItems();
  
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  
    const handleStorageChange = () => {
      fetchCartItems(); // Local storage update hone par cart update hoga
    };
  
    window.addEventListener("storage", handleStorageChange);
  
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price ,
    // * item.stock
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      Swal.fire("Error", "Please fill all the fields", "error");
      return;
    }

    const { isConfirmed } = await Swal.fire({
      title: "Your order is being processed",
      text: "Please wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    });

    if (!isConfirmed) return;

    const OrderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      phone: formValues.phone,
      address: formValues.address,
      zipCode: formValues.zipCode,
      city: formValues.city,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item.id,
      })),
      total: subTotal,
      discount: discount,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(OrderData);
      localStorage.removeItem("appliedDiscount");
      Swal.fire(
        "Order Placed",
        "Your order has been placed successfully",
        "success"
      );
    console.log(OrderData,'dataorder')
    } catch (error) {
      console.error("Error", error);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            {/* <Link
              href={"/addtocart"}
              className="text-[#00000] hover-text-black transition text-lg"
            >
              Cart
            </Link> */}
            <CgChevronRight />
            <span>Checkout</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border rounded-lg p-4 space-y-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                console.log(item,'item')
                return( 
                
                <div
                  key={item.id}
                  className="flex items-center gap-8 py-3 border-4"
                >
                  <div className="w-20 h-46 rounded overflow-hidden ml-8">
                    {item.image && (
                      <Image
                        src={urlFor(item?.image).url()}
                        alt="image"
                        height={50}
                        width={50}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item?.name}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item?.stock}
                    </p>
                  </div>
                  <p className="text-xs font-medium mr-6">
                    ${item?.price 
                    * item?.stock}
                  </p>
                </div>
              )})
            ) : (
              <p>No items in cart</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Subtotal: <span className="font-medium">${subTotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: $ {subTotal.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="bg-white border rounded-lg p-4 space-y-8">
            <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
            {["firstName", "lastName", "phone", "email", "address", "zipCode", "city"].map(
              (field) => (
                <div key={field}>
                  <label htmlFor={field} className="mr-4">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type="text"
                    id={field}
                    placeholder={`Enter Your ${field}`}
                    value={formValues[field as keyof typeof formValues]}
                    onChange={handleInputChange}
                    className="border-2"
                  />
                  {formErrors[field as keyof typeof formErrors] && (
                    <p className="text-red-600 text-sm font-light">
                      {field.charAt(0).toUpperCase() + field.slice(1)} is
                      required!
                    </p>
                  )}
                </div>
              )
            )}
            <button
              onClick={handlePlaceOrder}
              className="w-full h-12 mt-4 bg-[#F0F0F0] rounded-[22px] hover:bg-black hover:text-white"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
