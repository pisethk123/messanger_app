import toast from "react-hot-toast";
import axiosInstance from "../utils/axios";

const useUpdateUserProfileImage = () => {

    const updateProfileImage = async (formData) => {
      try {
        const response = await axiosInstance.put("/user/updateuserprofileimage", formData)
        toast.success(response.data.message || "Profile picture updated successfully");
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
      }
    }

  return { updateProfileImage }
}

export default useUpdateUserProfileImage