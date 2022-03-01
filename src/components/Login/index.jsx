import { useState } from "react";
import styles from "./styles.module.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <header>
          <strong>Login</strong>
        </header>
        <div className={styles.inputs}>
          <div>
            <span>E-mail</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Digite seu email"
              required
            />
          </div>
          <div>
            <span>Senha</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div>
            <a>Esqueceu sua senha ?</a>
            <button onClick={handleSubmit} type="submit">
              Entrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
