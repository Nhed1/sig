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
            <ProtectedRoute user={user} path="/dashboard" boolean={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user} path="/" boolean={true}>
              <Dashboard activeTab={activeTab} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
