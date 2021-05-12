import React from "react";

function App() {
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
							<th scope="col">DOB: M/DD/YY</th>
						</tr>
					</thead>
					<tbody className="text-center">
						<tr>
							<th>Pic</th>
							<td>Mark</td>
							<td>(364)645-3928</td>
							<td>email@gmail.com</td>
							<td>4/12/89</td>
						</tr>
						<tr>
							<th>Pic</th>
							<td>Thornton</td>
							<td>(364)645-3928</td>
							<td>email@gmail.com</td>
							<td>2/6/98</td>
						</tr>
						<tr>
							<th>Pic</th>
							<td>the Bird</td>
							<td>(364)645-3928</td>
							<td>email@gmail.com</td>
							<td>8/20/92</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}

export default App;
