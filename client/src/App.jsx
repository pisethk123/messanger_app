import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Chat from "./pages/Chat"
import Navbar from "./components/Navbar"
import { Toaster } from "react-hot-toast"
import Authenticate from "./components/Authenticate"
import Unauthenticate from "./components/Unauthenticate"

function App() {
  return (
   <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* unautheticted routes */}
        <Route element={<Unauthenticate/>}>
          <Route index element={<Home/>}/> 
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Route>
        {/* authenticated routes */}
        <Route element={<Authenticate/>}>
          <Route path="/chat" element={<Chat/>}/>    
          <Route path="/profile" element={<Profile/>}/> 
        </Route>

      </Routes>
      <Toaster/>
   </BrowserRouter>
  )
}

export default App
