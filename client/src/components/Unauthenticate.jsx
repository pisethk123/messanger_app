import { Navigate, Outlet } from 'react-router-dom'
import useAuthenticate from '../hooks/useAuthenticate'

const Unauthenticate = () => {
  const { isAuthenticated, loading } = useAuthenticate()

  if(loading) return null
  return isAuthenticated? <Navigate to="/chat" replace/> : <Outlet/>
}

export default Unauthenticate