import { gql } from "graphql-tag";

const GET_EVOLUTION_DETAIL = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      name
      evolutions {
        id
        number
        name
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        evolutions {
          ...RecursivePokemonFragment
        }
        maxHP
        image
      }
    }
  }
`;

export { GET_EVOLUTION_DETAIL };
