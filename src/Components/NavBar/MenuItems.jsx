import { RxCross2 as Cross } from "react-icons/rx";
import {Link} from "react-router-dom";
const MenuItems = ({setShowMenu}) => {
    
    return (
        <div className=" fixed w-[25%] sm:w-[90%] duration-500  bg-blue-500 top-0 right-0 py-[2.5%] pt-[2.5%] h-full z-50 cursor-default">
            <Cross className=" float-right mr-[25%] sm:mr-[16%] cursor-pointer sm:mt-[5%] mt-[1%] text-black text-[32px]" onClick={()=>setShowMenu((prev)=>!prev)}/>
            <div className=' flex flex-col gap-10 p-5 justify-center rounded-md pl-[25%] text-[18px] mt-[30%]'>
                <Link to={"/"} className=' font-medium text-white cursor-pointer'>Home</Link>
                <p className=' font-medium text-white cursor-pointer'>About</p>
                <Link to={"/event/tech"} className='font-medium text-white cursor-pointer'>Events</Link>
                <p className=' font-medium text-white cursor-pointer'>Contact</p>
            </div>
        </div>
    )
}

export default MenuItems;