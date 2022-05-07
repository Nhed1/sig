<<<<<<< HEAD
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
=======
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { logout } from "../../service/firebase";

import { AiOutlineMenu } from "react-icons/ai";
import styles from "./styles.module.scss";
import { Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap"; // <-- JS File

const offCanvasStyle = {
  backgroundColor: "var(--blue-800)",
  color: "#fff",
  padding: "0 20px",
  width: "fit-content",
};

export default function Header({ activeTab, setActiveTab }) {
  const location = useLocation();
  const path = location.pathname;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleActiveTab(tab) {
    setActiveTab(tab);
    handleClose();
  }

  // logout
  const [loading, setLoading] = useState(false);
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      handleClose();
    } catch {
      alert("error!");
    }
    setLoading(false);
  }

>>>>>>> 87eeeba7650b817d7598bfae6a978819ff402c5b
  return (
    <header className={styles.container}>
      <button onClick={handleShow} hidden={path === "/"}>
        <AiOutlineMenu />
      </button>
      <strong>SIG</strong>
<<<<<<< HEAD
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
=======
      {/* out of canvas, sidebar menu */}
      <Offcanvas style={offCanvasStyle} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.navContainer}>
            <div className={styles.tabsContainer}>
              <button onClick={() => handleActiveTab("chart")}>Gráficos</button>
              <button onClick={() => handleActiveTab("map")}>Mapa</button>
              <button onClick={() => handleActiveTab("table")}>Tabela </button>
              <button onClick={() => handleActiveTab("settings")}>
                Configurações
              </button>
            </div>
            <div>
              <button onClick={() => handleLogout()} hidden={path === "/"}>
                Terminar Sessão
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
>>>>>>> 87eeeba7650b817d7598bfae6a978819ff402c5b
    </header>
  );
}
