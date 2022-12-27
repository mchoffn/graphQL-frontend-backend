import {gql} from '@apollo/client';

const GET_DRAGONS = gql`
    query getDragons {
        dragons {
            id
            name
            fish
            wood
            iron
            gatheringTime
        }
    }
`;

const GET_DRAGON = gql`
    query getDragon($id: ID!) {
        dragon(id: $id) {
            id
            name
            fish
            wood
            iron
            gatheringTime
        }
    }
`;

export { GET_DRAGONS, GET_DRAGON };