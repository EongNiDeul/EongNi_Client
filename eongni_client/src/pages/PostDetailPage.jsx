import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom";
import PostItem from "../components/PostItem"
import styles from "../styles/pages/PostDetailPage.module.css"

export default function PostDetailPage() {
    const userNickname = localStorage.getItem("nickname");
    const [comments, setComments] = useState([
        {
            id: 1,
            nickname: "유저1",
            content: "첫 번째 댓글입니다.",
            date: "2025-06-07 14:00"
        },
        {
            id: 2,
            nickname: "유저2",
            content: "두 번째 댓글이에요.",
            date: "2025-06-07 14:05"
        }
    ]);
    const location = useLocation();
    const { id } = useParams();
    const [post, setPost] = useState(location.state || null);

    useEffect(() => {
        if (!location.state) {
            const dummyData = {
                id,
                writer: "홍길동",
                date: "2025-06-06",
                title: "예시 제목",
                content: "예시 내용입니다.",
            };
            setPost(dummyData);
        }
    }, [id, location.state]);

    useEffect(() => {
        console.log("post 상태 확인:", post);
    }, [post]);

    if (!post) return <div>잘못된 접근입니다.</div>;

    // 댓글 작성하기
    function CommentForm({ userNickname }) {
        const [content, setContent] = useState("");

        const handleSubmit = () => {
            if (!content.trim()) return;

            const newComment = {
                id: comments.length + 1,
                nickname: userNickname,
                content: content,
                date: new Date().toLocaleString(),
            };

            setComments([...comments, newComment]);
            setContent("");
        }
        return (
            <div className={styles.commentInputBox}>
                <p className={styles.userNickname}>{userNickname}</p>
                <input
                    className={styles.commentInput}
                    type="text"
                    placeholder="댓글 작성"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <p className={styles.completeBtn} onClick={handleSubmit}>완료</p>
            </div>
        );
    }
    // 댓글들
    function CommentList({ comments }) {
        return (
            <div className={styles.comments}>
                {comments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} />
                ))}
            </div>
        );
    }

    // 댓글 하나
    function CommentItem({ comment }) {
        return (
            <div className={styles.commentBox}>
                <div className={styles.commentHeader}>
                    <p>{comment.nickname}</p>
                    <p>{comment.date}</p>
                    <button>고정</button>
                </div>
                <p>{comment.content}</p>
                <div className={styles.commentFooter}>
                    <button>답글 달기</button>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.pageWrapper} style={{ padding: "20px" }}>
            {/* <p>Post ID: {id}</p> */}
            <PostItem post={post} showActions={true} isDetail={true} />
            <section className={styles.commentSection}>
                <h2>댓글</h2>
                <div className={styles.commentContainer}>
                    <CommentForm userNickname={userNickname} />
                    <CommentList comments={comments} />
                </div>
            </section>
        </div>
    );
}