import axiosInstance from "../utils/axios";
import { useEffect, useState } from 'react'


const useAuthenticate = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const authenticate = async () => {
            setLoading(true)
            try {
                const response = await axiosInstance.get("/auth/isloggedin")
                setIsAuthenticated(true)
                setLoading(false)
            } catch (err) {
                setIsAuthenticated(false)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        }

        authenticate()
    }, [])

  return { isAuthenticated, loading }
}

export default useAuthenticate