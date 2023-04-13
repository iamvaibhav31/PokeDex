import { ApolloError } from "apollo-boost";

export interface DetailsPageProps {
  details: {};
  attacks: {};
  loading: boolean;
  error: string | ApolloError;
}
