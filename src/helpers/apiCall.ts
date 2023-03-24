import clienteAxios from "../axios";
import { putDescriptionDB, getDescriptionsFromDB } from "./typesHelpers";

export type infoRequestType = {
	method: "POST" | "GET";
	url: string;
	headers?: {
		"x-acces-token": string;
	};
	data: putDescriptionDB | getDescriptionsFromDB;
};

export default function apiCall(infoRequest: infoRequestType) {
	return clienteAxios(infoRequest)
		.then((resp) => {
			if (resp.status !== 200) {
				throw new Error("error en la peticion");
			}
			return resp.data;
		})
		.catch((err) => err);
}
