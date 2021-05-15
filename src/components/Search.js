import React from "react";

function Search(props) {
	return (
		<div className="d-flex flex-row">
			<input
				onChange={props.handleFind}
				className="form-control form-control-lg mx-auto my-5"
				type="text"
				placeholder="Search User"
			/>
		</div>
	);
}

export default Search;
