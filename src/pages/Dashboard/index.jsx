import { logout } from "../../service/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      routeChange();
    } catch {
      alert("error!");
    }
    setLoading(false);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button disabled={loading} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
