import React from "react";
import API from "../utils/Api";
import formatDate from "../utils/formatDate";

API.search().then((res) => {
	return res.data.results;
});

function Rows(props) {
	return (
		<tbody className="text-center">
			{props.arr.map((info) => (
				<tr>
					<td>
						<img src={info.picture.thumbnail} alt={info.name.first}></img>
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
