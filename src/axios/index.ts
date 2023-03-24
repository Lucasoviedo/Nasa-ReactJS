import axios from "axios";

const clienteAxios = axios.create({
	baseURL: "http://127.0.0.1:3300/",
});

export default clienteAxios;
