import { gql } from "@apollo/client";

const ADD_DRAGON = gql`
  mutation addDragon($name: String!, $fish: String!, $wood: String!, $iron: String!, $gatheringTime: String!) {
    addDragon(
      name: $name,
      fish: $fish,
      wood: $wood,
      iron: $iron,
      gatheringTime: $gatheringTime
    ) {
      id
      name
      fish
      wood
      iron
      gatheringTime
    }
  }
`;

const DELETE_DRAGON = gql`
    mutation deleteDragon($id: ID!) {
        deleteDragon(id: $id) {
          id
        }
    }
`;

const UPDATE_DRAGON = gql`
  mutation updateDragon(
    $id: ID!
    $name: String!
    $fish: String!
    $wood: String!
    $iron: String!
    $gatheringTime: String!
  ) {
    updateDragon(
      id: $id
      name: $name
      fish: $fish
      wood: $wood
      iron: $iron
      gatheringTime: $gatheringTime
    ) {
      id
      name
      fish
      wood
      iron
      gatheringTime
    }
  }
`;

export { DELETE_DRAGON, ADD_DRAGON, UPDATE_DRAGON };