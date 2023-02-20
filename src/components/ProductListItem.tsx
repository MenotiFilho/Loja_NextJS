import { Product } from "../utils/products";
import { Button } from "@primer/react";
import Image from "next/image";
import { ShoppingBagOpen } from "phosphor-react";

const ProductListItem: React.FC<Product> = ({
	category,
	id,
	description,
	image,
	price,
	title,
}) => {
	return (
		<div className="z-10 bg-white border-solid border-2 border-gr w-fit h-fit flex items-center flex-col justify-self-center p-5 gap-5 max-w-xl">
			<p className="ml-auto text-xs text-gray-400 italic -mt-4 -mr-3">
				{category}
			</p>
			<div className="relative h-[200px] w-[200px]">
				<Image
					src={image}
					alt=""
					fill
					sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
					className="object-contain z-0"
				/>
			</div>
			<p className="line-clamp-1 flex items-center justify-center max-w-[400px] text-center text-sm   ">
				{title}
			</p>
			<p className="font-bold text-3xl">${price}</p>
			<p className="capitalize line-clamp-2 min-h-[48px]">{description}</p>
			<Button leadingIcon={ShoppingBagOpen} variant="default">
				Adicionar ao carrinho
			</Button>
		</div>
	);
};

export default ProductListItem;
