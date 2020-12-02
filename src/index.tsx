import React from "react";
import { render } from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import { } from "@apollo/client";
// import { ApolloProvider } from "react-apollo";
import App from "./App";
// import {} from "apollo-boost";

const client = new ApolloClient({
	uri: "http://localhost:4001/graphql",
	cache: new InMemoryCache(),
});

render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);

// const ApolloApp: ReactElement<()=>void> = () => {
// 	<ApolloProvider client={client}>
// 		<App />
// 	</ApolloProvider>;
// };
// render(ApolloApp(), document.getElementById("root"));
