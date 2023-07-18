import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { CssBaseline, ThemeProvider } from "@mui/material"
import socialTheme from "./theme/social.theme.js"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={socialTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)
