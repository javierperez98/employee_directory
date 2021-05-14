import React, { useState, useEffect } from "react";
import Rows from "./components/Rows";
import API from "./utils/Api";
import Table from "./components/Table";

function App() {
	const [List, setList] = useState([]);
	const [Original, setOriginal] = useState([]);
	const [Find, setFind] = useState("");

	useEffect(() => {
		API.search().then((res) => {
			setList(res.data.results);
			setOriginal(res.data.results);
		});
	}, []);

	const handleFind = (event) => {
		setFind(event.target.value);
		search();
	};

	const search = () => {
		const result = List.filter((user) =>
			(user.name.first + " " + user.name.last)
				.toLowerCase()
				.includes(Find.toLowerCase())
		);
		if (result.length > 0) {
			setList(result);
		} else {
			setList(Original);
		}
	};

	const reset = () => {
		setList(Original);
		setFind("");
	};

	return (
		<>
			<div className="d-flex flex-row">
				<input
					value={Find}
					onChange={handleFind}
					className="form-control form-control-lg mx-auto my-5"
					type="text"
					placeholder="Search User"
				/>
				<button type="button" onClick={reset} className="btn btn-secondary my-5">
					Reset
				</button>
			</div>
			<Table row={<Rows arr={List} />} />
		</>
	);
}

export default App;
