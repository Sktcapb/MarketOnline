import Button from "./Button";
import { Product } from "../Interfaces/Product";

const Card = ({item}: Product) => {
	return(
		<div className="flex bg-white flex-col p-4 h-96 w-64 justify-center rounded-2xl">

		  <div className="flex justify-center">
			  <img 
				alt={item.name}
				className="h-40m"
				src={`http://localhost:5173/public/assets/Produtos/${item.image}.png`}>
				</img>
		  </div>

		  <div className="p-4">
			  <div className="mb-2 flex justify-center items-center">
					<span className="text-center capitalize font-bold">{item.name}</span>
				</div>

				<div className="flex justify-center items-center">
					<span>R$ {item.price}</span>
				</div>

		  </div>

			<Button>Adicionar no carrinho</Button>

		</div>
	)
};

export default Card;