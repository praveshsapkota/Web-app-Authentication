import React from "react";
import { gql, useQuery } from "@apollo/client";
const App: React.FC = () => {
	const { data, loading } = useQuery(gql`
		{
			user
		}
	`);
	if (loading) {
		return <div>loading...</div>;
	}
	return <div className="App">{JSON.stringify(data)}</div>;
};

export default App;
