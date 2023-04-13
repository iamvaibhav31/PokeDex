import Apolloprovider from "./ApolloProvider";

import React from "react";
const Provider = ({ children }: React.PropsWithChildren) => {
  return <Apolloprovider>{children}</Apolloprovider>;
};

export default Provider;
