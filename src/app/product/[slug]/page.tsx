"use client"
import Image from "next/image"
import { GoChevronDown } from "react-icons/go";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { url } from "inspector";
import AddtoCart from "@/app/component/addtocart";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Product } from "@/app/component/home/page";

interface Props {
  params: Promise<{ slug: string }>
}

function Route({ params }: Props) {
  // const [productColor, setProductColor] = useState<string>('');
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true)


  const productQuery = groq`
  *[_type == "products" && _id == $slug]{
    "id": _id,
    title,
    name,
    price,
    description,
    "image": image.asset->url,
    category,
    discountPercent,
    new,
    colors,
    sizes,
    rating
  }[0]
`;




  useEffect(() => {
    const fetchProduct = async () => {
      const { slug } = await params
      console.log(slug)
      const product = await client.fetch(productQuery, {slug})
      console.log("product", product)
      setProduct(product)
      setIsLoading(false)
    }

    fetchProduct()

  }, [params,productQuery])

  if (isLoading) return <p>Loading...</p>
  if (!product) return <p>Not found</p>

  console.log(product,'product')
  return (
    <>
      <div className="flex  justify-center flex-col sm:flex-col md:flex-row m-5 gap-5">

        <div className="flex flex-col-reverse sm:flex-col-reverse   md:flex-row gap-5 justify-center p-2">
          <div className="flex flex-row sm:flex-row md:flex-col  gap-3">
            <Image loader={() => product.image} src={product.image} width={0} height={0} alt="shirt" sizes="100%" className="bg-[#F0F0F0] w-[100px]"></Image>
            <Image loader={() => product.image} src={product.image} width={0} height={0} alt="shirt" sizes="100%" className="bg-[#F0F0F0] w-[100px]"></Image>
            <Image loader={() => product.image}src={product.image} width={0} height={0} alt="shirt" sizes="100%" className="bg-[#F0F0F0] w-[100px]"></Image>
          </div>
          {/* <div style={{
                            P Fwidth: '350px',
                            height: '350px',
                            backgroundImage: url
                            backgroundSize:'cover',

                        }}>
                            <Image loader={() => img} src={img} width={0} height={0} alt="shirt" sizes="100%" className="w-[80%] sm:w-[50%] md:w-[85%] lg:w-[95%]"></Image>
                        </div> */}
          <div
            style={{
              position: 'relative',
              height: '400px',
              width: '400px',
              backgroundImage: `url(${product.image})`, // Image URL
              backgroundSize: 'cover',

            }}
          >
            {/* Overlay div with dynamic tint color */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                // backgroundColor: productColor, // Tint color from state
              }}
            />
          </div>


        </div>
        <div className="w-[100%] sm:w-[100%] md:w-[50%] p-6 ">
          <h1 className="text-2xl sm:text-3xl md:text-3xl  "
            style={{ fontWeight: 900 }}> {product.name}</h1>
          <div className="flex space-x-1 mt-2">
            {[...Array(5)].map((_, i) => {
              if (i < Math.floor(product.rating)) {
                return <FaStar key={i} style={{ fill: '#FFC633' }} />; // Full Star
              } else if (i < product.rating) {
                return <FaStarHalfAlt key={i} style={{ fill: '#FFC633' }} />; // Half Star
              } else {
                return <FaRegStar key={i} style={{ fill: '#FFC633' }} />; // Empty Star
              }
            })}
            <div className="flex px-3">
              <p className="">{product.rating}</p>
              <p className="text-gray-400">5</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-xl sm:2xl md:text-[1.5v] mt-2 ">${(product.price - (product.price * product.discountPercent) / 100).toFixed(2)}</p>
            {
              product.discountPercent > 0 &&
              <p className="text-xl sm:2xl md:text-[1.5vw] text-gray-500 line-through m-0">${product.price}</p>
            }
            {
              product.discountPercent > 0 &&
              <button className="bg-red-100 text-red-500 px-4 rounded-2xl">{product.discountPercent}%</button>
            }



          </div>
          <p className="w-[93%] border-b-2 border-gray-300 p-5">{product.description} </p>

          <div className="flex flex-col justify-start gap-10 mt-5">
            <div className="flex justify-start gap-5 border-b-2 border-gray-300 pb-7 ">
              {product.colors.map( (item, items)=> (
                <button className=" w-[75px] rounded-full "
                key={items}
                  style={{
                    background: item.toLowerCase(),
                    width: "50px",
                    height: '50px',
                    border: '1px solid black',

                  }}
                  onClick={() => {
                    // setProductColor(item.toLowerCase())
                    product.selectedColor=item
                  }}
                ></button>
              ))}


            </div>
            <div className="flex justify-start gap-5 border-b-2 border-gray-300 pb-7 ">
              {product.sizes.map( (item, items) =>
                <button onClick={()=>{
                  product.selectedSize=item
                }}
                className="bg-[#F0F0F0] w-[75px] rounded-3xl p-1 hover:bg-black hover:text-white "
                key={items}>{item}</button>
              )}
            </div>

            <AddtoCart product={product} />
          </div>
        </div>

      </div>
      <div className="flex justify-around  m-5  border-b-2">
        <p>Product Details</p>
        <p>Rating & Reviews</p>
        <p>FAQs</p>
      </div>


      <div className="p-5">
        <div className="flex justify-between p-5 ">
          <div className="text-3xl sm:text-3xl"
            style={{ fontWeight: 900 }}>
            All Reviews

          </div>
          <div className=' sm:flex-wrap flex justify-end gap-2'>
            <div className="flex gap-4">
              <button className="bg-[#F0F0F0] rounded-2xl w-9 h-6 sm:w-10 md:w-10  ">
                <Image src='/bal.png' width={0} height={0} alt='balance' sizes="100%" className="w-[60%] sm:w-[80%] md:w-[10%] lg:w-[95%]" ></Image>
              </button>
              <button className="bg-[#F0F0F0] rounded-2xl hidden sm:hidden md:block w-24 ">
                <div className="flex justify-center items-center gap-2"> <p> Latest </p> <GoChevronDown /></div>
              </button>
              <button className="bg-black text-white rounded-2xl w-32">Write a Review</button>
            </div>
          </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-2">
          <div className=" border border-gray-300 rounded-3xl w-[96%] flex flex-col justify-self-center p-5">
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
              <h1 className="  font-bold">Samantha D.</h1>
              <Image src='/tick.png' width={20} height={10} alt="tick"></Image>
            </div>
            <p className="pt-4">

              {` "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.
                                As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`}

            </p>
            <p className="mt-5">{`Posted on August 14, 2023`}</p>

          </div>
          <div className=" border border-gray-300 rounded-3xl w-[96%] flex flex-col justify-self-center p-3">
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

              {`"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself,
                                I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`}

            </p>
            <p className="mt-5">Posted on August 15, 2023</p>

          </div>
          <div className=" border border-gray-300 rounded-3xl w-[96%] flex flex-col justify-self-center p-5">
            <div className="flex space-x-1.5 mt-2">
              {[...Array(4)].map((_, i) => (
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
              <h1 className="font-bold ">Ethan R.</h1>
              <Image src='/tick.png' width={20} height={10} alt="tick"></Image>
            </div>
            <p className="pt-4">

              {`"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect.
                                I can see the designer's touch in every aspect of this shirt."`}

            </p>
            <p className="mt-5">{`Posted on August 16, 2023`}</p>

          </div>
          <div className=" border border-gray-300 rounded-3xl w-[96%] flex flex-col justify-self-center p-5">
            <div className="flex space-x-1.5 mt-2">
              {[...Array(4)].map((_, i) => (
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
              <h1 className="font-bold ">Olivia P.</h1>
              <Image src='/tick.png' width={20} height={10} alt="tick"></Image>
            </div>
            <p className="pt-4">

              {`"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. 
                                It's evident that the designer poured their creativity into making this t-shirt stand out."`}

            </p>
            <p className="mt-5">Posted on August 17, 2023</p>

          </div>
          <div className=" border border-gray-300 rounded-3xl w-[96%] flex flex-col justify-self-center p-5">
            <div className="flex space-x-1.5 mt-2">
              {[...Array(4)].map((_, i) => (
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
              <h1 className="font-bold ">Liam K.</h1>
              <Image src='/tick.png' width={20} height={10} alt="tick"></Image>
            </div>
            <p className="pt-4">

              {`"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill.
                                It's like wearing a piece of art that reflects my passion for both design and fashion."`}

            </p>
            <p className="mt-5">{`Posted on August 18, 2023`}</p>

          </div>
          <div className=" border border-gray-300 rounded-3xl w-[96%] flex flex-col justify-self-center p-5">
            <div className="flex space-x-1.5 mt-2">
              {[...Array(4)].map((_, i) => (
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
              <h1 className="font-bold ">Ava H.</h1>
              <Image src='/tick.png' width={20} height={10} alt="tick"></Image>
            </div>
            <p className="pt-4">

              {`"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. 
                                The intricate details and thoughtful layout of the design make this shirt a conversation starter."`}

            </p>
            <p className="mt-5">{`Posted on August 19, 2023`}</p>

          </div>
        </div>
        <div className="mt-6 relative z-10  text-center">
          <button className="w-[100%] sm:w-[100%]  sm:text-xl md:max-w-fit md:px-12  border  border-gray-300 rounded-full">
            Load More Reviews
          </button>
        </div>
      </div>

      {/* mid section */}
      <div className="mt-7 p-8">
        <h1 className="text-4xl text-center flex justify-center"
          style={{ fontWeight: 900 }}>
          You might also like</h1>
        <div className="grid grid-cols-1  sm:grid-cols-2   md:grid-cols-4 justify-center gap-4 mt-7">

          <div className="flex flex-col justify-center  mb-4 md:mb-0 hover:scale-105 active:scale-100 transition-all">
            <Image src="/blueT.png" width={300} height={300} alt="pic1" className="rounded-2xl" />
            <div >
              <p className="sm:2xl md:text-[1.5vw] py-4">Polo with Contrast Trims</p>

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
              <div className="flex gap-3">
                <p className="text-xl sm:2xl md:text-[1.5v] mt-2 ">$212</p>
                <p className="text-xl sm:2xl md:text-[1.5vw] text-gray-500 line-through mr-2 mt-2">$242</p>
                <button className="bg-red-100 text-red-500 w-20 rounded-3xl">20%</button>

              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col mb-4 md:mb-0 hover:scale-105 active:scale-100 transition-all">
            <Image src="/multiT.png" width={300} height={300} alt="pic2" className="object-cover" />
            <div >
              <p className="sm:2xl md:text-[1.5vw] py-4">Gradient Graphic T-shirt</p>


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
                  <p className="">3.5/</p>
                  <p className="text-gray-400">5</p>
                </div>
              </div>
              <div className="flex gap-5 mt-3">
                <p className="text-xl sm:2xl md:text-[1.5v]">$145</p>

              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col mb-4 md:mb-0 hover:scale-105 active:scale-100 transition-all">
            <Image src="/purpleT.png" width={300} height={300} alt="pic3" className="object-cover" />
            <div >
              <p className="sm:2xl md:text-[1.5vw] py-4 ">Polo with Tipping Details</p>

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
                  <p className="">4.5/</p>
                  <p className="text-gray-400">5</p>
                </div>
              </div>
              <div className="flex  mt-3">
                <p className="text-xl sm:2xl md:text-[1.5vw] ">$180</p>

              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col mb-4 md:mb-0 hover:scale-105 active:scale-100 transition-all">
            <Image src="/blackT.png" width={300} height={300} alt="pic4" className="object-cover" />
            <div >
              <p className="sm:2xl md:text-[1.5vw] py-4">Black Striped T-shirt</p>

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
                  <p className="">5.0/</p>
                  <p className="text-gray-400">5</p>


                </div>
              </div>
              <div className="flex gap-5 mt-3">
                <p className="text-xl sm:2xl md:text-[1.5vw] ">$120</p>
                <p className="text-xl sm:2xl md:text-[1.5vw] text-gray-300 line-through">$120</p>
                <button className="bg-red-100 text-red-500 w-20 rounded-3xl">30%</button>

              </div>
            </div>
          </div>
        </div>

      </div>
    


    </>
  )
}
export default Route