import { Routes, Route } from "react-router-dom"
import SignIn from "./features/auth/pages/SignIn"
import Home from "./features/home/pages/Home"
import Feed from "./features/feed/pages/Feed"

function App() {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Feed />} />
            {/* <Route path="/signin" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} /> */}
        </Routes>
    )
}

export default App
