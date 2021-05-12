import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
	<>
		<header className="bg-dark p-5 border-bottom border-primary">
			<h1 className="text-light">Employee Directory</h1>
		</header>
		<main>
			<section className="d-flex flex-column align-items-center px-3 px-md-5">
				<App />
			</section>
		</main>
		<footer></footer>
	</>,

	document.getElementById("root")
);

reportWebVitals();
