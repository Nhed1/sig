import styles from "./styles.module.scss";

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <header>
          <strong>Login</strong>
        </header>
        <div className={styles.inputs}>
          <div>
            <span>E-mail</span>
            <input type="email" placeholder="Digite seu email" />
          </div>
          <div>
            <span>Senha</span>
            <input type="password" placeholder="Digite sua senha" />
          </div>
          <div>
            <a>Esqueceu sua senha ?</a>
            <button type="submit">Entrar</button>
          </div>
        </div>
      </form>
    </div>
  );
}
