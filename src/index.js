import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
	<>
		<Header />
		<Main app={<App />} />
		<Footer />
	</>,

	document.getElementById("root")
);

reportWebVitals();
