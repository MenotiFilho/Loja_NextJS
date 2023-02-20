import fetch from "isomorphic-fetch";

interface Props {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
	category: string;
}

export const fetchData = async (path: string) => {
	const response = await fetch(`https://fakestoreapi.com${path}`);
	const data = await response.json();
	return data;
};
