import React, { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import Image from "next/image";

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}

function ProductComponent() {
	const [products, setProducts] = useState<Product[]>([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch("https://fakestoreapi.com/products");
			const data = await res.json();
			setProducts(data);
		};
		fetchProducts();
	}, []);
	return (
		<div className="p-5 grid grid-cols-3 grid-flow-row-dense bg-gray-400 gap-5 ">
			{products.map(({ category, id, description, image, price, title }) => (
				<div
					key={id}
					className="bg-white w-fit h-fit flex items-center flex-col"
				>
					<p className="max-w-[400px] text-center">{title}</p>
					<div className="relative h-[200px] w-[200px]">
						<Image src={image} alt="" fill className="object-contain" />
					</div>
				</div>
			))}
		</div>
	);
}

export default ProductComponent;
