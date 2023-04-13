import { ApolloError } from "@apollo/client";

export interface PokemonPageProps {
  data: any;
  loading: boolean;
  error: string | ApolloError;
}
