import { Button, ThemeProvider } from "@primer/react";
import fetch from "isomorphic-fetch";
import Image from "next/image";
import { ShoppingBagOpen } from "phosphor-react";
import "../app/globals.css";

type Product = {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
	category: string;
};
type Props = {
	products: Product[];
};

async function getProducts(): Promise<Props> {
	const res = await fetch("https://fakestoreapi.com/products");
	const products = await res.json();
	return { products };
}

export async function getServerSideProps() {
	const data = await getProducts();
	return { props: data };
}

export default function Home(props: Props) {
	return (
		<ThemeProvider>
			<div className="flex items-center justify-center">
				<div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row-dense w-full bg-gray-400 gap-5 max-w-fit">
					{props.products.map(
						({ category, id, description, image, price, title }) => (
							<div
								key={id}
								className="bg-white w-fit h-fit flex items-center flex-col justify-self-center p-5 gap-5 max-w-xl"
							>
								<p className="ml-auto text-xs text-gray-400 italic -mt-4 -mr-3">
									{category}
								</p>
								<div className="relative h-[200px] w-[200px]">
									<Image src={image} alt="" fill className="object-contain" />
								</div>
								<p className="line-clamp-1 flex items-center justify-center max-w-[400px] text-center text-sm   ">
									{title}
								</p>
								<p className="font-bold text-3xl">${price}</p>
								<p className="capitalize line-clamp-2 capitalize-first min-h-[48px]">
									{description}
								</p>
								<Button leadingIcon={ShoppingBagOpen} variant="default">
									Adicionar ao carrinho
								</Button>
							</div>
						)
					)}
				</div>
			</div>
		</ThemeProvider>
	);
}

{
	/* <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row-dense w-full bg-gray-400 gap-5 max-w-fit">
			{products.map(({ category, id, description, image, price, title }) => (
				<div
					key={id}
					className="bg-white w-fit h-fit flex items-center flex-col justify-self-center p-5 gap-5 max-w-xl"
				>
					<p className="ml-auto text-xs text-gray-400 italic -mt-4 -mr-3">
						{category}
					</p>
					<div className="relative h-[200px] w-[200px]">
						<Image src={image} alt="" fill className="object-contain" />
					</div>
					<p className="line-clamp-1 flex items-center justify-center max-w-[400px] text-center text-sm   ">
						{title}
					</p>
					<p className="font-bold text-3xl">${price}</p>
					<p className="capitalize line-clamp-2 capitalize-first min-h-[48px]">
						{description}
					</p>
					<Button leadingIcon={ShoppingBagOpen} variant="default">
						Adicionar ao carrinho
					</Button>
				</div>
			))}
		</div> */
}
