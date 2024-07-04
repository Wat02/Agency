import React from "react";
import styles from "@/app/Components/WhiteButton/white.module.css";

function WhiteB({ title }) {
  return <button className={`${styles.WhiteButton}`}>{title}</button>;
}

export default WhiteB;
