import styles from "./styles.module.scss";
import { useState } from "react";
import { useLocation } from "react-router-dom";

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

  return (
    <header className={styles.container}>
      <button onClick={handleShow} hidden={path === "/"}>
        Open
      </button>
      <strong>SIG</strong>
      {/* out of canvas, sidebar menu */}
      <Offcanvas style={offCanvasStyle} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul
            style={{
              listStyleType: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button onClick={() => handleActiveTab("chart")}>Gráficos</button>
            <button onClick={() => handleActiveTab("map")}>Mapa</button>
            <button onClick={() => handleActiveTab("table")}>Tabela </button>
            <button onClick={() => handleActiveTab("settings")}>
              Configurações
            </button>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
