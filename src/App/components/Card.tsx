const Card = () => {
	return(
		<div className="bg-white w-60 rounded-2xl p-2">

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

			<button className="w-full rounded-2xl bg-blue-500 py-2 px-4 hover:bg-blue-700 hover:text-white" >Adicionar no carrinho</button>

		</div>
	)
};

export default Card;