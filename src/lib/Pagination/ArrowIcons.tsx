import styles from "./Pagination.module.css";

function NextArrowIcon() {
  return (
    <div className={styles.nextArrow}>
      <svg viewBox="0 0 12 17" width={20}>
        <path
          d="M299.83,419.17h0l-1.42-1.27a.75.75,0,0,1,0-1.16h0l6-5.43.42-.37-.42-.37-6.06-5.42a.74.74,0,0,1,0-1.16h0l1.42-1.27h0a1.14,1.14,0,0,1,1.47,0h0l8.55,7.65h0a.74.74,0,0,1,0,1.16l-8.56,7.65A1.12,1.12,0,0,1,299.83,419.17Z"
          transform="translate(-298.12 -402.44)"
        />
      </svg>
    </div>
  );
}

function PrevArrowIcon() {
  return (
    <div className={styles.prevArrow}>
      <NextArrowIcon />
    </div>
  );
}
export { NextArrowIcon, PrevArrowIcon };
