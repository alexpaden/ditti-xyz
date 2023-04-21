import React from "react";
import styles from "./UnfollowerRow.module.css";

type UnfollowerRowProps = {
  user: {
    id: number;
    username: string;
    display_name: string;
    avatar_url: string;
    followers: number;
    following: number;
    bio: string;
  };
};

const UnfollowerRow: React.FC<UnfollowerRowProps> = ({ user }) => {
  return (
    <div className={styles.row}>
      <img
        src={user.avatar_url}
        alt={`${user.username} avatar`}
        className={styles.avatar}
      />
      <div className={styles.userInfo}>
        <div className={styles.displayName}>{user.display_name}</div>
        <div className={styles.username}>@{user.username}</div>
        <div className={styles.stats}>
          {user.followers} followers | {user.following} following
        </div>
        <div className={styles.bio}>{user.bio}</div>
      </div>
    </div>
  );
};

export default UnfollowerRow;
