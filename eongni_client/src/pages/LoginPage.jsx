import { useState } from "react";
import styles from "../styles/pages/LoginPage.module.css";

function LoginPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>로그인</div>

        <div>
          <label>
            {" "}
            닉네임
            <input type="text" placeholder="닉네임을 입력해주세요" className={styles.input}/>
          </label>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요 (영어, 숫자, 특수문자 포함)"
            className={styles.input}
          />
        </div>

        <button className={styles.loginBtn}>로그인</button>
      </form>
    </div>
  );
}

export default LoginPage;
