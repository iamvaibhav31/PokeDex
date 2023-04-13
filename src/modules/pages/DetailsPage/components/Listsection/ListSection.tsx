import React from "react";
import styles from "./ListSection.module.css";
import { ListSectionProps } from "./Listsection.type";
const ListSection = ({ label, data }: ListSectionProps) => {
  const result = data.map((item) => item.toUpperCase()).join(" . ");
  return (
    <div className={styles.background}>
      <div className={styles.typeTitle}>{label}</div>
      <div>{result}</div>
    </div>
  );
};

export default ListSection;
