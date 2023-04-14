import React, { useEffect, useState } from "react";
import { GetPokemonsApi } from "@/services/pokemonsServices";
import { useRouter } from "next/router";
import usePagination from "@/Hooks/usePagination";
import styles from "./PokemonPage.module.css";
import Pagination from "@/lib/Pagination/Pagination";
import CardList from "./components/CardList/CardList";
import type { PokemonPageProps } from "./PokemonPage.type";

const PokemonPage = ({ data, loading, error }: PokemonPageProps) => {
  const router = useRouter();
  const { CurrentPokemonsList } = usePagination();
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPokemonsList, setCurrentPokemonsList] = useState<any[]>([]);

  const handleRealTimeData = async (pageno: number) => {
    const res = await GetPokemonsApi(pageno);
    setPokemonList(res.data?.pokemons);
  };

  useEffect(() => {
    const page = Number(router.query.pageno);
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  }, [router.query.pageno]);

  useEffect(() => {
    if (currentPage <= 3) {
      setPokemonList(data);
    } else {
      handleRealTimeData(currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    const currentPokemonsList = CurrentPokemonsList(currentPage, pokemonList);
    setCurrentPokemonsList(currentPokemonsList);
  }, [pokemonList]);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <Pagination data={currentPokemonsList} pageno={currentPage}>
          <CardList data={currentPokemonsList} />
        </Pagination>
        <div></div>
      </div>
    </div>
  );
};

export default PokemonPage;

export async function getStaticPropsFunction() {
  // console.log("here");
  const first = 3;
  const res = await GetPokemonsApi(first);
  // console.log(res);
  return {
    props: {
      data: res.data?.pokemons,
      loading: res.loading,
      error: res.error ?? "",
    },
  };
}
