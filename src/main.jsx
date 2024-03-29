import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Event from './Components/Events/Event.jsx';
import App from './App.jsx';
import EventDetails from './Components/Events/EventDetails.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/event",
        element:<Event/>,
      },
      {
        path:"/event/tech/:techTitle",
        element:<EventDetails/>,
      },
      {
        path:"/event/electrical/:electricalTitle",
        element:<EventDetails/>,
      },
      {
        path:"/event/mba/:mbaTitle",
        element:<EventDetails/>,
      },
      {
        path:"/event/sh/:shTitle",
        element:<EventDetails/>,
      },
      {
        path:"/event/mech/:mechTitle",
        element:<EventDetails/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
