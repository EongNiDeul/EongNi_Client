import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/StartPage.module.css";

function StartPage() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/SignupPage");
  };

  const handleLogin = () => {
    navigate("/LoginPage");
  };

  return (
      <div className={styles.container}>
        <h1 className={styles.title}>EongNiDeul</h1>
        <p className={styles.subtitle}>언니가 정해줄게~~</p>
        <button className={styles.button} onClick={handleSignup}>
          회원가입
        </button>
        <button className={styles.button} onClick={handleLogin}>
          로그인
        </button>
      </div>
  );
}

export default StartPage;
