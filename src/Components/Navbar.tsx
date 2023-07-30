import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-gray-700 m-auto shadow-xl">
      <div className="max-w-[1240px] w-[90%] px-2 py-2 m-auto flex justify-between items-center">
        <div className=" font-extrabold text-3xl">Shop</div>
        <div className=" flex gap-6 text-[22px] font-light">
          <NavLink className=" p-2 px-4 rounded-md hover:bg-slate-900" to="about">
            About
          </NavLink>
          <NavLink className=" p-2 px-4 rounded-md hover:bg-slate-900" to="/">
            Products
          </NavLink>
          <NavLink className=" p-2 px-4 rounded-md hover:bg-slate-900" to="/">
            Cart
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
