"use client"
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import groq from "groq";
import { client } from "@/sanity/lib/client";

const productQuery = groq`
  *[_type == "products"]{
    ...,
    "id": _id,
    "image": image.asset->url
   
  }
`;

// 

export type Product = {
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
  colors: string[];
  sizes: string[];
  image: string;
  stock: number;
  selectedSize:string;
  selectedColor:string;
  

};

function Homepage() {
  // const productData = [
  //   { id: '1', name: 'T-shirt with tape Details', price: '$120', img: '/image1.png', img2: "/greenB.png", img3: "/greenF.png" ,rate:"3.5/", descript: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.' },
  //   { id: '2', name: 'Skinny fit jeans ',per: '20%', strike: '$260',  price: '$240', img: '/pent.png', img2: "/jeans.jpg", img3: "/jeansSide.jpg" ,rate:"3.5/", descript: "These pants are perfect for any occasion. Made from premium, breathable fabric, they provide exceptional comfort and timeless style" },
  //   { id: '3', name: 'Checkered Shirt',strike: '$260',  price: '$140', img: '/shirt.png', img2: "/check.jpg", img3: "/checkF.jpg" ,rate:"45.5/", descript: "This checkered shirt is a versatile wardrobe essential. Made from soft, breathable fabric, it combines classic style with all-day comfort, perfect for any occasion." },
  //   { id: '4', name: 'Sleeve Striped T-Shirt',per: '30%', strike: '$260',  price: '$160', img: '/tshirt.png', img2: "", img3: "" ,rate:"45.5/", descript: "This striped t-shirt is a perfect blend of style and comfort, crafted from soft, breathable fabric for a sleek and casual look." },

  // ]


  // Use the Product type for the state
  const [productData, setProductData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(productQuery);
        setProductData(data);
        console.log(data, 'querr dataa')

      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <>
      <div
        className="h-auto  bg-[#F0F0F0] sm:h-auto md:min-h-screen p-5 sm:p-5 md:p-10 md:w-full relative"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Text Section */}
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-3xl md:text-5xl  "
            style={{ fontWeight: 900 }}>
            FIND CLOTHES
          </h1>
          <h1 className="text-3xl sm:text-3xl md:text-5xl  "
            style={{ fontWeight: 900 }}>
            THAT MATCHES
          </h1>
          <h1 className=" text-3xl sm:text-3xl md:text-5xl "
            style={{ fontWeight: 900 }}>
            YOUR STYLE
          </h1>
          <p className="flex sm:justify-center w-[350px] sm:w-[550px] mt-4 md:w-[690px] text-xl sm:text-xl md:text-xl text-gray-500">
            Browse through our diverse range of meticulously crafted {`garments,`}
            designed to bring out your individuality and cater to your sense of style.
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-6 relative z-10 ">
          <button className="w-[100%] sm:w-[100%]  sm:text-xl md:w-48 md:px-12 py-2 text-white bg-black rounded-full">
            Shop Now
          </button>
        </div>
        <div className="md:hidden mt-4">
          <div className="flex justify-center gap-8">
            <div >
              <h1 className="font-bold ">200</h1>
              <p className="">International Brands</p>
            </div>
            <div className="">
              <h1 className="font-bold ">2,000+</h1>
              <p>High-Quality Products</p>
            </div>

          </div>
          <div className="text-center mt-2">
            <h1 className="font-bold ">30,000+</h1>
            <p>Happy Customers</p>
          </div>
          <div className=" flex  justify-center">
            <Image src='/bg3.png' width={0} height={0} alt="img" sizes="100vw" className="w-36 sm:w-[30%] mb-0"></Image>
          </div>
        </div>

        {/* Background Image on Small Screens */}
        {/* <div className="absolute inset-x-0 bottom-0 bg-ce sm:block md:hidden h-64 bg-cover bg-center" style={{ backgroundImage: 'url(/bg.png)' }}></div> */}
      </div>

      <div className="p-8 bg-black text-white">
        <ul className="flex justify-around items-center    md:flex-row lg:flex-row flex-wrap">
          <li>
            <Image src='/vers.png' width={150} height={150} alt="vers"></Image>
          </li>
          <li>
            <Image src='/zara.png' width={100} height={100} alt="vers"></Image>

          </li>
          <li>
            <Image src='/gucci.png' width={150} height={150} alt="vers"></Image>

          </li>
          <li>
            <Image src='/prada.png' width={150} height={150} alt="vers"></Image>

          </li>
          <li>
            <Image src='/cal.png' width={150} height={150} alt="vers"></Image>

          </li>
        </ul>
      </div>

      <div className="">
        <h1 className=" text-4xl text-center flex justify-center"
          style={{ fontWeight: 900 }}>NEW ARRIVALS</h1>
        <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-4 justify-center mt-6">

          {productData.map(item => (

            <Link
              key={item.id}
              href={`/product/${item.id}`}>
              <div className="flex flex-col items-center justify-center hover:scale-105 active:scale-100 transition-all p-5 md:mb-0">
                <div className="h-[300px] w-[300px]  p-3">
                  <Image loader={() => item.image} src={item.image} width={0} height={0} alt="pic1" sizes="100vw" className="rounded-2xl h-[300px] w-[300px] " />
                </div>
                <div  >
                  <p className="sm:2xl md:text-[1.5vw] py-4">{item.name}</p>

                  <div className="flex space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => {
                      if (i < Math.floor(item.rating)) {
                        return <FaStar key={i} style={{ fill: '#FFC633' }} />; // Full Star
                      } else if (i < item.rating) {
                        return <FaStarHalfAlt key={i} style={{ fill: '#FFC633' }} />; // Half Star
                      } else {
                        return <FaRegStar key={i} style={{ fill: '#FFC633' }} />; // Empty Star
                      }
                    })}

                    <div className="flex ">

                      {item.rating &&
                        <>
                          <p className="text-black">{item.rating}</p>
                          <p className="text-gray-400">/5</p>
                        </>
                      }
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <p className="text-xl sm:2xl md:text-[1.5v] mt-2 ">${(item.price - (item.price * item.discountPercent) / 100).toFixed(2)}</p>
                    {item.discountPercent > 0 &&
                      <p className="text-xl sm:2xl md:text-[1.5vw] text-gray-500 line-through m-0">${item.price}</p>
                    } 

                    {item.discountPercent > 0 &&
                      <button className="bg-red-100 text-red-500 px-4 rounded-2xl">{item.discountPercent}%</button>
                    }

                  </div>
                </div>
              </div>
            </Link>
          ))}



        </div>
        <div className="mt-6 relative z-10  text-center">
          <button className="w-[100%] sm:w-[100%]  sm:text-xl md:w-56 md:px-12 py-2 border  border-gray-300 rounded-full hover:scale-105 active:scale-100 transition-all">
            Veiw All
          </button>
        </div>
      </div>




      {/* second cart */}


      <div className="mt-5 p-8">
        <h1 className="text-4xl text-center flex justify-center"
          style={{ fontWeight: 900 }}>TOP SELLING</h1>
        <div className="grid grid-cols-1  sm:grid-cols-2   md:grid-cols-4 justify-center gap-4 mt-6">

          <div className="flex flex-col justify-center  mb-4 md:mb-0 hover:scale-105 active:scale-100 transition-all">
            <Image src="/shirt2.png" width={300} height={300} alt="pic1" className="rounded-2xl" />
            <div >
              <p className="sm:2xl md:text-[1.5vw] py-4">Vertical Striped Shirt</p>

              <div className="flex space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/Star2.png"
                    width={0}
                    height={0}
                    alt="star icon"
                    sizes="100vw"
                    style={{ width: '20px' }}
                    className="sm:w-[16px] md:w-[20px] lg:w-[24px]"
                  />
                ))}
                <div className="flex px-3">
                  <p className="">5.0/</p>
                  <p className="text-gray-400">5</p>
                </div>
              </div>
              <div className="flex gap-3">
                <p className="text-xl sm:2xl md:text-[1.5v] mt-2 ">$212</p>
                <p className="text-xl sm:2xl md:text-[1.5vw] text-gray-500 line-through mr-2 mt-2">$232</p>
                <button className="bg-red-100 text-red-500 px-4 rounded-2xl">20%</button>

              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col mb-4 md:mb-0 hover:scale-105 active:scale-100 transition-all">
            <Image src="/tshirt2.png" width={300} height={300} alt="pic2" className="object-cover" />
            <div >
              <p className="sm:2xl md:text-[1.5vw] py-4">Courage Graphic T-Shirt</p>


              <div className="flex space-x-1 mt-2">
                {[...Array(4)].map((_, i) => (
                  <Image
                    key={i}
                    src="/Star2.png"
                    width={0}
                    height={0}
                    alt="star icon"
                    sizes="100vw"
                    style={{ width: '20px' }}
                    className="sm:w-[16px] md:w-[20px] lg:w-[24px]"
                  />
                ))}
                <div className="flex px-3">
                  <p className="">4.0/</p>
                  <p className="text-gray-400">5</p>
                </div>
              </div>
              <div className="flex gap-5 mt-3">
                <p className="text-xl sm:2xl md:text-[1.5v]">$145</p>

              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col mb-4 md:mb-0 hover:scale-105 active:scale-100 transition-all">
            <Image src="/short.png" width={300} height={300} alt="pic3" className="object-cover" />
            <div >
              <p className="sm:2xl md:text-[1.5vw] py-4 ">Loose Fit Bermuda Shorts</p>

              <div className="flex space-x-1 mt-2">
                {[...Array(3)].map((_, i) => (
                  <Image
                    key={i}
                    src="/Star2.png"
                    width={0}
                    height={0}
                    alt="star icon"
                    sizes="100vw"
                    style={{ width: '20px' }}
                    className="sm:w-[16px] md:w-[20px] lg:w-[24px]"
                  />
                ))}
                <div className="flex px-3">
                  <p className="">3.0/</p>
                  <p className="text-gray-400">5</p>
                </div>
              </div>
              <div className="flex  mt-3">
                <p className="text-xl sm:2xl md:text-[1.5vw] ">$180</p>

              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col mb-4 md:mb-0 hover:scale-105 active:scale-100 transition-all">
            <Image src="/pent.png" width={300} height={300} alt="pic4" className="object-cover" />
            <div >
              <p className="sm:2xl md:text-[1.5vw] py-4">Faded Skinny Jeans</p>

              <div className="flex space-x-1.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/Star2.png"
                    width={0}
                    height={0}
                    alt="star icon"
                    sizes="100vw"
                    style={{ width: '19px' }}
                    className="sm:w-[16px] md:w-[10px] lg:w-[24px] "
                  />
                ))}
                <div className="flex px-3">
                  <p className="">45.5/</p>
                  <p className="text-gray-400">5</p>


                </div>
              </div>
              <div className="flex gap-5 mt-3">
                <p className="text-xl sm:2xl md:text-[1.5vw] ">$210</p>

              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 relative z-10  text-center">
          <button className="w-[100%] sm:w-[100%]  sm:text-xl md:w-56 md:px-12 py-2 border  border-gray-300 rounded-full hover:scale-105 active:scale-100 transition-all">
            Veiw All
          </button>
        </div>
      </div>


      {/* third addition */}


      <div className="bg-[#F0F0F0] rounded-3xl flex flex-col justify-center h-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mt-10"
          style={{ fontWeight: 900 }}>BROWSE BY DRESSES STYLE</h1>

        <div className="flex flex-col justify-center items-center gap-3 mt-10 rounded-3xl w-full">

          <div className="flex flex-col sm:flex-col md:flex-row justify-center gap-3 w-full">
            <div
              className="w-full sm:w-[650px] md:w-[395px] h-[289px] hover:scale-105 active:scale-100 transition-all rounded-3xl pl-14 pt-9 text-3xl"
              style={{
                backgroundImage: 'url(/frame1.png)',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <span className="text-xl">Casual</span>
            </div>

            <div
              className="w-full sm:w-[690px] md:w-[650px] h-[289px] hover:scale-105 active:scale-100 transition-all rounded-3xl pl-14 pt-9 text-3xl sm:bg-[140%] md:bg-[120%]"
              style={{
                backgroundImage: 'url(/frame.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <span className="text-xl">Formal</span>
            </div>
          </div>



          <div className="flex flex-col sm:flex-col md:flex-row justify-center gap-3 w-full">
            <div
              className="w-full sm:w-[690px] md:w-[650px] h-[289px] hover:scale-105 active:scale-100 transition-all rounded-3xl pl-14 pt-9 text-3xl sm:bg-[140%] md:bg-[120%]"
              style={{
                backgroundImage: 'url(/frame3.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <span className="text-xl ">Party</span>
            </div>
            <div
              className="w-full sm:w-[650px] md:w-[395px] hover:scale-105 active:scale-100 transition-all h-[289px] pt-9 pl-14 text-3xl rounded-3xl "
              style={{
                backgroundImage: 'url(/frame4.png)',
                backgroundSize: '99%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'fix',
              }}
            >
              <span className="text-xl">Gym</span>
            </div>
          </div>
        </div>
      </div>




      <div>
        <div className="flex justify-between p-5 ">
          <div className="text-3xl sm:text-3xl"
            style={{ fontWeight: 900 }}>
            OUR HAPPY CUSTOMERS

          </div>
          <div className=' sm:flex-wrap flex justify-end gap-2'>
            <div>
              <Image src='/Arrow.png' width={50} height={50} alt='arrow left'
              />
            </div>
            <div>
              <Image src='/arrowr.png' width={50} height={50} alt='arrow right'
              />
            </div>
          </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-3  gap-4">
          <div className=" border border-gray-300 rounded-3xl w-[85%] flex flex-col justify-self-center p-5">
            <div className="flex space-x-1.5 mt-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/Star2.png"
                  width={0}
                  height={0}
                  alt="star icon"
                  sizes="100vw"
                  style={{ width: '19px' }}
                  className="sm:w-[16px] md:w-[10px] lg:w-[24px] "
                />
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <h1 className="  font-bold">Sarah M.</h1>
              <Image src='/tick.png' width={20} height={10} alt="tick"></Image>
            </div>
            <p className="pt-4">

              {` "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`}

            </p>

          </div>
          <div className=" border border-gray-300 rounded-3xl w-[85%] flex flex-col justify-self-center p-3">
            <div className="flex space-x-1.5 mt-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/Star2.png"
                  width={0}
                  height={0}
                  alt="star icon"
                  sizes="100vw"
                  style={{ width: '19px' }}
                  className="sm:w-[16px] md:w-[10px] lg:w-[24px] "
                />
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <h1 className="  font-bold">Alex K.</h1>
              <Image src='/tick.png' width={20} height={10} alt="tick"></Image>
            </div>
            <p className="pt-4">

              {`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`}

            </p>

          </div>
          <div className=" border border-gray-300 rounded-3xl w-[85%] flex flex-col justify-self-center p-5">
            <div className="flex space-x-1.5 mt-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/Star2.png"
                  width={0}
                  height={0}
                  alt="star icon"
                  sizes="100vw"
                  style={{ width: '19px' }}
                  className="sm:w-[16px] md:w-[10px] lg:w-[24px] "
                />
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <h1 className="font-bold ">James L.</h1>
              <Image src='/tick.png' width={20} height={10} alt="tick"></Image>
            </div>
            <p className="pt-4">

              {`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`}

            </p>

          </div>

        </div>
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

export default Homepage;