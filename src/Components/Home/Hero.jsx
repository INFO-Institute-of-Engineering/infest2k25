import InfoLogo from "../../assets/logo.png";

const Hero = () => {
  return (
    <div>
        <div>
            <div className="mx-auto my-[3%]">
                <img src={InfoLogo} alt="Infest_2k24" className="mx-auto w-[30%]"/>
                <h1 className="text-center my-[1.5%] text-[25px] text-green-500 font-bold">23rd April</h1>

                <div className=" flex flex-row justify-evenly items-center mx-auto text-center my-[2%] w-[38%] font-semibold">
                    <div className=" text-[20px] hover:shadow-lg px-[50px] py-[15px] border-[2px] rounded-[8px] text-white bg-blue-500 border-blue-500 cursor-pointer">
                        <p>Register&#160;Events</p>
                    </div>

                    <div className=" text-[20px] hover:shadow-lg px-[50px] py-[15px] border-[2px] rounded-[8px] border-green-500 cursor-pointer">
                        <p>Contact&#160;Us</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero