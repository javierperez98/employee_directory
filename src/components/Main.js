import React from "react";

function Main(props) {
	return (
		<main>
			<section className="d-flex flex-column align-items-center px-3 px-md-5">
				{props.children}
			</section>
		</main>
	);
}

export default Main;
