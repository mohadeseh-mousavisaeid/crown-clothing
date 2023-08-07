import React from "react";
import styles from "./menu-item.module.css";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.menuItem} ${size}`}
      // onClick={() => history.push(`${match.url}${linkUrl}`)}
      onClick={() => navigate(linkUrl)}
    >
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
