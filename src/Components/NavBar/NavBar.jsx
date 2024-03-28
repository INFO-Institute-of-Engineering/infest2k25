import { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import { RiMenu4Line as Menu } from "react-icons/ri";
import MenuItems from './MenuItems';
<<<<<<< HEAD
import { useLocation } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> 3d1aa2be49f6a9d42519ab1cf103711a98929e55


const NavBar = () => {
  const location = useLocation();
  const [ShowMenu,setShowMenu]=useState(false);
  useEffect(()=>{
    setShowMenu(false);
  },[location.pathname]);
  
  return (
    <div>
      <div className=" flex justify-between p-8 px-20 sticky">
        <Link to={'/'} className=' cursor-pointer'><img src={Logo} width={80} /></Link>
        <div className=' text-[24px] cursor-pointer duration-500 ease-in'>
          {
            ShowMenu===false ? <Menu className='text-[32px]' onClick={()=>setShowMenu((prev)=>!prev)}/> : <MenuItems setShowMenu={setShowMenu} />
          }
        </div>
      </div>

    </div>

  )
}

export default NavBar