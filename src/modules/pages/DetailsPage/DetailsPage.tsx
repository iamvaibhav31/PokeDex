import React, { useState } from "react";
import styles from "./DetailsPage.module.css";
import {
  GetPokemonDetailsApi,
  GetPokemonAttacksApi,
} from "@/services/pokemonsServices";
import { DetailsPageProps } from "./DetailsPage.type";
import { GetServerSideProps } from "next";
import ListSection from "./components/Listsection/ListSection";
import ProgressSection from "./components/Progressection/Progresssection";
import Evaluationmodel from "./components/Evaluationmodel/Evaluationmodel";
import { GetEvolutionDetailsApi } from "@/services/EvolutionServices";
import { useRouter } from "next/router";
import { showToastMessage } from "@/lib/Toastify/ToastMessages";
const DetailsPage = ({
  attacks = {},
  details = {},
  error,
  loading,
}: DetailsPageProps) => {
  // console.log(attacks, details);
  const router = useRouter();
  const [showModel, setShowModel] = useState(false);
  const [evollutionData, setEvolutionData] = useState([]);
  const [evoError, setEvoError] = useState("");

  const handelEvolutionData = async () => {
    const { slug } = router.query;
    try {
      const res = slug ? await GetEvolutionDetailsApi(slug[1], slug[0]) : [];
      console.log(res);
      setEvolutionData(res?.data?.pokemon?.evolutions);
    } catch (err) {
      setEvoError(err?.message);
      showToastMessage("ERROR", err?.message);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.Title}>{details?.name}</div>
          <div className={styles.infoCon}>
            <section className={styles.rightSection}>
              <div className={styles.imgCon}>
                <img
                  src={details?.image}
                  alt="pokemonImg"
                  className={styles.img}
                />
              </div>
              <div className={styles.evolutioncon}>
                <button
                  className={styles.evolutionButton}
                  onClick={() => {
                    handelEvolutionData();
                    if (!evoError) {
                      setShowModel((preState) => !preState);
                    }
                  }}
                >
                  Evolve
                </button>
              </div>
            </section>
            <section className={styles.leftSection}>
              <ListSection data={details?.types} label="Type" />
              <ListSection data={details?.resistant} label="Resistant" />
              <ListSection data={details?.weaknesses} label="Weaknesses" />
              <div className={styles.actionTitle}>Attacks</div>

              <ProgressSection label="Fast" data={attacks?.attacks.fast} />
              <ProgressSection
                label="Special"
                data={attacks?.attacks.special}
              />
            </section>
          </div>
        </div>
      </div>
      {showModel && (
        <Evaluationmodel
          isOpen={showModel}
          hideModal={() => {
            setShowModel((preState) => !preState);
          }}
          data={evollutionData}
        />
      )}
    </>
  );
};

export default DetailsPage;

export const getServerSidePropsFunction: GetServerSideProps = async ({
  params,
}) => {
  const { slug } = params || {};
  console.log(slug);
  let res = slug
    ? await Promise.all([
        GetPokemonDetailsApi(slug[1], slug[0]),
        GetPokemonAttacksApi(slug[1], slug[0]),
      ])
    : [];

  return {
    props: {
      details: res[0].data?.pokemon ?? {},
      attacks: res[1].data?.pokemon ?? {},
      loading: res[0]?.loading && res[1]?.loading,
      error: (res[0]?.error || res[1]?.error) ?? "",
    },
  };
};
