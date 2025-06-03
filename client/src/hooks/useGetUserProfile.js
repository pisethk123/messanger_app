import toast from "react-hot-toast";
import axiosInstance from "../utils/axios";
import React, { useCallback, useEffect, useState } from 'react'

const useGetUserProfile = () => {
    const [data, setData] = useState(null)

        const getUserProfile = useCallback( async () => {
            try {
                const response = await axiosInstance.get("/user/getuserprofile")
                setData(response.data)
            } catch (error) {
                toast.error(error.response?.data?.message || "Something went wrong");
            }
        }, [])

        useEffect(() => {
            getUserProfile()
        }, [getUserProfile])
        
  return { data, refetch: getUserProfile }
}

export default useGetUserProfile