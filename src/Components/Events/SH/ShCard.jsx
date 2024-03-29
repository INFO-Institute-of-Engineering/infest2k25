import { FaArrowRight as Register } from "react-icons/fa";
import ShCardContent from "./ShCardContent.js";
import { Link } from "react-router-dom";

const ShCard = () => {
  return (
    <div>
        <div className=" grid grid-cols-3 w-[85%] mx-auto md:grid-cols-1">
            {
                ShCardContent.map((content)=>(
                    
                    <Link to={`/event/sh/${content.eventTitle}`} key={content.eventTitle} className=" border rounded-md p-6 m-4 flex flex-col justify-between gap-4 hover:shadow-xl">
                        <h1 className=" text-[18px] font-extrabold bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent">{content.eventTitle}</h1>
                        <p className=" text-gray-600 font-normal text-[14px]">{content.eventDesc}</p>
                        <p className=" text-[14px] flex items-center font-bold border w-[60%] p-3 rounded-lg hover:bg-gradient-to-l from-blue-500 to-green-500 cursor-pointer hover:text-white">Register Now&#160;<Register/></p>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default ShCard;