"use client";
import { AllCategoriesProps, AllProductsProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ErrorMsg } from "../Error";
import { updateProduct } from "@/Services/productService";
import { getAllCategories } from "@/Services/categoryService";

const UpdateProductForm = ({ product  }: { product: AllProductsProps }) => {
	const [name, setName] = useState(product?.name || "");
	const [image, setImage] = useState(product?.image || "");
	const [price, setPrice] = useState<number>(product?.price || 0);
	const [stock, setStock] = useState<number>(product?.stock || 0);
	const [categoryId, setCategoryId] = useState(product?.categoryId || "");
	const [isLoaded, setIsLoaded] = useState(false);
	const [isReloadNeeded, setisReloadNeeded] = useState(false);
	const [productData, setproductData] = useState<AllProductsProps>();
	const [categoriesList, setCategoriesList] = useState<AllCategoriesProps[]>(
		[]
	);

	useEffect(() => {
		getAllCategories()
			.then((res) => {
				toast.success("Categories loaded !");
				setCategoriesList(res);
				console.log(res);
			})
			.catch((e) => {
				toast.error("Error getting categories");
				console.log(e);
			});
	}, [isLoaded]);

	useEffect(() => {
		if (!isLoaded && productData) {
			setName(productData?.name);
			setImage(productData?.image);
			setPrice(productData?.price);
			setStock(productData?.stock);
			setCategoryId(productData?.categoryId);
			setIsLoaded(true);
		}
	}, [product, isLoaded]);
	// const {
	// 	register,
	// 	handleSubmit,
	// 	watch,
	// 	formState: { errors },
	// } = useForm<AllProductsProps>();

	// const onSubmit: SubmitHandler<AllProductsProps> = () =>
	function handleSubmit() {
		let productUpdateData = {
			id: product.id,
			name: name,
			image: image,
			stock: stock,
			price: price,
			categoryId: categoryId,
		};
		updateProduct(productUpdateData, productUpdateData.id)
			.then((res) => {
				console.log(res);
				console.log(productUpdateData);
				setisReloadNeeded(true);
				toast.success("Product updated !");
			})
			.catch((e) => {
				toast.error("Error");
				console.log(e);
				console.log(productUpdateData);
			}),
			[isReloadNeeded];
	}

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/2 mx-auto">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
					Edit a product
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<div className="space-y-6">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-black"
						>
							Product name
						</label>
						<div className="mt-2">
							<input
								onChange={(e) => setName(e.target.value)}
								defaultValue={product?.name}
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								// {...register("name", { required: true })}
							/>
							{/* {errors.name && <ErrorMsg content={"name"} />} */}
						</div>
					</div>
					<div>
						<label
							htmlFor="image"
							className="block text-sm font-medium leading-6 text-black"
						>
							Product image
						</label>
						<div className="mt-2">
							<input
								onChange={(e) => setImage(e.target.value)}
								defaultValue={product?.image}
								type="url"
								id="image"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								// {...register("image", { required: true })}
							/>
							{/* {errors.image && <ErrorMsg content={"image"} />} */}
						</div>
						{/* <p>Preview</p>
								<img
									src={image || cryptoProps?.image}
									className="w-32 h-32 object-cover"
								/> */}
					</div>
					<div>
						<label
							htmlFor="stock"
							className="block text-sm font-medium leading-6 text-black"
						>
							Product stock
						</label>
						<div className="mt-2">
							<input
								onChange={(e) =>
									setStock(e.target.valueAsNumber)
								}
								defaultValue={product?.stock}
								type="number"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								// {...register("stock", { required: true })}
							/>
							{/* {errors.stock && <ErrorMsg content={"stock"} />} */}
						</div>
					</div>
					<div>
						<label
							htmlFor="price"
							className="block text-sm font-medium leading-6 text-black"
						>
							Product price
						</label>
						<div className="mt-2">
							<input
								onChange={(e) =>
									setPrice(e.target.valueAsNumber)
								}
								defaultValue={product?.price}
								type="number"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								// {...register("price", { required: true })}
							/>
							{/* {errors.price && <ErrorMsg content={"price"} />} */}
						</div>
					</div>
					<div>
						<label
							htmlFor="categoryId"
							className="block text-sm font-medium leading-6 text-black"
						>
							Product category
						</label>
						<div className="mt-2">
							<select
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								onChange={(e) => setCategoryId(e.target.value)}
							>
								{categoriesList &&
									categoriesList.map((category) => {
										return (
											<option
												selected={
													product?.category?.id ===
													category.id
												}
												key={category.id}
												value={category.id}
											>
												{category.name}
											</option>
										);
									})}
							</select>
							{/* {errors.categoryId && (
								<ErrorMsg content={"categoryId"} />
							)} */}

							<div></div>
						</div>
					</div>
					<div>
						<input
							onClick={() => {
								console.log(product);

								handleSubmit();
							}}
							type="submit"
							className="my-8 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Submit"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateProductForm;
