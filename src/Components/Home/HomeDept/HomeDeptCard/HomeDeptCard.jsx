import Tech from "../../../../assets/Dept/tech.jpg";
import Electrial from "../../../../assets/Dept/chip.jpg";
import Mech from "../../../../assets/Dept/mech.jpg";
import MBA from "../../../../assets/Dept/mba.jpg";
import SH from "../../../../assets/Dept/sh.jpg";
import { useState } from "react";

const HomeDeptCard = () => {
  const [dept, setDept] = useState("tech");
  return (
    <div>

      <div className=" flex gap-2 justify-center">

        <div
          className={`${dept === "tech" ? "w-[30%]" : "w-[8%]"} relative duration-500 h-[65vh]  rounded-[7px] overflow-hidden`}
          onMouseOver={() => { setDept("tech") }}
        >
          <img src={Tech} alt="Tech_Departments" className=" object-cover h-full w-full" />
           <div className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-50 rounded-[7px] flex justify-center items-center">
            <p className={`${dept === "tech" ? "" : "rotate-[-90deg]"} ${dept !== "tech" && "animate-pulse"}  duration-500 text-white font-bold text-[25px] text-center `} >CSE&#160;/&#160;IT&#160;/&#160;AI&DS</p>
          </div>
        </div>

        <div
          className={`${dept === "electrical" ? "w-[30%]" : "w-[8%]"} relative duration-500 h-[65vh]  rounded-[7px] overflow-hidden`}
          onMouseOver={() => { setDept("electrical") }}
        >
          <img src={Electrial} alt="Electrial_Departments" className=" object-cover h-full w-full" />
           <div className="absolute top-0 left-0 w-full h-full bg-green-400 bg-opacity-50 rounded-[7px] flex justify-center items-center">
            <p className={`${dept === "electrical" ? "" : "rotate-[-90deg]"} ${dept !== "electrical" && "animate-pulse"}  duration-500 text-white font-bold text-[25px] text-center`}>EEE&#160;/&#160;ECE</p>
          </div>
        </div>

        <div
          className={`${dept === "mech" ? "w-[30%]" : "w-[8%]"} relative duration-500 h-[65vh]  rounded-[7px] overflow-hidden`}
          onMouseOver={() => { setDept("mech") }}
        >
          <img src={Mech} alt="Mech_Departments" className=" object-cover h-full w-full" />
           <div className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-50 rounded-[7px] flex justify-center items-center">
            <p className={`${dept === "mech" ? "" : "rotate-[-90deg]"} ${dept !== "mech" && "animate-pulse"}  duration-500 text-white font-bold text-[25px] text-center`}>MECH</p>
          </div>
        </div>

        <div
          className={`${dept === "sh" ? "w-[30%]" : "w-[8%]"} relative duration-500 h-[65vh]  rounded-[7px] overflow-hidden`}
          onMouseOver={() => { setDept("sh") }}
        >
          <img src={SH} alt="SH_Departments" className=" object-cover h-full w-full" />
           <div className="absolute top-0 left-0 w-full h-full bg-green-400 bg-opacity-50 rounded-[7px] flex justify-center items-center">
            <p className={`${dept === "sh" ? "" : "rotate-[-90deg]"} ${dept !== "sh" && "animate-pulse"}  duration-500 text-white font-bold text-[25px] text-center`}>S&H</p>
          </div>
        </div>

        <div
          className={`${dept === "mba" ? "w-[30%]" : "w-[8%]"} relative duration-500 h-[65vh]  rounded-[7px] overflow-hidden`}
          onMouseOver={() => { setDept("mba") }}
        >
          <img src={MBA} alt="MBA_Departments" className=" object-cover h-full w-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-50 rounded-[7px] flex justify-center items-center">
            <p className={`${dept === "mba" ? "" : "rotate-[-90deg]"} ${dept !== "mba" && "animate-pulse"}  duration-500 text-white font-bold text-[25px] text-center`}>MBA</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default HomeDeptCard;