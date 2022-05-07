import { useState } from "react";
//components
import Header from "./components/Header";
//pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
//librarys and styles
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/GlobalStyle.scss";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./service/firebase";
import Sidebar from "./components/SideBar/SideBar";
import Reports from "./pages/Denuncias/Reports";

function App() {
  const user = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <BrowserRouter>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={user} path="/dashboard" isDashboard={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user} path="/" isDashboard={true}>
              <Dashboard activeTab={activeTab} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
