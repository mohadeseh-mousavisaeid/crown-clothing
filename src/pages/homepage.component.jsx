import React from "react";
import styles from "./homepage.module.css";
import { Directory } from "../components/directory/directory.component";

export const Homepage = (params) => {
  return (
    <div className={styles.homepage}>
      <Directory></Directory>
    </div>
  );
};
