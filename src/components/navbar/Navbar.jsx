import { IoIosArrowRoundForward } from "react-icons/io"


const naverarray = [
    "home","Why it Works","Features","How it works","Testimoniasl","Before & After","Science", "FAQs"
]

const Navbar = () => {
  return (
    <nav className="shadow-md shadow-black">
       <ul className="container  flex  justify-between py-4">
        <li className="text-3xl font-bold text-primary ">logo</li>
        <li className="flex text-lg  gap-5 items-center">
        {
            naverarray.map((item,index) => <span key={index}>{item}</span>)
        }
         <button className="bg-[#FF6600] flex py-2 rounded-2xl px-4 text-white gap-2 ">
                 contact us <span><IoIosArrowRoundForward size={22} /></span>
        </button>
        </li>
       </ul>
    </nav>
  )
}

export default Navbar;
