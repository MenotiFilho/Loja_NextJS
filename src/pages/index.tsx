import fetch from "isomorphic-fetch";
import "../app/globals.css";
import { ProductList } from "@/components/ProductList";
import { ThemeProvider } from "@primer/react";
import Header from "../components/Header";

type Product = {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
	category: string;
};
export type Props = {
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

export default function Home({ products }: Props) {
	return (
		<ThemeProvider>
			<Header />
			<div className="bg-zinc-300 flex flex-col items-center justify-center">
				<ProductList products={products} />
			</div>
		</ThemeProvider>
	);
}
