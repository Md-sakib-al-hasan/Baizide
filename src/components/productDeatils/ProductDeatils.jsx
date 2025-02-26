import { PiSealCheckFill } from "react-icons/pi"
import mainheadphone from "../../assets/product/headphone1.jpg" 
import mainheadphTwo from "../../assets/product/headphone2.jpg" 
import mainheadphthree from "../../assets/product/headphone3.jpg" 
import mainheadphfoure from "../../assets/product/headphone4.jpg" 
import mainheadphfive from "../../assets/product/headphone5.jpg" 
import { FaStar } from "react-icons/fa"
import { IoIosArrowDown, IoIosArrowRoundForward } from "react-icons/io"

//img
import img1 from "../../assets/product/img1.jpg"
import img2 from "../../assets/product/img2.jpg"
import img3 from "../../assets/product/img3.jpg"
import img4 from "../../assets/product/img4.jpg"
import img5 from "../../assets/product/img5.jpg"


const ProductDeatils = () => {
  return (
    <div className="grid grid-cols-2 gap-16 container py-16">
       <div>
         <img className="rounded-md" src={mainheadphTwo} alt="" />
         <div className="flex mt-2">
         <img className="w-28" src={mainheadphone} alt="" />
         <img className="w-28" src={mainheadphthree} alt="" />
         <img className="w-28" src={mainheadphfoure} alt="" />
         <img className="w-28" src={mainheadphfive} alt="" />
         </div>
       </div>
       <div className=" bg-white  border-none space-y-4" >
           <div className="flex gap-1 items-cente ">
              <span><FaStar  className="text-yellow-400" size={20} /></span>
              <span><FaStar  className="text-yellow-400" size={20} /></span>
              <span><FaStar  className="text-yellow-400" size={20} /></span>
              <span><FaStar  className="text-yellow-400" size={20} /></span>
              <span className="font-bold">4.5</span>
              <span className="text-sm mt-1">{`(500+Reviews)`}</span>
           </div>
           <h2 className="text-3xl font-semibold ">Noseclip</h2>
           <h4 className="space-x-3">
            <span className="text-4xl font-semibold text-[#6b2b00]">$12.00</span>
            <span className="text-xl line-through">$20.00</span>
            <button className="text-white bg-primary px-2 py-1 rounded-md text-">SAVE ME</button> 
           </h4>
           <h5 className="text-black text-3xl font-bold">Description:</h5>
           <p>
           A nasal clip is a small device typically used to pinch or secure the nostrils for various purposes, such as during sports, medical treatments, or personal health practices. It is usually made of flexible or padded materials to ensure comfort and a secure fit. Common uses include:
           </p>
           <div className="space-y-4">
              <div className="flex justify-between">
                <span className="flex justify-between items-center gap-2"> <PiSealCheckFill size={20} className="text-primary" />Boost performance <span></span></span>
                <span  className="flex justify-between items-center gap-2"> <PiSealCheckFill size={20} className="text-primary" /> <span className="flex-1">Stop snoring</span></span>
              </div>
              <div className="flex justify-between">
              <span  className="flex justify-between items-center gap-2"> <PiSealCheckFill size={20} className="text-primary" /> <span className="flex-1">Optimized Airflow</span></span>
              <span  className="flex justify-between items-center gap-2"> <PiSealCheckFill size={20} className="text-primary" /> <span className="flex-1">100% Drug Free</span></span>
              </div>
              <button className="py-3 rounded-full bg-primary flex items-center justify-center text-white  w-full">
                 Add to Card <IoIosArrowRoundForward size={22} />
              </button>
              <div className="flex justify-between items-center">
                 <img src={img1} alt="" />
                 <img src={img2} alt="" />
                 <img src={img3} alt="" />
                 <img src={img4} alt="" />
                 <img src={img5} alt="" />
              </div>
              <ul className=" space-y-5 pt-10">
                  <li className="flex items-center justify-between "><span>Sizing information</span> <span><IoIosArrowDown /></span></li>
                  <li  className="flex items-center justify-between "><span>Free resizing</span> <span><IoIosArrowDown /></span></li>
                  <li  className="flex items-center justify-between "><span>Money back guarantee & free returns</span> <span><IoIosArrowDown /></span></li>
              </ul>
           </div>
       </div>
    </div>
  )
}

export default ProductDeatils
