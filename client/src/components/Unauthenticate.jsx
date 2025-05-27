import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useIsLoggedinQuery } from '../redux/services/apis/authApi'

const Unauthenticate = () => {
  const {isSuccess, isLoading} = useIsLoggedinQuery()

    if(isLoading) return <p>Loading...</p>
  return isSuccess? <Navigate to="/chat" replace/> : <Outlet/>
}

export default Unauthenticate