import { Routes, Route, Navigate } from "react-router-dom";
import chat from "./pages/chat";
import register from "./pages/register";
import login from "./pages/login";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<chat.jsx />} />
                <Route path="/register" element={<register.jsx />} />
                <Route path="/login" element={<login.jsx />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App
