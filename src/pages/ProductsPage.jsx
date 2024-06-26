import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { getProducts } from '../api';
import useAuth from '../hooks/useAuth';

export default function ProductsPage() {
	useAuth();

	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts()
			.then((products) => {
				setProducts(products);
			})
			.catch((error) => {
				console.error('[getProducts error]', error);
			});
	}, []);

	return (
		<main>
			<section className="m-5 pt-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
					{products.map((product) => (
						<div
							key={product.id}
							className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
							<Link to={`/products/${product.id}`}>
								<img
									className="rounded-t-lg p-8"
									src={product.thumbnail}
									alt="product image"
								/>
							</Link>
							<div className="px-5 pb-5">
								<Link to={`/products/${product.id}`}>
									<h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
										{product.title}
									</h3>
								</Link>
								<div className="flex items-center mt-2.5 mb-5">
									{[...Array(5)].map((_, index) => (
										<svg
											key={index}
											className={`w-5 h-5 ${
												product.rating >= index
													? 'text-yellow-300'
													: 'text-gray-300'
											}`}
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
										</svg>
									))}
									<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
										{product.rating}
									</span>
								</div>

								<div className="flex items-center justify-between">
									<span className="text-3xl font-bold text-gray-900 dark:text-white">
										${product.price}
									</span>
									<button
										type="button"
										href="#"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
										Add to cart
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
