import toast from "react-hot-toast";
import axiosInstance from "../utils/axios";
import { useState } from "react";

export const useLogOut = () => {
    const [loading, setLoading] = useState(false);

    const logOut = async () => {
        setLoading(true);
        try {
            await axiosInstance.get("/auth/logout")
            window.location.href = "/"
        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong");
            setLoading(false);
        }finally {
            setLoading(false);
        }
    }

  return { logOut, loading }
}
