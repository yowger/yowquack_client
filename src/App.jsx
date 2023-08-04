import { Routes, Route } from "react-router-dom"
import Login from "./features/auth/pages/Login"
import Feed from "./features/feed/pages/Feed"
import SocialLayout from "./components/layouts/social/SocialLayout"
import Profile from "./features/profile/pages/Profile"
import SinglePost from "./features/feed/pages/SinglePost"
import Register from "./features/auth/pages/Register"

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

            <Route element={<SocialLayout />}>
                <Route path="/" element={<Feed />} />
                <Route path="/post" element={<SinglePost />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
            {/* <Route path="/signin" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} /> */}
        </Routes>
    )
}

export default App
