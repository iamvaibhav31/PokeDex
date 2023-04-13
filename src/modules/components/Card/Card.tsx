import React from "react";
import styles from "./Card.module.css";
import type { CardProps } from "./Card.type";
import Link from "next/link";
const Card = ({
  image,
  classification,
  name,
  number,
  types,
  id,
}: CardProps) => {
  console.log(types);
  const result = types.map((item) => item.toUpperCase()).join(" . ");
  return (
    <Link href={`/details/${name}/${id}`} className={styles.container}>
      <div className={styles.imgCon}>
        <img src={image} alt="pokemonImg" className={styles.img} />
      </div>
      <div className={styles.infoCon}>
        <span className={styles.title}>{name}</span>
        <span className={styles.subTitle}>{classification}</span>
      </div>
      <div>{result}</div>
      <div className={styles.tag}>#{number}</div>
    </Link>
  );
};

export default Card;
