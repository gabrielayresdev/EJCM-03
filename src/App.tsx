import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import EmailConfirmation from "./components/EmailConfirmation/EmailConfirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/confirmar-email" element={<EmailConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
