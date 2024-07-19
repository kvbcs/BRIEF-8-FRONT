"use client";
import { AllCartProps, AllProductsProps } from "@/Utils/types";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addCartProduct } from "@/Services/cartService";

const AddCartForm = ({
	product,
	setisLoading,
	handleClose,
}: {
	product: AllProductsProps;
	setisLoading: any;
	handleClose: any;
}) => {
	console.log(product.id);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<AllCartProps>({ defaultValues: { productId: product.id } });

	const onSubmit: SubmitHandler<AllCartProps> = (data) => {
		const cartId = window.localStorage.getItem("cart");
		addCartProduct(data, cartId!)
			.then((res) => {
				setisLoading(true);
				console.log(res);
				toast.success("Product added to cart !");
				handleClose();
			})
			.catch((e) => {
				toast.error("Error");
				console.log(e);
				console.log(data);
			});
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/2 mx-auto">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
					Add to cart
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					<div>
						<label
							htmlFor="productId"
							className="block text-sm font-medium leading-6 text-black"
						>
							Product id
						</label>
						<div className="mt-2">
							<input
								id="productId"
								type="text"
								readOnly
								value={product.id}
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("productId")}
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-black"
						>
							Product image
						</label>
						<div className="mt-2">
							<img src={product.image} alt="" />{" "}
						</div>
					</div>
					<div>
						<label
							htmlFor="quantity"
							className="block text-sm font-medium leading-6 text-black"
						>
							Product quantity
						</label>
						<div className="mt-2">
							<input
								id="quantity"
								type="number"
								defaultValue={1}
								{...register("quantity")}
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
							/>
						</div>
					</div>

					<div>
						<input
							type="submit"
							className="my-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Submit"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddCartForm;
