import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar"

const App = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App;