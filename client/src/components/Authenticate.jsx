import { Navigate, Outlet } from "react-router-dom"
import { useIsLoggedinQuery } from "../redux/services/apis/authApi"

const Authenticate = () => {
    const {isSuccess, isLoading} = useIsLoggedinQuery()
    if(isLoading) return <p>Loading...</p>
  return isSuccess? <Outlet/> : <Navigate to="/signin" replace/>
}

export default Authenticate