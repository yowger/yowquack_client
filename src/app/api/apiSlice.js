import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { logOut, setCredentials } from "../../features/auth/slices/authSlice"

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:7001",
    // credentials: "include",
    // prepareHeaders: (headers, { getState }) => {
    //     const token = getState().auth.token

    //     if (token) {
    //         headers.set("authorization", `Bearer ${token}`)
    //     }

    //     return headers
    // },
})

const baseQueryWithReauth = async (args, api, options) => {
    // console.log("retrying")
    let result = await baseQuery(args, api, options)
    // // console.log(
    // //     "🚀 ~ file: apiSlice.js:20 ~ baseQueryWithReauth ~ result:",
    // //     result
    // // )

    // const jwtExpired = result?.error?.originalStatus === 401

    // if (jwtExpired) {
    //     const refreshResult = await baseQuery(
    //         "/auth/refresh_token",
    //         api,
    //         options
    //     )

    //     if (refreshResult?.data) {
    //         const user = api.getState().auth.user

    //         api.dispatch(setCredentials({ ...refreshResult.data, user }))

    //         result = await baseQuery(args, api, options)
    //     } else {
    //         api.dispatch(logOut())
    //     }
    // }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Post"],
    endpoints: () => ({}),
})
