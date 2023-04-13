import React from "react";
import styles from "./Pagination.module.css";
import { NextArrowIcon, PrevArrowIcon } from "./ArrowIcons";
import type { PaginationProps } from "./Pagination.type";
import { useRouter } from "next/router";

const Pagination = ({ children, data, pageno }: PaginationProps) => {
  const router = useRouter();
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        pokemon&rsquo;s
        <div className={styles.bottonCon}>
          {pageno > 1 && (
            <button
              className={styles.button}
              onClick={() => {
                router.push({
                  pathname: router.pathname,
                  query: {
                    pageno: `${pageno - 1}`,
                  },
                });
              }}
            >
              <PrevArrowIcon />
            </button>
          )}

          {data.length === 20 && (
            <button
              className={styles.button}
              onClick={() => {
                router.push({
                  pathname: router.pathname,
                  query: {
                    pageno: `${pageno + 1}`,
                  },
                });
              }}
            >
              <NextArrowIcon />
            </button>
          )}
        </div>
      </div>

      <div className={styles.cardCon}>{children}</div>
    </section>
  );
};

export default Pagination;
