import TechCard from "./TECH/TechCard.jsx";

const Event = () => {
  return (
    <div>
      <div>
          <div>

            <div className="my-4 relative text-[60px] font-extrabold text-center [-webkit-text-stroke:1px_#0092ff] text-transparent">E V E N T S<p className="[-webkit-text-stroke:1px_#000] font-extrabold text-black text-[30px] text-center absolute text-ellipsis top-[calc(100%-50px)] left-0 right-0 mx-auto z-10">EVENTS</p>
            </div>

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
            </div>

          </div>
      </div>
    </div>
  )
}

export default Event