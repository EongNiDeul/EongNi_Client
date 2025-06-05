import { useState } from "react";
import styles from "../styles/pages/PostPage.module.css";
import { useNavigate } from "react-router-dom";

function PostPage() {
  const [search, setSearch] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState("정렬");
  const navigate = useNavigate();

  const toggleSort = () => setSortOpen((prev) => !prev);

  const handleSortOption = (option) => {
    setSortOption(option);
    setSortOpen(false);
    // 정렬 기능 추가 시 여기서 처리
  };

  const goToCreatePost = () => {
    navigate("/CreatePostPage");
  };

  const posts = [
    {
      id: 1,
      writer: "ㅇㅇ이",
      date: "2025.05.15 13:55",
      title: "오늘 저녁 추천해 주세요ㅠㅠ",
      content:
        "제가.. 짬뽕이랑 짜장면이랑 시킬 걸 고민중인데...\n뭘 주문해야 잘 먹었다고 소문이 날까요",
    },
    {
      id: 2,
      writer: "ㅇㅇ이",
      date: "2025.05.15 13:55",
      title: "오늘 저녁 추천해 주세요ㅠㅠ",
      content:
        "제가.. 짬뽕이랑 짜장면이랑 시킬 걸 고민중인데...\n뭘 주문해야 잘 먹었다고 소문이 날까요",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.innerBox}>
        <div className={styles.topSection}>
          <div className={styles.searchBarWrapper}>
            <img
              src="/public/search.png"
              alt="검색 아이콘"
              className={styles.searchIcon}
            />
            <input
              type="text"
              className={styles.searchBar}
              placeholder="엉니한테 물어봐"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.actionRow}>
            <div className={styles.sortWrapper}>
              <button className={styles.sortBtn} onClick={toggleSort}>
                {sortOption} ▾
              </button>
              {sortOpen && (
                <div className={styles.dropdown}>
                  <div onClick={() => handleSortOption("시간순")}>시간순</div>
                  <div onClick={() => handleSortOption("가나다순")}>가나다순</div>
                </div>
              )}
            </div>
            <button className={styles.plusBtn} onClick={goToCreatePost}>＋</button>
            <div></div>
          </div>
        </div>

        <div className={styles.postList}>
          {posts.map((post) => (
            <div key={post.id} className={styles.postCard}>
              <div className={styles.postHeader}>
                <div>
                  <span className={styles.writer}>{post.writer}</span>
                  <span className={styles.date}>
                    {post.date}{" "}
                    <span className={styles.dateNote}>(작성 날짜 시간)</span>
                  </span>
                </div>
                <div className={styles.actions}>
                  <button className={styles.edit}>수정</button>
                  <button className={styles.delete}>삭제</button>
                </div>
              </div>
              <div className={styles.postInfo}>
                <div className={styles.postTitle}>
                  <strong>Q {post.title}</strong>
                </div>
                <div className={styles.postContent}>{post.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostPage;
