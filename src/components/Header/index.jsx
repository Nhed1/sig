import styles from "./styles.module.scss";
import { logout } from "../../service/firebase";
import { useState } from "react";
// import { onAuthStateChanged, getAuth } from "firebase/auth";

export default function Header() {
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
    <header className={styles.container}>
      <strong>SIG</strong>
      <div className={styles.user}>
        <button disabled={loading} onClick={handleLogout}>
          Encerrar Sessão
        </button>
        <img
          src="https://i.imgur.com/BfZtX0e.png"
          alt=""
          className={styles.topAvatar}
        />
      </div>
    </header>
  );
}
