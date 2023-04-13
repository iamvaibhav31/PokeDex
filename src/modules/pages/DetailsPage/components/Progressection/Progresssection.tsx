import React from "react";
import styles from "./Progresssection.module.css";
import { ProgressSectionProps } from "./Progresssection.type";
const ListSection = ({ label, data }: ProgressSectionProps) => {
  return (
    <div className={styles.background}>
      <div className={styles.typeTitle}>{label}</div>
      {data.map((item, index) => (
        <div key={index}>
          <div className={styles.progressbartitle}>
            <span>{item.name}</span>
            <span>{item.type}</span>
          </div>
          <div className={styles.progressBarCon}>
            0
            <input
              type="range"
              name={item.name}
              value={item.damage}
              className={styles.progressBar}
            />
            100
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListSection;
