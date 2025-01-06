import Image from "next/image";

function Homepage() {

  return (
    <>
      <div
        className="h-[690px] sm:h-[690px] md:min-h-screen p-5 sm:p-5 md:p-10 md:w-full relative"
        style={{
          backgroundImage: 'url(/bg.png)', // Corrected path for background image
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Text Section */}
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-extrabold font-static">
            FIND CLOTHES
          </h1>
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-extrabold font-static">
            THAT MATCHES
          </h1>
          <h1 className="font-extrabold text-3xl sm:text-3xl md:text-5xl font-static">
            YOUR STYLE
          </h1>
          <p className="flex sm:justify-center w-[418px] sm:w-[550px] mt-4 md:w-[690px] text-xl sm:text-xl md:text-xl text-gray-500">
            Browse through our diverse range of meticulously crafted {`garments,`}
            designed to bring out your individuality and cater to your sense of style.
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-6 relative z-10 ">
          <button className="px-44  sm:px-40 sm:text-xl md:px-12 py-2 text-white bg-black rounded-full">
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
           <div className="">
          <Image src='/bg.png' width={600} height={600} alt="img"></Image>
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

      <div className="p-8 mt-8">
        <h1 className="font-bold text-4xl text-center flex justify-center font-static">NEW ARRIVALS</h1>
        <div className="grid grid-cols-1  sm:grid-cols-2   md:grid-cols-4 justify-center gap-4 mt-6">

          <div className="flex flex-col justify-center   md:mb-0">
            <Image src="/image1.png" width={300} height={300} alt="pic1" className="rounded-2xl" />
            <div >
              <p className="sm:2xl md:text-[1.5vw] py-4">T-shirt with tape Details</p>

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
                  <p className="">3.5/</p>
                  <p className="text-gray-400">5</p>
                </div>
              </div>
              <div className="flex gap-3">
                <p className="text-xl sm:2xl md:text-[1.5v] mt-2 ">$120</p>

              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col mb-4 md:mb-0">
            <Image src="/pent.png" width={300} height={300} alt="pic2" className="object-cover" />
            <div >
              <p className="sm:2xl md:text-[1.5vw] py-4">Skinny fit jeans</p>


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
                  <p className="">3.5/</p>
                  <p className="text-gray-400">5</p>
                </div>
              </div>
              <div className="flex gap-5 mt-3">
                <p className="text-xl sm:2xl md:text-[1.5v]">$240</p>
                <p className="text-xl sm:2xl md:text-[1.5vw] text-gray-500 line-through mr-2">$260</p>
                <button className="bg-red-100 text-red-500 px-4 rounded-2xl">20%</button>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col mb-4 md:mb-0">
            <Image src="/shirt.png" width={300} height={300} alt="pic3" className="object-cover" />
            <div >
              <p className="sm:2xl md:text-[1.5vw] py-4">Checkered Shirt</p>

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
                  <p className="">45.5/</p>
                  <p className="text-gray-400">5</p>
                </div>
              </div>
              <div className="flex  mt-3">
                <p className="text-xl sm:2xl md:text-[1.5vw] ">$180</p>

              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col mb-4 md:mb-0">
            <Image src="/tshirt.png" width={300} height={300} alt="pic4" className="object-cover" />
            <div>
              <p className="sm:2xl md:text-[1.5vw] py-4">Sleeve Striped {`T-Shirt`}</p>

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
                  <p className="">45.5/</p>
                  <p className="text-gray-400">5</p>


                </div>
              </div>
              <div className="flex gap-5 mt-3">
                <p className="text-xl sm:2xl md:text-[1.5vw] ">$130</p>
                <p className="text-xl sm:2xl md:text-[1.5vw] text-gray-500 line-through mr-2">$160</p>
                <button className="bg-red-100 text-red-500 px-4 rounded-2xl">30%</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-16 text-center">
          <button className="px-40 text-xl  sm:px-44 sm:text-xl  md:px-16 py-2  border-2 border-gray-200  rounded-full">View All</button>
        </div>
      </div>




      {/* second cart */}


      <div className="mt-5 p-8">
        <h1 className="font-bold text-4xl text-center flex justify-center font-static">TOP SELLING</h1>
        <div className="grid grid-cols-1  sm:grid-cols-2   md:grid-cols-4 justify-center gap-4 mt-6">

          <div className="flex flex-col justify-center  mb-4 md:mb-0">
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
          <div className="flex justify-center flex-col mb-4 md:mb-0">
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
          <div className="flex justify-center flex-col mb-4 md:mb-0">
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
          <div className="flex justify-center flex-col mb-4 md:mb-0">
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
      </div>


      {/* third addition */}


      <div className="bg-[#F0F0F0] rounded-3xl flex flex-col justify-center h-auto px-4">
        <h1 className="font-bold sm:text-3xl md:text-4xl text-center mt-10 font-static">BROWSE BY DRESSES STYLE</h1>

        <div className="flex flex-col justify-center items-center gap-3 mt-10 rounded-3xl w-full">

          <div className="flex flex-col sm:flex-row md:flex-row justify-center gap-3 w-full">
            <div
              className="w-full sm:w-full md:w-[395px] h-[289px] rounded-3xl pl-14 pt-9 font-static text-3xl flex justify-center items-center"
              style={{
                backgroundImage: 'url(/frame1.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <span className="text-xl text-center">Casual</span>
            </div>
            <div
              className="w-full sm:w-full md:w-[650px] h-[289px] rounded-3xl pl-14 pt-9 font-static text-3xl flex justify-center items-center"
              style={{
                backgroundImage: 'url(/frame.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <span className="text-xl text-center">Formal</span>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row md:flex-row justify-center gap-3 w-full">
            <div
              className="w-full sm:w-full md:w-[650px] h-[289px] pl-14 pt-9 font-static text-3xl rounded-3xl flex justify-center items-center"
              style={{
                backgroundImage: 'url(/frame3.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <span className="text-xl text-center">Party</span>
            </div>
            <div
              className="w-full sm:w-full md:w-[350px] h-[289px] pl-14 pt-9 font-static text-3xl rounded-3xl flex justify-center items-center"
              style={{
                backgroundImage: 'url(/frame4.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <span className="text-xl text-center">Gym</span>
            </div>
          </div>
        </div>
      </div>




      <div>
        <div className="flex justify-between p-5 ">
          <div className="font-bold  text-3xl font-static">
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
              <h1 className=" text-xl font-bold">Sarah M.</h1>
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
              <h1 className=" text-xl font-bold">Alex K.</h1>
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
              <h1 className="text-xl font-bold ">James L.</h1>
              <Image src='/tick.png' width={20} height={10} alt="tick"></Image>
            </div>
            <p className="pt-4">

              {`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`}

            </p>

          </div>

        </div>
      </div>
    </>
  );
}

export default Homepage;