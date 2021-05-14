import React from "react";

function Search(props) {
	return (
		<div className="d-flex flex-row">
			<input
				value={props.find}
				onChange={props.handleFind}
				className="form-control form-control-lg mx-auto my-5"
				type="text"
				placeholder="Search User"
			/>
			<button
				type="button"
				onClick={props.reset}
				className="btn btn-secondary my-5"
			>
				Reset
			</button>
		</div>
	);
}

export default Search;
