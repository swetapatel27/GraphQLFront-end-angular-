import { gql } from "apollo-angular";

export const GetBooks = gql`
query{
    books{
      id
      name
      genre
      author{
        name
      }
    }
  }`;