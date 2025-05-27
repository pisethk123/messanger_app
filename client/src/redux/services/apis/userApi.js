import { apiSlice } from "../apiSlice"

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // get user profile
        getUserProfile: builder.query({
            query: () => "/user/getuserprofile",
            providesTags: ["User"]
        }),
        // update user profile image
        updateUserProfileImage: builder.mutation({
            query: (formData) => ({
                url: "/user/updateuserprofileimage",
                method: "PUT",
                body: formData
            }),
            invalidatesTags: ["User"]
        }),
    })
})

export const {
    useGetUserProfileQuery,
    useUpdateUserProfileImageMutation
} = userApi