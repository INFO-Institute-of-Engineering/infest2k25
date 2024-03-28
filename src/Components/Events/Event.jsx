import { useState } from "react";
import ElectricalCard from "./ELECTRICAL/ElectricalCard.jsx";
import TechCard from "./TECH/TechCard.jsx";
import Mech from "./MECH/MechCard.jsx";
import Mba from "./MBA/MbaCard.jsx";
import Sh from "./SH/ShCard.jsx";

const Event = () => {

  const [showEvent, setShowEvents] = useState("tech");
  const ClickedEvents = () => {
    switch (showEvent) {
      case "tech":
        return <TechCard />;
      case "electrical":
        return <ElectricalCard />;
      case "mech":
        return <Mech/>;
      case "mba":
        return <Mba/>;
      case "sh":
        return <Sh/>;
    }
  };

  return (
    <div>
      <div className="">
        <div>

          <div className="my-4 text-[60px] font-extrabold text-center [-webkit-text-stroke:1px_#0092ff] text-transparent animate-colorChange">E V E N T S</div>

          <div className=" font-medium text-center">
            <p>Explore our Events and Register now !</p>
          </div>

          <div className=" flex items-center justify-center">
            <div className=" flex justify-between w-[85%] my-10 border p-6 rounded-md font-semibold">

              <div className={`cursor-pointer ${showEvent === "tech" && "bg-gradient-to-r from-green-500 to-blue-500 text-white"} duration-700 ease-linear transition px-[2%] py-[1%] rounded-[25px]`} onClick={() => setShowEvents("tech")} >
                CSE/IT/AIDS
              </div>

              <div className={`cursor-pointer ${showEvent === "electrical" && "bg-gradient-to-r from-green-500 to-blue-500 text-white"} duration-700 ease-linear transition px-[2%] py-[1%] rounded-[25px]`} onClick={() => setShowEvents("electrical")} >
                ECE/EEE
              </div>

              <div className={`cursor-pointer ${showEvent === "mech" && "bg-gradient-to-r from-green-500 to-blue-500 text-white"} duration-700 ease-linear transition px-[2%] py-[1%] rounded-[25px]`} onClick={() => setShowEvents("mech")} >
                MECH
              </div>

              <div className={`cursor-pointer ${showEvent === "sh" && "bg-gradient-to-r from-green-500 to-blue-500 text-white"} duration-700 ease-linear transition px-[2%] py-[1%] rounded-[25px]`} onClick={() => setShowEvents("sh")} >
                S&H
              </div>

              <div className={`cursor-pointer ${showEvent === "mba" && "bg-gradient-to-r from-green-500 to-blue-500 text-white"} duration-700 ease-linear transition px-[2%] py-[1%] rounded-[25px]`} onClick={() => setShowEvents("mba")} >
                MBA
              </div>

            </div>
          </div>

          <div>
            {
              ClickedEvents()
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Event