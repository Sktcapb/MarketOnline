import http from "../../http-cammon"
import ProductProps from "../Interfaces/Product"

const findAll = async () => {
	const responde = await http.get<ProductProps[]>("products");
	return responde.data

}

const searchName = async (name: string) => {
	const reponse = await http.get<ProductProps[]>(`products?name=${name}`);
	return reponse.data
}

const ProductService = {
	findAll,
	searchName,
}

export default ProductService;