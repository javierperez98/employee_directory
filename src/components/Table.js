import React from "react";

function Table(props) {
	return (
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
				{props.row}
			</table>
		</div>
	);
}

export default Table;
