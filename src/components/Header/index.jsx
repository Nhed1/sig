import styles from "./styles.module.scss";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap"; // <-- JS File

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
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li onClick={() => handleActiveTab("chart")}>Gráficos</li>
            <li onClick={() => handleActiveTab("map")}>Mapa</li>
            <li onClick={() => handleActiveTab("table")}>Tabela </li>
            <li onClick={() => handleActiveTab("settings")}>Configurações</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
