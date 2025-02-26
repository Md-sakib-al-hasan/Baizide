import { IoArrowBackCircleOutline, IoArrowForwardCircle } from "react-icons/io5";
import img1 from "../../assets/choose/img1.jpg"
import img2 from "../../assets/choose/img2.jpg"

const Choose = () => {
  return (
    <div>
         <div className="text-center space-y-4 container  flex flex-col items-center relative pb-16 ">
     <h2 className="text-4xl font-semibold">Why Choose Our <br></br> Nasal Clip?</h2>
     <p className="w-1/2">Our nasal clip provides a simple, effective solution for snoring, congestion, and improved airflow during activities, offering comfort and relief.</p> 
     <div className="absolute  bottom-2 right-1/4 flex text-primary ">
     <IoArrowBackCircleOutline size={30} />
     <IoArrowForwardCircle size={30} />
     </div>
    
    </div>
    <div className="flex  justify-end">
        <img src={img2} alt="" />
        <img src={img1} alt="" />
     </div>
    </div>
  )
}

export default Choose;
