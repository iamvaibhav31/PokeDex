import React from "react";
import { useRouter } from "next/router";
import styles from "./HomePage.module.css";
const HomePage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.title}>Pokedex</div>

        <div></div>
        <div
          className={styles.startButton}
          onClick={() => {
            router.push("/pokemons/1");
          }}
        >
          Get Started{" "}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
