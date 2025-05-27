import { apiSlice } from "../apiSlice"

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // sign up
        signUp: builder.mutation({
            query: (userData) => ({
                url: "/auth/signup",
                method: "POST",
                body: userData
            }),
            invalidatesTags: ["Auth"]
        }),
        // sign in
        signIn: builder.mutation({
            query: (userData) => ({
                url: "/auth/signin",
                method: "POST",
                body: userData
            }),
            invalidatesTags: ["Auth"]
        }),
        // check if the user is logged in
        isLoggedin: builder.query({
            query: () => "/auth/isloggedin",
            providesTags: ["Auth"]
        }),
        // log out
        logOut: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST"
            }),
            invalidatesTags: ["Auth"]
        })
    })
})

export const {
    useSignUpMutation,
    useSignInMutation,
    useIsLoggedinQuery,
    useLogOutMutation
} = authApi