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
import Chart from "./pages/Chart/Chart";
import Map from "./pages/Map/Map";

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
        <Route
          path="/denuncias"
          element={
            <ProtectedRoute user={user} path="/">
              <div style={{ display: "flex" }}>
                <Sidebar />
                <Reports />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/graficos"
          element={
            <ProtectedRoute user={user} path="/">
              <div style={{ display: "flex" }}>
                <Sidebar />
                <Chart />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/mapa"
          element={
            <ProtectedRoute user={user} path="/">
              <div style={{ display: "flex" }}>
                <Sidebar />
                <Map />
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
