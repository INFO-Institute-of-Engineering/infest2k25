import { useState } from "react";
import ElectricalCard from "./ELECTRICAL/ElectricalCard.jsx";
import TechCard from "./TECH/TechCard.jsx";

const Event = () => {

  const [showEvent, setShowEvents] = useState("tech");
  const ClickedEvents = () => {
    switch (showEvent) {
      case "tech":
        return <TechCard />;
      case "electrical":
        return <ElectricalCard />;
    }
  };

  return (
    <div>
      <div>
        <div>

          <div className="my-4 text-[60px] font-extrabold text-center [-webkit-text-stroke:1px_#0092ff] text-transparent animate-colorChange">E V E N T S</div>

          <div className=" font-medium text-center">
            <p>Explore our Events and Register now !</p>
          </div>

          <div className=" flex items-center justify-center">
            <div className=" flex justify-between w-[85%] my-10 border p-6 rounded-md font-semibold">

              <div className={`cursor-pointer ${showEvent === "tech" && ""} `} onClick={() => setShowEvents("tech")} >
                CSE/IT/AIDS
              </div>

              <div className={`cursor-pointer ${showEvent === "electrical" && ""}`} onClick={() => setShowEvents("electrical")} >
                ECE/EEE
              </div>

              <div className={`cursor-pointer ${showEvent === "mech" && ""}`} onClick={() => setShowEvents("mech")} >
                MECH
              </div>

              <div className={`cursor-pointer ${showEvent === "sh" && ""}`} onClick={() => setShowEvents("sh")} >
                S&H
              </div>

              <div className={`cursor-pointer ${showEvent === "mba" && ""}`} onClick={() => setShowEvents("mba")} >
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