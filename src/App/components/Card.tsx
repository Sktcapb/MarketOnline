import Button from "./Button";

const Card = () => {
	return(
		<div className="bg-white p-4 w-60 rounded-2xl p-2">

		  <div>
			  <img src="http://localhost:5173/public/assets/Produtos/C.png">
				</img>
		  </div>

		  <div className="p-4">
			  <div className="flex justify-center items-center mb-2">
					<h3>Name Product</h3>
				</div>

				<div className="flex justify-center items-center">
					<span>Value Product</span>
				</div>

		  </div>

			<Button>Adicionar no carrinho</Button>

		</div>
	)
};

export default Card;