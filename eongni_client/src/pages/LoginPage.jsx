import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/pages/LoginPage.module.css";

function LoginPage() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("닉네임:", nickname);
    console.log("비밀번호:", password);

    // 닉네임 저장
    localStorage.setItem("nickname", nickname);
  };

  const handlePost = () => {
    navigate("/PostPage");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>로그인</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요"
            className={styles.input}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className={styles.loginBtn} onClick={handlePost}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
