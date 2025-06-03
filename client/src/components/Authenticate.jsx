import { Navigate, Outlet } from "react-router-dom"
import useAuthenticate from "../hooks/useAuthenticate"


const Authenticate = () => {
  const { isAuthenticated, loading } = useAuthenticate()
    
  if(loading) return null
  return isAuthenticated? <Outlet/>: <Navigate to="/signin" replace={true} />
}

export default Authenticate