import Image from "next/image";
function Nav() {
    return (
        <>
            <div className="flex justify-evenly  items-center p-4">
                <div  className=" font-extrabold text-3xl font-static">
                    SHOP.CO

                </div>
                <div>
                    <ul className="flex gap-5">
                        <li>Shop</li>
                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                    </ul>
                </div>
                <div className="flex gap-7 ">
                    <div className="flex gap-6  bg-[#F0F0F0]  rounded-full">
                        <Image src='/search.png' width={30} height={30} alt="search" className="m-2"></Image>
                        <input className=" bg-[#F0F0F1] w-96 outline-none rounded-full" type="search" placeholder="search for products..." name="" id="" />
                    </div>
                    <div className="flex gap-4 p-1">
                        <Image src='/shop.png' width={30} height={30} alt="search"></Image>
                        <Image src='/contact.png' width={20} height={25} alt="search"></Image>

                    </div>
                </div>
            </div>
         
        </>
    )
}
export default Nav;