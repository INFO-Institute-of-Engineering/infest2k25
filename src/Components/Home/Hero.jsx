import InfoLogo from "../../assets/logo.png";

const Hero = () => {

    const NotSelected = {
        "-webkit-user-select": "none",    
        "-moz-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
    };

  return (
    <div>
        <div>
            <div className="mx-auto my-[3%]">
                <img src={InfoLogo} alt="Infest_2k24" style={NotSelected} className="mx-auto w-[30%] sm:w-[60%]" />
                <h1 className="text-center my-[1.5%] text-[25px] text-green-500 font-bold" style={NotSelected}>23rd April 2024</h1>

                <div className=" flex flex-row sm:flex-col  justify-evenly items-center mx-auto text-center my-[2%] w-[45%] font-semibold">

                    <div className=" text-[20px] hover:shadow-lg sm:my-[5%] w-[250px] px-[30px] py-[15px] border-[2px] rounded-[8px] text-white bg-blue-500 border-blue-500 cursor-pointer">
                        <p>Register&#160;Events</p>
                    </div>

                    <div className=" text-[20px] hover:shadow-lg sm:my-[5%] w-[250px] px-[30px] py-[15px] border-[2px] rounded-[8px] border-green-500 cursor-pointer text-green-500">
                        <p>Contact&#160;Us</p>
                    </div>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero