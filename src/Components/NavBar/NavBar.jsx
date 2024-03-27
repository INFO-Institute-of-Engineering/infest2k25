import Logo from '../../assets/logo.png'

const NavBar = () => {
  return (
    <div>
      <div className=" p-8 flex justify-between px-14">
        <div>
          <img src={Logo} width={80} />
        </div>
        <div className=" flex gap-[120px]">
          <p className=' cursor-pointer text-gray-700 font-medium'>Home</p>
          <p className=' cursor-pointer text-gray-700 font-medium'>About</p>
          <p className=' cursor-pointer text-gray-700 font-medium'>Events</p>
          <p className=' cursor-pointer text-gray-700 font-medium'>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar