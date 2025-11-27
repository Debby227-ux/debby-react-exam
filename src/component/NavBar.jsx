import React from "react";
import telex from "../telex.svg";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="flex mr-10 justify-between  bg-[#d4cdcd] h-15 w-340 shadow-black-700 border-3">
      <div className="mt-4">
        <img src={telex} />
      </div>
      <div className=" gap-10 ">
        <ul className="mr-30 mt-5 ">
          <li className="">
            <Link className="mr-10">Home</Link>
            <Link className="mr-4">Service</Link>
            <Link className="ml-7">Blog</Link>
            <Link className="ml-10">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
