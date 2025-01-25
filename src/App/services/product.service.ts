import http from "../../http-cammon"
import ProductProps from "../Interfaces/Product"

const findAll = async () => {
	const responde = await http.get<ProductProps[]>("products");
	return responde.data

}

export default findAll;