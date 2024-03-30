import TechCardContent from "./TechCardContent";
import { FaArrowRight as Register } from "react-icons/fa";
import { Link } from "react-router-dom";

import {hoverbottom,
    bottomshade,
    topshade,
} from "../../../assets/index.js";

import { useState } from "react";

const TechCard = () => {
  const [cardshade, setCardShade] = useState("");

  return (
    <div>
      <div className=" grid grid-cols-2 gap-[10%] w-[70%] mx-auto md:grid-cols-1 cursor-pointer z-10">
        {TechCardContent.map((content) => (
          <Link
            to={`/event/tech/${content.eventTitle}`}
            key={content.eventTitle}
            className={`relative hover:shadow-2xl z-10 border m-4 rounded-[1px] overflow-hidden h-[50vh] bg-cover bg-center w-full `}
            style={{ backgroundImage: `url(${content.img})` }}
            onMouseOver={() => setCardShade(content.eventTitle)}
            onMouseLeave={() => setCardShade("")}
          >
            <div className=" absolute bg-gray-400 bg-opacity-25 top-0 w-full h-full">
            </div>

            {cardshade === content.eventTitle ? (
              <div className="absolute z-50 top-[22%] left-[5%]  p-6 flex flex-col justify-between gap-4 w-[80%]">
                <h1 className=" text-[18px] font-extrabold bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent">
                  {content.eventTitle}
                </h1>
                <p className=" text-white font-normal text-[12px] custom-truncate">
                  {content.eventDesc}
                </p>
                <p className=" text-[13px] text-center flex items-center font-bold  w-[60%] p-3 rounded-[2px] bg-white cursor-pointer hover:bg-transparent hover:border border-gray-500 hover:shadow-lg">
                  Register Now&#160;
                  <Register />
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full w-full">
                <h1 className="text-center text-[22px] font-extrabold text-white bg-clip-text text-transparent">{content.eventTitle}</h1>
              </div>
            )}

            {cardshade === content.eventTitle && (
              <div className="absolute duration-500 top-[-30px] right-0">
                <img src={topshade} alt="" />
              </div>
            )}

            {cardshade === content.eventTitle ? (
              <div className="absolute duration-500 bottom-[-30px] left-0 ">
                <img src={hoverbottom} alt="" />
              </div>
            ) : (
              <div className="absolute duration-500 bottom-[-15px] left-0">
                <img src={bottomshade} alt="" />
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
