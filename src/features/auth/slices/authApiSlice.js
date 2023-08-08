import { apiSlice } from "../../../app/api/apiSlice"
import { logOut, setCredentials } from "./authSlice"

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "v1/auth/login",
                method: "POST",
                body: { email, password },
            }),
        }),
        register: builder.mutation({
            query: ({ name, email, password }) => ({
                url: "v1/user/",
                method: "POST",
                body: { name, email, password },
            }),
        }),
        refreshToken: builder.mutation({
            query: () => ({
                url: "v1/auth/refresh_token",
                method: "GET",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled

                    const { accessToken } = data

                    if (!accessToken) {
                        return
                    }

                    dispatch(setCredentials({ accessToken }))
                } catch (error) {
                    console.error("refresh token error: ", error)
                }
            },
        }),
        // sendLogout: builder.mutation({
        //     query: () => ({
        //         url: "/auth/logout",
        //         method: "POST",
        //     }),
        //     async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        //         try {
        //             await queryFulfilled

        //             dispatch(logOut())

        //             setTimeout(() => {
        //                 dispatch(apiSlice.util.resetApiState())
        //             }, 1000)
        //         } catch (err) {
        //             console.log(err)
        //         }
        //     },
        // }),
        // forgotPassword: builder.mutation({
        //     query: (email) => ({
        //         url: "/auth/forgot_password",
        //         method: "POST",
        //         body: email,
        //     }),
        // }),
        // resetPassword: builder.mutation({
        //     query: ({ resetToken, newPassword }) => ({
        //         url: "/auth/verify_reset_password",
        //         method: "POST",
        //         headers: {
        //             Authorization: `Bearer ${resetToken}`,
        //         },
        //         body: {
        //             newPassword,
        //         },
        //     }),
        // }),
    }),
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useRefreshTokenMutation,
    useSendLogoutMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
} = authApiSlice
