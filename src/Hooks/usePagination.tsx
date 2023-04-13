import { useContext, useEffect, useState } from "react";
import DataContext from "@/contextApi/DataContext";
import { useRouter } from "next/router";

const usePagination = () => {
  const getIndex = (pageno: number) => {
    if (pageno === 1) {
      return [0, 20];
    } else {
      const previousPage = (pageno - 1) * 20;
      return [previousPage, previousPage + 20];
    }
  };

  const CurrentPokemonsList = (pageno: number, data: any[]) => {
    const index = getIndex(pageno);
    const currentPokemonsList = data.slice(index[0], index[1]);
    return currentPokemonsList;
  };

  return { CurrentPokemonsList };
};

export default usePagination;
