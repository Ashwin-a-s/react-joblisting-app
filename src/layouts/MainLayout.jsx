import Navbar from "../components/Navbar"
import {NavLink,Outlet} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <ToastContainer />
    </div>
  )
}

export default MainLayout;