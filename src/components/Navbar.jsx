import React from 'react'
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const isActivePage = ({ isActive }) =>
         isActive?"text-lg text-white bg-black hover:bg-gray-700 px-3 py-2 rounded-lg":"text-lg text-white hover:bg-gray-800 px-3 py-2 rounded-lg";
  return (
    <>
        <nav className="bg-indigo-700">
        <div className="flex h-20 border-b border-white md:justify-around p-4 items-center">
            <NavLink to="/" className="flex items-center justify-start md:justify-center text-white w-1/2">
                <img className="h-10 w-auto" src={logo} alt="logo"/>

                <span className="hidden md:block ml-2 text-2xl">React Jobs</span>
            </NavLink>
            <div className="flex w-1/2 items-center justify-end md:justify-center space-x-6">
                <NavLink to="/" className={isActivePage
            }>Home</NavLink>
            <NavLink to="/jobs" className={isActivePage
            }>Jobs</NavLink>
            <NavLink to="/Add-Job" className={isActivePage
            }>Add Job</NavLink>
            </div>
            {/* <div className="flex w-1/2 mr-4 justify-end md:hidden">
                <button className="text-white text-2xl ">
                    &#9776;
                </button>
            </div> */}
        </div>
    </nav>
    </>
  )
}

export default Navbar