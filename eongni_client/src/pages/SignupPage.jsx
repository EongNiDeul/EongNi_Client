import { useState } from "react";
import styles from "../styles/pages/SignupPage.module.css";

function SignupPage() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("닉네임:", nickname);
    console.log("비밀번호:", password);
    console.log("비밀번호 확인:", confirmPassword);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>회원가입</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요 ( 8자리이하 : 영어, 숫자, 특수문자 포함 )"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">
            비밀번호 확인 <span className={styles.success}>확인 완료</span>
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="비밀번호를 확인해 주세요"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
