import { Product } from "../utils/products";
import ProductListItem from "./ProductListItem";

type ProductListProps = {
	products: Product[];
};

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
	return (
		<div>
			<div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl grid-flow-row-dense w-full ">
				{products.slice(0, 19).map((product) => (
					<ProductListItem key={product.id} {...product} />
				))}
			</div>
		</div>
	);
};
