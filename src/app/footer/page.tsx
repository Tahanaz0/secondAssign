import Image from "next/image"



function Footer() {
  return (


    <div className=' bg-[#F0F0F0]  '>
      <div className="flex flex-col sm:flex-col md:flex-row justify-evenly m-8 border-b-2 border-gray-400 ">
        <div>
          <ul className="pt-16 flex flex-col justify-evenly px-5 gap-5  w-96">
            <li className="font-bold  text-xl sm:text-xl md:text-xl ">SHOP.COM</li>

            <li className="sm:w-[120%] md:w-[80%] ">
              We have clothes that suits your style and which {`you’re`} proud to wear. From women to men.</li>


            <div className="flex gap-3 w-[150px]">
              <Image src='/1.png' alt="aerow" width={30} height={30} className=""></Image>
              <Image src='/2.png' alt="aerow" width={30} height={30} className=""></Image>
              <Image src='/3.png' alt="aerow" width={30} height={30} className=""></Image>
              <Image src='/4.png' alt="aerow" width={30} height={30} className=""></Image>

            </div>



          </ul>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <ul className="pt-16  flex flex-col justify-evenly gap-5">
              <li className=" text-xl sm:text-xl md:text-2xl">Company</li>
              <li>About </li>
              <li>Features</li>
              <li>Works</li>
              <li>Careere</li>
            </ul>
          </div>
          <div>
            <ul className="pt-16  flex flex-col justify-evenly gap-5">
              <li className=" text-xl sm:text-xl md:text-2xl">Help</li>
              <li>Customer Support </li>
              <li>Delivery Dtails</li>
              <li>Terms and Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <ul className="pt-16  flex flex-col justify-evenly gap-5">
              <li className=" text-xl sm:text-xl md:text-2xl">F A Q</li>
              <li>Acount </li>
              <li>Manage and Delivery</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
            </div>
            <div>
            <ul className="pt-16   flex flex-col justify-evenly gap-5">
              <li className=" text-xl sm:text-xl md:text-2xl">Resources</li>
              <li>Free eBooks </li>
              <li>Development Tutorial</li>
              <li>How to Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>

    </div >

  )
}
export default Footer