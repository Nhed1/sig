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

function App() {
  const user = useAuth();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user} path="/">
              <div style={{ display: "flex" }}>
                <Sidebar />
                <Dashboard />
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
