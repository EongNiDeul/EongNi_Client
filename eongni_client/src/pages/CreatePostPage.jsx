import { useEffect, useState } from "react";
import styles from '../styles/pages/CratePostPage.module.css'
import { useNavigate } from "react-router-dom";
import PostPage from "./PostPage";
// import SignupPage from "./SignupPage";

export default function CreatePost() {
    const [nickname, setNickname] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const savedNickname = localStorage.getItem("nickname");
        if (savedNickname) {
            setNickname(savedNickname);
        }
    }, []);

    const handlePost = () => {
        const newPost = {
            id: Date.now(),
            writer: nickname,
            date: new Date().toLocaleString(),
            title: title,
            content: content,
        };
        const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];

        const updatedPosts = [...existingPosts, newPost];
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
        navigate("/PostPage");
    }

    return (
        <div className={styles.container}>
            <p className={styles.nickname}>{nickname}</p>
            <div className={styles.inputContainer}>
                <div className={styles.titleBox}>
                    <span className={styles.inputPostTitleLabel}>Q</span>
                    <input
                        type="text"
                        className={styles.inputPostTitle}
                        placeholder="제목을 입력"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <input
                    type="text"
                    className={styles.inputPostContent}
                    placeholder="고민내용을 입력해 주세요."
                    value={content}
                    onChange={(e) => setContent(e.target.value)} />
                <div className={styles.buttonWrapper}>
                    <button className={styles.postButton} onClick={handlePost}>게시하기</button>
                </div>
            </div>
        </div>
    )
}
