import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { logOut, setCredentials } from "../../features/auth/slices/authSlice"

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:7001",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token

        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }

        return headers
    },
})

const baseQueryWithReauth = async (args, api, options) => {
    console.log("args", args)
    const HTTP_STATUS_UNAUTHORIZED = 401

    let result = await baseQuery(args, api, options)
    const status = result?.data?.error?.originalStatus

    if (status === HTTP_STATUS_UNAUTHORIZED) {
        console.log("refresh token")

        const refreshResult = await baseQuery(
            "v1/auth/refresh_token",
            api,
            options
        )
        console.log("refresh Result", refreshResult)

        if (refreshResult?.data) {
            const user = api.getState().auth.user

            api.dispatch(setCredentials({ ...refreshResult.data, user }))

            result = await baseQuery(args, api, options)
        } else {
            api.dispatch(logOut())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Post"],
    endpoints: () => ({}),
})
