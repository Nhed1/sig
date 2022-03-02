import { useState } from "react";
import styles from "./styles.module.scss";

export default function Login() {
  const [user, setUser] = useState({});
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <div className={styles.container}>
      <form className={styles.content}>
        <header>
          {hasAccount ? <strong>Login</strong> : <strong>Registrar</strong>}
        </header>
        <div className={styles.form}>
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
          {hasAccount ? (
            <div className={styles.submit}>
              <button type="submit">Entrar</button>
              <p>
                Não possui uma conta?{" "}
                <span onClick={() => setHasAccount(false)}>Registrar</span>
              </p>
            </div>
          ) : (
            <div className={styles.submit}>
              <button type="submit">Registrar</button>
              <p>
                Já possui uma conta?{" "}
                <span onClick={() => setHasAccount(true)}>Entrar</span>
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
