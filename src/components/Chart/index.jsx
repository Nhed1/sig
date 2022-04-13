import { logout } from "../../service/firebase";
import { useState } from "react";

export default function Chart() {
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
    <>
      <h1>chart</h1>
      <button onClick={() => handleLogout()}>logout</button>
    </>
  );
}
