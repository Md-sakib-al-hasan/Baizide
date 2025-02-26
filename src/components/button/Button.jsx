/* eslint-disable react/prop-types */

import { IoIosArrowRoundForward } from "react-icons/io"


const Button = ({title,}) => {
  return (
    <button className="p-2 text-md  bg-primary text-white flex justify-center items-center pl-4 gap-1 rounded-2xl">
     <span className="block"> {title}</span><span className="block "> <IoIosArrowRoundForward size={22} /></span>
    </button>
  )
}

export default Button
