import React, { useState, useEffect } from "react";
import Rows from "./components/Rows";
import API from "./utils/Api";

function App() {
	const [List, setList] = useState([]);
	useEffect(() => {
		API.search().then((res) => {
			setList(res.data.results);
		});
	}, []);

	return (
		<>
			<input
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
