interface ProductProps {
	id: number,
	name: string,
	Description: string,
	price: number,
	quantity: number,
	category: string,
	image: string
}

export interface Product {
	item: ProductProps;
}

export default ProductProps;
