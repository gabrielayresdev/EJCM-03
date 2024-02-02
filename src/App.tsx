import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import EmailConfirmation from "./pages/EmailConfirmation/EmailConfirmation";
import HomePage from "./pages/HomePage/HomePage";
import Product from "./pages/Product/Product";
import { AppContainer } from "./styles";
import EmailConfirmed from "./pages/EmailConfirmed/EmailConfirmed";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/confirmar-email" element={<EmailConfirmation />} />
          <Route path="/confirmado" element={<EmailConfirmed />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/produto/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
