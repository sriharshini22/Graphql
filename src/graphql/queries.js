/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNew = /* GraphQL */ `
  query GetNew($id: Int!) {
    getNew(id: $id) {
      id
      name
      __typename
    }
  }
`;
export const listNews = /* GraphQL */ `
  query ListNews(
    $filter: TableNewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        __typename
      }
      nextToken
      __typename
    }
  }
`;
