import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/chat";
import Register from "./pages/register";
import Login from "./pages/login";
import NavBar from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";
import { ChatContextProvider } from "./context/chatContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <ChatContextProvider user = {user}>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={user ? <Chat /> : <Login />} />
          <Route path="/register" element={user ? <Chat /> : <Register />} />
          <Route path="/login" element={user ? <Chat /> : <Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </ChatContextProvider>
  );
}

export default App;
