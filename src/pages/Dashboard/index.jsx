import { logout } from "../../service/firebase";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const auth = getAuth();

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      navigate("/");
    } catch {
      alert("error!");
    }
    setLoading(false);
  }

  function checkUserLoggedIn() {
    onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/");
    });
  }

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <button disabled={loading} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
