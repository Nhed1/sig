import styles from "./styles.module.scss";
import { useState } from "react";

import { Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap"; // <-- JS File

export default function Header() {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleActiveTab(tab) {
    setActiveTab(tab);
    handleClose();
  }

  return (
    <header className={styles.container}>
      <button onClick={handleShow}>Open</button>
      <strong>SIG</strong>
      {/* out of canvas, sidebar menu */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li onClick={() => handleActiveTab("dashboard")}>Dashboard</li>
            <li onClick={() => handleActiveTab("chart")}>Gráfico</li>
            <li onClick={() => handleActiveTab("map")}>Mapa</li>
            <li onClick={() => handleActiveTab("settings")}>Configurações</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
