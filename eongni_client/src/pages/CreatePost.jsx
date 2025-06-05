import { useEffect, useState } from "react";
import styles from '../styles/pages/CratePost.module.css'
// import SignupPage from "./SignupPage";

export default function CreatePost() {
    const [nickname, setNickname] = useState("");

    useEffect(() => {
        const savedNickname = localStorage.getItem("nickname");
        if(savedNickname){
            setNickname(savedNickname);
        }
    },[]);

    return (
        <div className={styles.container}>
            <p className={styles.nickname}>{nickname}</p>
            <div className={styles.inputContainer}>
                <div className={styles.titleBox}>
                    <span className={styles.inputPostTitleLabel}>Q</span>
                    <input
                        type="text"
                        className={styles.inputPostTitle}
                        placeholder="제목을 입력" />
                </div>
                <input
                    type="text"
                    className={styles.inputPostContent}
                    placeholder="고민내용을 입력해 주세요." />
                <div className={styles.buttonWrapper}>
                    <button className={styles.postButton}>게시하기</button>
                </div>
            </div>
        </div>
    )
}
