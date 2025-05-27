import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_API, credentials: "include"}),
    tagTypes: ["Auth", "User"],
    endpoints: () => ({})
})