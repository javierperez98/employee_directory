import React from "react";

function Header() {
	return (
		<header className="bg-dark p-5 border-bottom border-primary">
			<h1 className="text-light">Employee Directory</h1>
			<p className="text-light">
				Search for Employees and order by name or email.
			</p>
		</header>
	);
}

export default Header;
