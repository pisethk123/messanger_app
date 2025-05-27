import React from 'react'
import { Link } from "react-router-dom"
import { BsChatDots } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="bg-neutral-900 absolute w-full">
        <div className="mx-4 flex justify-between items-center">
          <h1 className="text-4xl text-blue-400 font-semibold my-2">
            <Link to="/">
              talkie
            </Link>
          </h1>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="/chat">
                <BsChatDots className="text-white text-2xl"/>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <RxAvatar className="text-white text-2xl"/> 
              </Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
