import client from "@/utils/apolloClient";
import { GET_EVOLUTION_DETAIL } from "./querys/EvoluationQuerys";

export const GetEvolutionDetailsApi = (id: string, name: string) => {
  return client.query({
    query: GET_EVOLUTION_DETAIL,
    variables: {
      id: id,
      name: name,
    },
  });
};
