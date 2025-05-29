import { useState } from "react";
import styles from "../styles/pages/LoginPage.module.css";

function LoginPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>로그인 수정해봄</div>

        <div>
          <label>
            {" "}
            닉네임
            <input type="text" placeholder="닉네임을 입력해주세요" className={styles.input} />
          </label>
        </div>

        <div>
          <label>
            {" "}
            비밀번호
            <input
              type="password"
              placeholder="비밀번호를 입력해 주세요 ( 8자리이하 : 영어, 숫자, 특수문자 포함 ) 입력해주세요"
              className={styles.input}
            />
          </label>
        </div>
        <button>로그인</button>
      </div>
    </>
  );
}

export default LoginPage;
