import Input from "./Input"
import { useQuery } from "react-query";
import ProductService from "../services/product.service";
import ProductProps from "../Interfaces/Product";
import { ChangeEvent, useRef, useState } from "react";
import { debounce } from "lodash";
import List from "./List";
import { useOnClickOutside } from "../hooks/useClickOutside";



const Header = () =>{
	const [productName, setProductName] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const refDropDown = useRef<HTMLUListElement>(null);

  const {
   	data: productsByName,
	  isLoading,
	  error,
    }= useQuery<ProductProps[], Error>(["query-products-by-name",  productName ], async () =>{
	return ProductService.searchName(productName);
  },
  {
		enabled: productName.length > 0,
		onSuccess: (res) => { // logica para mostrar lista
			setIsOpen(res?.length > 0);
		}
	}
);

const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
	const value = e.target.value;
	setProductName(value)
}

useOnClickOutside (refDropDown, () => {
	setIsOpen(false);
})

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

				<div className="w-4/5 relative">	
				  <Input onChange={debounceHandleOnChange}/>
					{isOpen &&
					<ul ref={refDropDown} className="absolute z-50 mt-4 max-h-60 w-full overflow-auto rounded-md bg-white p-4 shadow-lg">
						{
							productsByName?.map((product: ProductProps) =>{
								return(
									<List className="items-center justify-between">
										{product.name}
										<div>
											   <img src={`http://localhost:5173/public/assets/Produtos/${product.image}.png`}
											     className="h-20 rounded-t-lg object-cover"/>
										 	   <span>R$ {product.price}</span>
										</div>
									</List>
								)
							})
						}
						
					</ul>
					}
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