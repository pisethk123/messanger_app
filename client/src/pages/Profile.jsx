import React, { useEffect, useState } from 'react'
import { useLogOutMutation } from '../redux/services/apis/authApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useGetUserProfileQuery, useUpdateUserProfileImageMutation } from '../redux/services/apis/userApi'

const Profile = () => {
  const previewImage = "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360"

  const [file, setFile] = useState(null)
  const navigate = useNavigate()

  const {data} = useGetUserProfileQuery()
  const [logOut, {isError, isSuccess, isLoading}] = useLogOutMutation()
  const [updateUserProfileImage] = useUpdateUserProfileImageMutation()
  
  const logoutHandler = () => {
    logOut()
  }

  useEffect(() => {
    if(isSuccess) {
      toast.success("user logged out")
      navigate("/")
    }
    if(isError) {
      toast.error("An error occured")
    }
  }, [isError, isSuccess])

  const inputChangeHandler = (e) => {
    if(e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  useEffect(() => {
    if(file) {
      const formData = new FormData()
      formData.append("file", file)
      updateUserProfileImage(formData)
      console.log(formData)
    }
  }, [file])

  return (
    <div className="pt-14">
      <h1 className="text-center text-blue-400 font-semibold text-5xl">talkie</h1>
      <div className="w-md mx-auto space-y-3">
        {/* avatar */}
        <div className="w-40 h-40 mx-auto">
          <label htmlFor="image">
            <input type="file" id="image" className="hidden" accept='image/*' onChange={inputChangeHandler}/>
            <img src={data?.avatar || previewImage} alt="image" className="rounded-full size-full object-cover"/>
          </label>
        </div>
        {/* display user unique identification */}
        <div className="border-2 border-neutral-200 px-2 rounded-md">
          <small>Uuid</small><br />
          <p>{data?._id}</p>
        </div>
        {/* display name */}
        <div className="border-2 border-neutral-200 px-2 rounded-md">
          <small>Name</small><br />
          <p>{data?.fullName}</p>
        </div>
        {/* display usename */}
        <div className="border-2 border-neutral-200 px-2 rounded-md">
          <small>Username</small><br />
          <p>{data?.username}</p>
        </div>
        {/* logout button */}
        <button type="button" className="bg-red-600 text-white w-full py-2 rounded-md" disabled={isLoading} onClick={logoutHandler}>
          {isLoading? "Loading...": "Log out"}
        </button>
      </div>
    </div>
  )
}

export default Profile
