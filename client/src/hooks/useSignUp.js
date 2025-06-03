import { useState } from "react";
import axiosInstance from "../utils/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const signUp = async (userData) => {
        setLoading(true);
        try {
            const response = await axiosInstance.post("/auth/signup", userData)
            toast.success("Account created successfully");
            navigate("/chat");
            setLoading(false);
        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong");     
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

  return { signUp, loading }
}

export default useSignUp

