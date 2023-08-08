import { Routes, Route } from "react-router-dom"
import Login from "./features/auth/components/Login"
import Feed from "./features/feed/components/Feed"
import SocialLayout from "./components/layouts/SocialLayout"
import Profile from "./features/profile/components/Profile"
import SinglePost from "./features/feed/components/SinglePost"
import Register from "./features/auth/components/Register"
import PersistLogin from "./features/auth/components/PersistLogin"

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

            <Route element={<PersistLogin />}>
                <Route element={<SocialLayout />}>
                    <Route path="/" element={<Feed />} />
                    <Route path="/post" element={<SinglePost />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Route>
            {/* <Route path="/signin" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} /> */}
        </Routes>
    )
}

export default App
