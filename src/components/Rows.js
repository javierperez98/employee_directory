import React from "react";
import formatDate from "../utils/formatDate";

function Rows(props) {
	let i = 0;
	return (
		<tbody className="text-center">
			{props.arr.map((info) => (
				<tr key={(i += 1)}>
					<td>
						<img src={info.picture.medium} alt={info.name.first}></img>
					</td>
					<td>
						{info.name.first} {info.name.last}
					</td>
					<td>{info.phone}</td>
					<td>{info.email}</td>
					<td>{formatDate(info.dob.date)}</td>
				</tr>
			))}
		</tbody>
	);
}

export default Rows;
