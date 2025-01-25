import { twMerge } from 'tailwind-merge';
import {tv, VariantProps } from 'tailwind-variants'
import { ComponentProps } from 'react';


const buttonVariants = tv ({
	variants:{
		variant:{
			primary:"w-full rounded bg-blue-500 py-2 px-4  hover:bg-blue-700 hover:text-white"
		},
	},
	defaultVariants:{
		variant:"primary",
	},
});

type PorpsButton = ComponentProps<"button"> &
   VariantProps<typeof buttonVariants>;

const Button = ({className, children,variant, ...props}: PorpsButton) =>{
  const classButton = twMerge(buttonVariants({variant}), className)

	return(
		
		<button className={classButton} {...props}>{children}</button>
	)

}

export default Button;