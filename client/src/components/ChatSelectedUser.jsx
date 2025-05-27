import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { BsFillCameraVideoFill } from "react-icons/bs";

const ChatSelectedUser = () => {
  const previewImage = "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
  const image = 'https://icon2.cleanpng.com/20180623/vr/aazrsnwge.webp'
  return (
    <div className="col-span-2 px-4 flex justify-between items-center">
      <div className='flex space-x-3 items-center relative'>
        <img src={image && image || previewImage} alt="" className='w-10 h-10 rounded-full '/>
        <h3 className='font-semibold'>Full Name</h3>
        <div className='bg-green-500 h-3 w-3 rounded-full absolute left-8 bottom-2 border border-neutral-300'></div>
      </div>

      <div className='flex items-center space-x-3 text-blue-500'>
        <FaPhone/>
        <BsFillCameraVideoFill/>
      </div>
    </div>
  )
}

export default ChatSelectedUser