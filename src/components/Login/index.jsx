import { useState, useRef } from "react";
import { login, signup, useAuth } from "../../service/firebase";
import styles from "./styles.module.scss";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Errror");
    }
    console.log(emailRef.current.value);
    setLoading(false);
  }

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("ERROR!");
    }
    setLoading(false);
  }

  return (
    <div className={styles.container}>
      <form className={styles.content}>
        <header>
          {hasAccount ? <strong>Login</strong> : <strong>Registrar</strong>}
        </header>
        <div className={styles.form}>
          <h1>email:{currentUser?.email}</h1>
          <div>
            <span>E-mail</span>
            <input
              required
              ref={emailRef}
              type="email"
              placeholder="Digite seu email"
            />
          </div>
          <div>
            <span>Senha</span>
            <input
              required
              ref={passwordRef}
              type="password"
              placeholder="Digite sua senha"
            />
          </div>
          {hasAccount ? (
            <div className={styles.submit}>
              <button disabled={loading || currentUser} onClick={handleLogin}>
                Entrar
              </button>
              <p>
                Não possui uma conta?{" "}
                <span onClick={() => setHasAccount(false)}>Registrar</span>
              </p>
            </div>
          ) : (
            <div className={styles.submit}>
              <button disabled={loading || currentUser} onClick={handleSignup}>
                Registrar
              </button>
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
