import axios from "axios";

const API = {
	get: function () {
		return axios.get(
			"https://randomuser.me/api/?results=50&inc=picture,name,phone,email,dob&nat=us"
		);
	},
};
export default API;
