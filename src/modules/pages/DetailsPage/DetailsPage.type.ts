import { ApolloError } from "apollo-boost";

export interface DetailsPageProps {
  details: any;
  attacks: any;
  loading: boolean;
  error: string | ApolloError;
}
