import React from "react";

import { GetStaticProps } from "next";
import { PokemonPage } from "@/modules/pages";
import { getStaticPropsFunction } from "@/modules/pages/PokemonPage";
import type { PokemonPageProps } from "@/modules/pages/PokemonPage/PokemonPage.type";
const PokemonPages = ({ data, loading, error }: PokemonPageProps) => {
  return <PokemonPage data={data} loading={loading} error={error} />;
};

export default PokemonPages;

export async function getStaticPaths() {
  const paths = [];
  for (let i = 1; i <= 3; i++) {
    paths.push({ params: { pageno: i.toString() } });
  }
  return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticProps = () => getStaticPropsFunction();
