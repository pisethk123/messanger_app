import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PiEyeSlashLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
import { useSignInMutation } from '../redux/services/apis/authApi';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  })

  const [signIn, {isLoading, isError, error, isSuccess}] = useSignInMutation()

  const navigate = useNavigate()

  const showPasswordHander = () => {
    setShowPassword(!showPassword)
  }

  const formChangeHandler = (e) => {  
    setUserData({...userData, [e.target.id]: e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    signIn(userData)
  }

  useEffect(() => {
    if(isSuccess) {
      toast.success("Login success")
      navigate("/chat")
    }
    if(isError) {
      toast.error(error.data.message)
    }
  }, [isError, isSuccess])

  return (
    <div className='pt-14'>
      <h1 className="text-center text-blue-400 font-semibold text-5xl">talkie</h1>
      <p className="text-center">Sign In to Continue or <Link to="/signup" className="text-blue-400">sign up </Link>  if you haven't already registered</p>
      <div className="w-md mx-auto">
        {/* sign up form */}
        <form className="space-y-2">
          {/* input username */}
          <div className="border-2 border-neutral-200 px-2 rounded-md">
            <small>Username</small><br />
            <input value={userData.username} id='username' onChange={formChangeHandler} type="text" placeholder="Username" className="outline-none w-full"/><br />
          </div>
          {/* input password */}
          <div className="border-2 border-neutral-200 px-2 rounded-md">
            <small className="">Password</small><br />
            <div className="flex space-x-2">
              <input value={userData.password} id='password' onChange={formChangeHandler} type={showPassword? "text": "password"} placeholder="Confirm password" className="outline-none grow"/>
              <div onClick={showPasswordHander}>
                {showPassword? <PiEyeSlashLight/>: <IoEyeOutline/>}
              </div>
            </div>
          </div>
          {/* submit button */}
          <button type="submit" onClick={submitHandler} className={`${isLoading? "bg-blue-300": "bg-blue-400"} text-white w-full text-center py-2 rounded-md`} disabled={isLoading}>
            { isLoading ? "Loading" : "Sign In" }
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
