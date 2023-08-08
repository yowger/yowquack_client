import { Outlet, Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
// import { useRefreshMutation } from "../slices/authApiSlice"
// import usePersist from "../../hooks/usePersist"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../slices/authSlice"
import { useRefreshTokenMutation } from "../slices/authApiSlice"

const PersistLogin = () => {
    // const [persist] = usePersist()
    const token = useSelector(selectCurrentToken)
    const effectRan = useRef(false)

    const [trueSuccess, setTrueSuccess] = useState(false)

    const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
        useRefreshTokenMutation()

    useEffect(() => {
        if (effectRan.current === true) {
            // React 18 Strict Mode

            const verifyRefreshToken = async () => {
                try {
                    //const response =
                    await refresh()
                    //const { accessToken } = response.data
                    setTrueSuccess(true)
                    console.log("true success")
                } catch (err) {
                    console.error(err)
                }
            }

            if (
                !token
                // && persist
            )
                verifyRefreshToken()
        }

        return () => (effectRan.current = true)
    }, [])

    if (isLoading) {
        return <p>loading...</p>
    } else {
        return <Outlet />
    }
}

export default PersistLogin
