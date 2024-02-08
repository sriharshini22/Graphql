import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://fuonkd3qvbchzla6javmvydvg4.appsync-api.us-east-1.amazonaws.com/graphql",
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
