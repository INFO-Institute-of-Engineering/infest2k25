import Logo from '../../assets/logo.png'
import { RiMenu4Line as Menu } from "react-icons/ri";

const NavBar = () => {
  return (
    <div>
      <div className=" flex justify-between p-8 px-20">
        <img src={Logo} width={80} />
        <div className=' text-[24px]'>
          <Menu/>
        </div>
      </div>

    </div>

  )
}

export default NavBar