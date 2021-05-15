import React from "react";

function Search(props) {
	return (
		<div className="my-5 d-flex flex-row col-md-9 col-lg-6">
			<label className="form-label m-0 d-flex align-items-center">
				<h2 className="m-0 text-dark">Search: </h2>
			</label>
			<input
				onChange={props.handleFind}
				className="form-control form-control-lg mx-auto p-1"
				type="text"
				placeholder="Enter Name"
			/>
		</div>
	);
}

export default Search;
