import styles from "./styles.module.scss";
import { logout } from "../../service/firebase";
import { useState } from "react";
import { useAuth } from "../../service/firebase";

export default function Header() {
  const currentUser = useAuth();

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

      {currentUser && (
        <div className={styles.user}>
          <button disabled={loading} onClick={handleLogout}>
            Encerrar Sessão
          </button>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt=""
            className={styles.topAvatar}
          />
        </div>
      )}
    </header>
  );
}
