import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./pages/auth/LoginPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import LayoutWithNavbar from "./layout/LayoutWithNavbar.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutWithNavbar />}>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/auth/login" element={<LoginPage />}></Route>
                    <Route
                        path="/auth/register"
                        element={<RegisterPage />}
                    ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
