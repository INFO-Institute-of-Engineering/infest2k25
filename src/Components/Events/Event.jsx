import ElectricalCard from "./ELECTRICAL/ElectricalCard.jsx";
import TechCard from "./TECH/TechCard.jsx";



const Event = () => {
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
                <p className="">CSE/IT/AIDS</p>
                <p>ECE/EEE</p>
                <p>MECH</p>
                <p>S&H</p>
                <p>MBA</p>
              </div>
            </div>

            <div>
              <TechCard/>
              <ElectricalCard/>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Event