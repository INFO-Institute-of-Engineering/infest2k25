import AboutImg from "../../assets/about.jpg";
import { MdOutlineEventNote as Event } from "react-icons/md";
import { IoGiftOutline as Prize } from "react-icons/io5";

const About = () => {
  return (
    <div>
      <div id="about">
        <div className=" px-8 pt-8 flex md:flex-col justify-evenly gap-10 items-center">

          <div className=" w-[50%] md:w-[90%] gap-10 md:gap-5 flex flex-col">
            <h1 className=" text-[30px] font-bold bg-gradient-to-r from-blue-500 via-green-500 to-green-500 bg-clip-text text-transparent">About Infest</h1>

            <p className=" text-gray-700">Welcome to <strong>Infest 2K24</strong> , the National Level Technical Symposium
              hosted by Info Institute of Engineering! We're excited to provide a
              platform for aspiring engineers and tech enthusiasts from all
              disciplines to showcase their talent and compete for amazing prizes.
            </p>

            <p className=" text-gray-700">Calling all students from <strong> CSE, IT, AIDS, ECE, EEE, MECH, S&H, and
              MBA! </strong>Are you passionate about technology? Do you have groundbreaking
              research or innovative projects waiting to be unveiled? Infest 2024
              offers you the perfect opportunity to:
            </p>

            <p className=" text-gray-700">
              Infest 2K24 is more than just a competition; it's a vibrant community
              of tech enthusiasts coming together to learn, share, and innovate.
              Join us for an experience that will never fades away.
            </p>
            
          </div>

          <div className="relative shadow-2xl">
            <img src={AboutImg} width={500} className="rounded-lg" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-green-500 opacity-50 rounded-[10px] "></div>

            <div className=" absolute top-[60%] right-[50%] w-[60%] md:w-[70%] md:right-[40%]">
              <div className=" bg-white p-1 px-2 m-2 w-auto rounded-md font-bold shadow-xl border-gray-200 border">
                <p className=" flex items-center gap-2 md:text-[14px]"><Event className=" text-blue-500"/>25+ Events on Infest 2K24</p>
              </div>
              <div className=" bg-white p-1 px-2 m-2 w-[75%] rounded-md font-bold  shadow-xl border-gray-200 border">
                <p className=" flex items-center gap-2 md:text-[14px]"><Prize className=" text-yellow-600"/>Exiciting Prizes</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
