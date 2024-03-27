import Logo from '../../assets/logo.png'

const NavBar = () => {
  return (
    <div>
        <div className=" p-8">
            <div className=" flex justify-around">
                <p className=' cursor-pointer text-gray-700 font-medium'>Home</p>
                <p className=' cursor-pointer text-gray-700 font-medium'>About</p>
                <img src={Logo} width={80}/>
                <p className=' cursor-pointer text-gray-700 font-medium'>Events</p>
                <p className=' cursor-pointer text-gray-700 font-medium'>Contact</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar