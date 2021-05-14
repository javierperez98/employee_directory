import React, { useState, useEffect } from "react";
import Rows from "./components/Rows";
import API from "./utils/Api";

function App() {
	const [List, setList] = useState([]);
	const [Find, setFind] = useState("");

	useEffect(() => {
		API.search().then((res) => {
			setList(res.data.results);
		});
	}, []);

	const handleFind = (event) => setFind(event.target.value);
	console.log(Find);
	return (
		<>
			<input
				value={Find}
				onChange={handleFind}
				className="form-control form-control-lg mx-auto my-5 col-md-4"
				type="text"
				placeholder="Search User"
			/>
			<div className="table-responsive">
				<table className="table">
					<thead className="thead-light text-center">
						<tr>
							<th scope="col">Image</th>
							<th scope="col">Name</th>
							<th scope="col">Phone</th>
							<th scope="col">Email</th>
							<th scope="col">DOB: MM/DD/YY</th>
						</tr>
					</thead>
					<Rows arr={List} />
				</table>
			</div>
		</>
	);
}

export default App;
