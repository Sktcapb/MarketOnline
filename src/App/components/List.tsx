import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

type ListProps = ComponentProps<"li"> & VariantProps<typeof listVariants>;

const listVariants = tv({
	variants:{
		variant:{
			primary:"flex rounded-md px-1 py-4 text-sm capitalize text-gray-700 hover:bg-gray-200"
		},
	},
	defaultVariants:{
		variant:"primary"
	},
});

const List = ({children, className, onClick, variant, ...props}:ListProps) => {
	const listClass = twMerge(listVariants({variant}), className);

	return(
		<li className={listClass} { ...props}>{children}</li>
	);
}

export default List;

