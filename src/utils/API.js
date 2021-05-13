import axios from "axios";
const URL = "https://randomuser.me/api/";

const API = () => {
	return axios.get(URL);
};

export default API;
