import {gql} from '@apollo/client';

export const LOAD_Query = gql`
  {
    shop {
      name
    }
  }
`;
