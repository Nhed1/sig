import { useState } from "react";
import styles from "./styles.module.scss";

export default function Login() {
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    console.log(user.email, user.password);
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
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
              placeholder="Digite seu email"
            />
          </div>
          <div>
            <span>Senha</span>
            <input
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder="Digite sua senha"
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
