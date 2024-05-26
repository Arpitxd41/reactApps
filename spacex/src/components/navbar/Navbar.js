import React from "react"; 
import { useState } from "react";
import "./Navbar.css";
function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar md:my-4 flex flex-row justify-between text-gray-200">
        <div className="p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="250.0" height="30.8" viewBox="394.847 1264.878 2478.014 305.642" id="spacex">
            <path fill="#005288" d="M972.503 1377.719H763.261l-7.474 5.979v186.075h57.542v-70.246l5.23-5.23h153.942c38.858 0 56.794-10.461 56.794-37.363v-42.596c.002-26.157-17.934-36.619-56.792-36.619m0 68.75c0 12.703-8.221 14.945-26.903 14.945H819.308l-5.979-5.23v-39.606l5.23-5.231h127.039c17.936 0 26.902 2.242 26.902 14.945l.003 20.177zM1135.412 1412.841l50.068 73.234-2.989 6.726h-110.599l-28.397 35.123h164.403l11.957 6.725 25.408 35.123h66.509l-145.721-194.295M1795.268 1532.407v-52.309l5.979-5.232h111.347v-32.881h-176.362v127.787h260.058v-32.881h-194.296M1736.232 1377.719h262.299v35.87h-262.299zM1444.043 1412.094h211.482c-2.989-26.902-20.177-34.375-62.025-34.375h-151.699c-47.826 0-62.772 8.968-62.772 45.584v101.631c0 35.871 14.946 45.586 62.772 45.586H1593.5c42.596 0 59.036-8.221 60.531-35.871h-209.988l-5.979-5.979v-112.092M613.803 1452.448H460.609l-4.484-5.23v-32.881l4.484-3.736h206.999l2.989-6.726c-6.726-17.936-25.408-26.902-59.036-26.902H467.334c-47.826 0-62.772 8.967-62.772 45.583v21.672c0 35.871 14.946 45.586 62.772 45.586h153.195l4.483 4.482v34.375l-3.736 5.232H400.078s-5.23 2.988-5.23 3.736c3.736 25.408 20.924 32.133 62.024 32.133h156.932c47.826 0 63.52-8.967 63.52-45.584v-26.156c-.001-35.869-15.694-45.584-63.521-45.584M2163.682 1376.972h-86.686l-4.483 8.967 95.652 70.246c17.936-10.463 38.112-20.924 59.036-31.387M2241.4 1508.495l84.444 61.277h86.686l3.736-8.221-125.545-91.916c-16.44 12.703-33.627 25.408-49.321 38.86"></path><path fill="#a7a9ac" d="M2150.978 1569.772h-78.465l-6.727-10.463c53.059-51.562 290.696-271.265 807.074-294.431.001 0-432.681 14.945-721.882 304.894"></path>
          </svg>
        </div>
      <ul className="nav-menu lg:flex flex-row items-center align-middle pt-2 justify-between font-semibold text-xs space-x-2 px-4 w-2/3 hidden">
          <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">FALCON 9</a></li>
          <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">FALCON HEAVY</a></li>
          <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">DRAGON </a></li>
          <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">STARSHIP</a></li>
          <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">HUMAN SPACEFLIGHT</a></li>
          <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">RIDESHARE</a></li>
          <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">STARSHIELD</a></li>
          <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">STARLINK</a></li>
      </ul>
      <div className="">
      <button onClick={toggleMenu}>
        <div className="navbar-toggle w-20 flex flex-row align-middle items-center">
          <a href="google.com" className="nav-options text-xs pt-4 mr-2">SHOP</a>
          <div id="nav-icon3" className={`nav-icon3 ${isOpen ? 'open' : ''}`} style={{color: '#FFF'}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </button>
        {isOpen && (
        <div id="dropdown" className="absolute flex flex-col text-sm px-8 py-12 bg-slate-950 w-1/4 pb-60 z-50">
          <a href="google.com" className="nav-options border-b border-gray-300/40 my-4 text-gray-300 py-4 hover:text-gray-100 hover:border-gray-200/80">MISSIONS</a>
          <a href="google.com" className="nav-options border-b border-gray-300/40 my-4 text-gray-300 py-4 hover:text-gray-100 hover:border-gray-200/80">LAUNCHES</a>
          <a href="google.com" className="nav-options border-b border-gray-300/40 my-4 text-gray-300 py-4 hover:text-gray-100 hover:border-gray-200/80">CAREERS</a>
          <a href="google.com" className="nav-options border-b border-gray-300/40 my-4 text-gray-300 py-4 hover:text-gray-100 hover:border-gray-200/80">UPDATES</a>
          <a href="google.com" className="nav-options border-b border-gray-300/40 my-4 text-gray-300 py-4 hover:text-gray-100 hover:border-gray-200/80">SHOP</a>
        </div>
        )}
      </div>
    </div>
    <ul className="nav-menu flex flex-row items-center align-middle pt-2 justify-between font-semibold text-xs space-x-8 md:space-x-2 px-4 lg:hidden overflow-x-scroll w-full">
      <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">FALCON 9</a></li>
      <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">FALCON HEAVY</a></li>
      <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">DRAGON </a></li>
      <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">STARSHIP</a></li>
      <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">HUMAN SPACEFLIGHT</a></li>
      <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">RIDESHARE</a></li>
      <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">STARSHIELD</a></li>
      <li className="nav-options"><a href="google.com" className="nav-options text-gray-400 hover:text-gray-200">STARLINK</a></li>
    </ul>
    </>
  )
}
export default Navbar;