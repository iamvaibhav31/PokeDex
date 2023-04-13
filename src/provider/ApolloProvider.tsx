import { ApolloProvider } from "@apollo/client";
import client from "@/utils/apolloClient";
import React from "react";

const Apolloprovider = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apolloprovider;
