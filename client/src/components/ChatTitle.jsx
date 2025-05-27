import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";

const ChatTitle = () => {
  return (
    <div className="text-2xl font-semibold flex justify-between px-4 py-2 text-neutral-800 items-center">
        <h1>Chats</h1>
        <div className='flex space-x-3'>
            <FaUserPlus/>
            <MdGroupAdd/>
        </div>
    </div>
  )
}

export default ChatTitle