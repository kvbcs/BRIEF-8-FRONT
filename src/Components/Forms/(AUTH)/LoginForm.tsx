"use client";
import { useStoreConnect } from "@/Components/stores/connextTest";
import { ErrorMsg } from "@/Components/Error";
import { loginService } from "@/Services/authService";
import { AuthProps } from "@/Utils/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const LoginForm = () => {
	const { setIsConnected } = useStoreConnect((state) => state);

	const { push } = useRouter();
	const [isLoading, setisLoading] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<AuthProps>();

	const onSubmit: SubmitHandler<AuthProps> = (data) => {
		try {
			loginService(data)
				.then((res) => {
					if (res.status === 201) {
						setisLoading(true);
						window.localStorage.setItem(
							"token",
							res.data.token.access_token
						);
						window.localStorage.setItem("role", res.data.role);
						window.localStorage.setItem("cart", res.data.cart);
						toast.success("Login successful !");
						setIsConnected(true);

						push("/products");
						setisLoading(false);
						console.log(res.data);
						console.log(res.status);
					}
					if (res.status === 403) {
						toast.error("Invalid credentials");
					}
				})
				.catch((e) => {
					console.log(e);
					toast.error("Invalid credentials" + e);
				});
		} catch (e) {
			toast.error("Server error" + e);
			console.log(e);
		}
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					alt="Ecommerce logo"
					src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
					className="mx-auto h-20 w-auto"
				/>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Log in to your account
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Email address
						</label>
						<div className="mt-2">
							<input
								id="email"
								type="email"
								autoComplete="email"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("email", { required: true })}
							/>
							{errors.email && (
								<ErrorMsg
									content={"The email field is required"}
								/>
							)}
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Password
							</label>
						</div>
						<div className="mt-2">
							<input
								id="password"
								type="password"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("password", {
									required: true,
								})}
							/>
							{errors.password && (
								<ErrorMsg
									content={"The password field is required"}
								/>
							)}
						</div>
					</div>

					<div>
						<input
							type="submit"
							className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Log in"
						/>
					</div>
				</form>

				<p className="mt-10 text-center text-sm text-gray-500">
					Not a member ?{" "}
					<Link
						href="/register"
						className="font-semibold leading-6 text-sky-500 hover:text-sky-700"
					>
						Register{" "}
					</Link>
				</p>
			</div>
		</div>
	);
};
