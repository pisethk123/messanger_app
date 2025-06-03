import { useState } from "react";
import axiosInstance from "../utils/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useSignIn = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const signIn = async (userData) => {
        setLoading(true);
        try {
            const response = await axiosInstance.post("/auth/signin", userData)
            toast.success("logged in successfully");
            navigate("/chat");
            setLoading(false);
        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong");  
            setLoading(false);          
        } finally {
            setLoading(false);
        }
    }

  return { signIn, loading }
}

export default useSignIn

