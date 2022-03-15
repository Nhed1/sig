//react hooks
import { useState, useRef, useEffect } from "react";
//firabse and router
import { login, signup, useAuth } from "../../service/firebase";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// styles
import styles from "./styles.module.scss";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);
  const auth = getAuth();

  let navigate = useNavigate();

  const notify = (msg) => toast.error(msg);

  async function handleSignup(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      // navigate("dashboard");
    } catch {
      notify("Email inválido ou senha com menos de 6 caracteres");
    }
    setLoading(false);
  }

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      // navigate("dashboard");
    } catch {
      notify("Email ou senha incorretos");
    }
    setLoading(false);
  }

  function checkUserLoggedIn() {
    onAuthStateChanged(auth, (user) => {
      if (user) navigate("dashboard");
    });
  }

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <div className={styles.container}>
      <ToastContainer />
      <form className={styles.content}>
        <header>
          {hasAccount ? <strong>Login</strong> : <strong>Registrar</strong>}
        </header>
        <div className={styles.form}>
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
