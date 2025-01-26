'use client'
import Image from "next/image";
import React, { useState } from "react";
import { FcMenu } from "react-icons/fc";
import { GoChevronDown } from "react-icons/go";
import Link from "next/link";


function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);
    return (


        <>
            <div className="flex justify-between  items-center p-2">
                <div className="flex justify-center gap-3">
                    <div className="md:hidden">
                        {/* Toggle Button */}
                        <button
                            className="p-2 border font-bold rounded hover:bg-[#F5F5F5]"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <FcMenu />
                        </button>

                        {/* Menu Items */}
                        {menuOpen && (
                            <ul className="mt-2 bg-white shadow-lg rounded p-4 flex flex-col gap-4 hover:cursor-pointer">
                                <li
                                    className="flex justify-between items-center hover:bg-[#F5F5F5] p-2 rounded"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Shop <GoChevronDown />
                                </li>
                                <li
                                    className="hover:bg-[#F5F5F5] p-2 rounded"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    On Sale
                                </li>
                                <li
                                    className="hover:bg-[#F5F5F5] p-2 rounded"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    New Arrivals
                                </li>
                                <li
                                    className="hover:bg-[#F5F5F5] p-2 rounded"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Brands
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className=" font-extrabold text-3xl ">
                        SHOP.CO

                    </div>
                </div>

                <div className="hidden sm:hidden md:block">
                    <ul className="flex gap-5">
                        <div className="flex justify-center items-center"> <li>Shop </li> <GoChevronDown /></div>
                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                    </ul>
                </div>
                <div className="flex gap-2 ">
                    <div className="flex justify-center items-center gap-5 sm:bg-white  md:bg-[#F0F0F0]  rounded-full">
                        <Image src='/search.png' width={30} height={30} alt="search" className="m-2"></Image>
                        <input className="hidden sm:hidden md:block bg-[#F0F0F1]  w-96 outline-none rounded-full " type="search" placeholder="search for products..." name="" id="" />
                    </div>
                    <div className="flex gap-3 p-1">
                       <Link href="cart"> <Image src='/shop.png' width={30} height={30} alt="search"></Image></Link>
                        <Image src='/contact.png' width={35} height={10} alt="search"></Image>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Nav;