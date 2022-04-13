import { logout } from "../../service/firebase";
import { useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
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
