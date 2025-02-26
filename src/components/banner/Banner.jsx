import Button from "../button/Button"


const Banner = () => {
  return (
    <div>
        <div className="w-full relative ">
            <img src="./Banner.jpg" alt="banner" />
            <div className="absolute inset-0  container top-1/2 -translate-y-1/2    space-y-5  ">
               <div className=" flex items-center  ">
                  <span className="rounded-full"><img className="rounded-full w-7" src="./img1.jpg" alt="" /></span>
                  <span className="rounded-full"><img className="rounded-full w-7" src="./img2.jpg" alt="" /></span>
                  <span className="rounded-full"><img className="rounded-full w-7" src="./img3.jpg" alt="" /></span>
                  <span className="bg-white text-sm py-1 rounded-lg px-2  ">26k Happy Customers</span>
               </div>
               <h2 className="text-white text-5xl font-bold">Breathe better,<br></br> live better!</h2>
               <p className="text-white">{`Discover how effortless breathing can enhance your life. Take the first step Today!`}</p>
               <Button title="Shop Now"/>
            </div>
        </div>
      
    </div>
  )
}

export default Banner
