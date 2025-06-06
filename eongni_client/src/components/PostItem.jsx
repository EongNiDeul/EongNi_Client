// PostPage에서 게시글 한개 컴포넌트
import React from 'react';
import postListStyles from "../styles/pages/PostPage.module.css";
import postDetailStyles from "../styles/pages/PostDetailPage.module.css";

export default function PostItem({ post, onClick, showActions = true, isDetail = false }) {
    const styles = isDetail ? postDetailStyles : postListStyles;

    return (
        <div
            className={isDetail ? postDetailStyles.postCardDetail : postListStyles.postCard}
            onClick={() => onClick && onClick(post)}
            style={{ cursor: onClick ? "pointer" : "default" }}
        >
            <div className={styles.postHeader}>
                <div>
                    <span className={styles.writer}>{post.writer}</span>
                    <span className={styles.date}>
                        {post.date}{" "}
                        <span className={styles.dateNote}>(작성 날짜 시간)</span>
                    </span>
                </div>
                {showActions && (
                    <div className={styles.actions}>
                        <button className={styles.edit}>수정</button>
                        <button className={styles.delete}>삭제</button>
                    </div>
                )}
            </div>
            <div className={styles.postInfo}>
                <div className={styles.postTitle}>
                    <strong>Q {post.title}</strong>
                </div>
                <div className={styles.postContent}>{post.content}</div>
            </div>
        </div>
    );
}