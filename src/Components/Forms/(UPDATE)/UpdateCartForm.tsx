"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { updateCartProduct } from "@/Services/cartService";

export type updateCartProps = {
	id: string;
	quantity: number;
	productId: string;
};
const UpdateCartForm = ({
	cart,
	handleClose,
	setisLoading,
}: {
	cart: updateCartProps;
	handleClose: any;
	setisLoading: any;
}) => {
	const [quantity, setQuantity] = useState<number>(cart?.quantity || 0);

	const [isLoaded, setIsLoaded] = useState(false);
	const [cartData, setcartData] = useState<updateCartProps>();

	useEffect(() => {
		if (!isLoaded && cartData) {
			setQuantity(cartData?.quantity);
			setIsLoaded(true);
		}
	}, [cart, isLoaded]);

	function handleSubmit() {
		let cartUpdateData = {
			id: cart.id,
			productId: cart.productId,
			quantity: quantity,
		};
		const cartId = window.localStorage.getItem("cart");
		console.log(cartId);

		updateCartProduct(cartUpdateData, cartId!, cartUpdateData.productId!)
			.then((res) => {
				setisLoading(true);
				console.log(res);
				console.log(cartUpdateData);
				toast.success("Cart product updated !");
				handleClose();
			})
			.catch((e) => {
				toast.error("Error");
				console.log(e);
				console.log(cartUpdateData);
			}),
			[];
	}

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/2 mx-auto">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
					Edit quantity
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<div className="space-y-6">
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
								onChange={(e) =>
									setQuantity(e.target.valueAsNumber)
								}
								defaultValue={cart?.quantity}
								type="number"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
							/>
						</div>
					</div>
					<div>
						<input
							onClick={() => {
								console.log(cart);

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

export default UpdateCartForm;
