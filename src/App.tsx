import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import EmailConfirmation from "./components/EmailConfirmation/EmailConfirmation";
import HomePage from "./components/HomePage/HomePage";
import Product from "./components/Product/Product";
import { AppContainer } from "./styles";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/confirmar-email" element={<EmailConfirmation />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/produto/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
