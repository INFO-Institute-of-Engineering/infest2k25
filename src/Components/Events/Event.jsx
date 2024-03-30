import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

const Event = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showEvent, setShowEvents] = useState("tech");
  useEffect(() => {
    switch (location.pathname) {
      case "/event/tech":
        setShowEvents("tech");
        break;
      case "/event/electrical":
        setShowEvents("electrical");
        break;
      case "/event/mba":
        setShowEvents("mba");
        break;
      case "/event/sh":
        setShowEvents("sh");
        break;
      case "/event/mech":
        setShowEvents("mech");
        break;
      default:
        setShowEvents("tech");
        break;
    }
  }, []);



  document.documentElement.scrollTop = 0;
  return (
    <div>
      <div className="mt-[10%]">
        <div>
          <div className="my-4 text-[60px] font-extrabold text-center [-webkit-text-stroke:1px_#0092ff] text-transparent animate-colorChange">
            E V E N T S
          </div>

          <div className=" font-medium text-center">
            <p>Explore our Events and Register now !</p>
          </div>

          <div className=" flex items-center justify-center">
            <div className=" flex justify-between w-[85%] my-10 border p-6 rounded-md font-semibold">
              <Link
                to={"/event/tech"}
                className={`cursor-pointer ${showEvent === "tech" &&
                  "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                  } duration-700 ease-linear transition px-[2%] py-[1%] rounded-[25px]`}
                onClick={() => setShowEvents("tech")}
              >
                CSE/IT/AIDS
              </Link>

              <Link
                to={"/event/electrical"}
                className={`cursor-pointer ${showEvent === "electrical" &&
                  "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                  } duration-700 ease-linear transition px-[2%] py-[1%] rounded-[25px]`}
                onClick={() => setShowEvents("electrical")}
              >
                ECE/EEE
              </Link>

              <Link
                to={"/event/mech"}
                className={`cursor-pointer ${showEvent === "mech" &&
                  "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                  } duration-700 ease-linear transition px-[2%] py-[1%] rounded-[25px]`}
                onClick={() => setShowEvents("mech")}
              >
                MECH
              </Link>

              <Link
                to={"/event/sh"}
                className={`cursor-pointer ${showEvent === "sh" &&
                  "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                  } duration-700 ease-linear transition px-[2%] py-[1%] rounded-[25px]`}
                onClick={() => setShowEvents("sh")}
              >
                S&H
              </Link>

              <Link
                to={"/event/mba"}
                className={`cursor-pointer ${showEvent === "mba" &&
                  "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                  } duration-700 ease-linear transition px-[2%] py-[1%] rounded-[25px]`}
                onClick={() => setShowEvents("mba")}
              >
                MBA
              </Link>
            </div>
          </div>

          <div>
            <Outlet />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Event;
