import Input from "./Input"
import { useQuery } from "react-query";
import ProductService from "../services/product.service";
import ProductProps from "../Interfaces/Product";
import { ChangeEvent, useState } from "react";
import { debounce } from "lodash";


const Header = () =>{
	const [productName, setProductName] = useState("");

  const {
   	data: productsByName,
	  isLoading,
	  error,
    }= useQuery<ProductProps[], Error>(["query-products-by-name",  productName ], async () =>{
	return ProductService.searchName(productName);
  },
  {
		enabled: productName.length > 0,
	}
);

const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
	const value = e.target.value;
	setProductName(value)
}

const debounceHandleOnChange = debounce(handleInput, 500)

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
				  <Input onChange={debounceHandleOnChange}/>
					<ul>
						{
							productsByName?.map((product: ProductProps) =>{
								return(
									<li>
										{product.name}
									</li>
								)
							})
						}
						
					</ul>
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