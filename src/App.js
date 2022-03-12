//components
import Header from "./components/Header";
//pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
//librarys and styles
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/GlobalStyle.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
