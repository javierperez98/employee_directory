import React from "react";

function Table(props) {
	return (
		<div className="table-responsive">
			<table className="table">
				<thead className="thead-light text-center">
					<tr>
						<th scope="col" className="text-dark">
							Image
						</th>
						<th scope="col">
							<button
								type="button"
								className="btn btn-link p-0 text-decoration-none text-dark font-weight-bold"
								onClick={props.handleSort}
							>
								Name <i className="fa fa-sort" />
							</button>
						</th>
						<th scope="col" className="text-dark">
							Phone
						</th>
						<th scope="col" className="text-dark">
							Email
						</th>
						<th scope="col" className="text-dark">
							DOB: MM/DD/YY
						</th>
					</tr>
				</thead>
				{props.row}
			</table>
		</div>
	);
}

export default Table;
