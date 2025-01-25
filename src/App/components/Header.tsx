import Input from "./Input"

const Header = () =>{
	return (
		<header className="flex fixed justify-center top-0 right-0 w-full bg-white">
			<div className="mx-auto flex items-center justify-between w-11/12 gap-52">
			  <div>
					<a href="/">
				   <img	
					  className="w-24"	
					  src="http://localhost:5173/public/assets/lojanet.png" 
						alt="Company logo" >
				   </img>	
				  </a>
				</div>

				<div className="w-4/5">	
				  <Input/>	
				</div>

				<div>
					Carrinho
				<a href="/">
				   <img	
					  className="w-24"	
					  src="http://localhost:5173/public/assets/carrinho.png" 
						alt="Company logo" >
				   </img>	
				  </a>
				</div>

			</div>	

		</header>
	)
};

export default Header;