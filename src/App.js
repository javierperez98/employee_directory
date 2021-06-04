import React, { useState, useEffect } from "react";
import Rows from "./components/Rows";
import API from "./utils/Api";
import Table from "./components/Table";
import Search from "./components/Search";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
	const [List, setList] = useState({
		users: [],
		search: [],
		sorted: false,
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

	const handleSort = () => {
		if (!List.sorted) {
			const sortedUsers = List.users.sort((a, b) =>
				a.name.first.localeCompare(b.name.first)
			);
			setList({
				...List,
				search: sortedUsers,
				sorted: true,
			});
			console.log("Sorted A-Z");
		} else {
			const sortedUsers = List.users.sort((a, b) =>
				b.name.first.localeCompare(a.name.first)
			);
			setList({
				...List,
				search: sortedUsers,
				sorted: false,
			});
			console.log("Sorted Z-A");
		}
	};

	useEffect(() => {
		API.get().then((res) => {
			setList({
				...List,
				users: res.data.results,
				search: res.data.results,
			});
		});
	}, []);

	return (
		<>
			<Header />
			<Main>
				<Search handleFind={handleFind} />
				<Table handleSort={handleSort}>
					<Rows arr={List.search} />
				</Table>
			</Main>
			<Footer />
		</>
	);
}

export default App;
