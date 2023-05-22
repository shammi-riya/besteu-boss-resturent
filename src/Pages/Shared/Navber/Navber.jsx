// import React from 'react';

import { NavLink } from "react-router-dom";

const Navber = () => {
    const navItem = <>
  <li className="text-white text-lg"><a ><NavLink  className={({ isActive }) => isActive ? " text-yellow-500" : ""} to="/" > HOME </NavLink></a></li>
  <li className="text-white text-lg"><a ><NavLink className={({ isActive }) => isActive ? " text-yellow-500" : ""} to="/contuct"> CONTUCT US </NavLink></a></li>
  <li className="text-white text-lg"><a ><NavLink className={({ isActive }) => isActive ? " text-yellow-500" : ""} to="/dashbord"> DASHBORD </NavLink></a></li>
  <li className="text-white text-lg"><a ><NavLink className={({ isActive }) => isActive ? " text-yellow-500" : ""} to="/menu"> OUR MENU </NavLink></a></li>
  <li className="text-white text-lg"><a ><NavLink className={({ isActive }) => isActive ? " text-yellow-500" : ""} to="/Shop"> OUR SHOP </NavLink></a></li>
        
        
    </>



    return (
        <>
            <div style={{background:"rgba(21, 21, 21, 0.5)"}} className="navbar text-slate-50 py-4 px-2 fixed z-10 max-w-7xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItem}
      </ul>
    </div>
   <div>
   <h1 className='text-2xl font-bold'>BESTRU BOSS</h1>
    <p>REASTURENT</p>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
        </>
    );
};

export default Navber;