import React, { useState, useEffect } from "react";
import Rows from "./components/Rows";
import API from "./utils/Api";
import Table from "./components/Table";
import Search from "./components/Search";

function App() {
	const [List, setList] = useState({
		users: [],
		search: [],
	});

	const handleFind = (e) => {
		const user = e.target.value;
		const filtered = List.users.filter((res) => {
			return (res.name.first + " " + res.name.last)
				.toLowerCase()
				.includes(user.toLowerCase());
		});

		setList({
			...List,
			search: filtered,
		});
	};

	useEffect(() => {
		API.get().then((res) => {
			setList({
				...List,
				users: res.data.results,
				search: res.data.results,
			});
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Search handleFind={handleFind} />
			<Table row={<Rows arr={List.search} />} />
		</>
	);
}

export default App;
