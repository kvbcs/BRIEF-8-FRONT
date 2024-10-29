"use client";
import { AuthProps } from "@/Utils/types";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/Utils/validator";
import { registerService } from "@/Services/authService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ErrorMsg } from "../../Error";

export const RegisterForm = () => {
	const [isLoading, setisLoading] = useState(false);
	const { push } = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<AuthProps>({ mode: "all", resolver: yupResolver(schema) });

	const onSubmit: SubmitHandler<AuthProps> = async (data) => {
		try {
			registerService(data)
				.then((res) => {
					if (res.status === 201) {
						setisLoading(true);
						console.log(res);
						toast.success("Register successful !");
						push("/login");
						console.log(res.status);
					}
				})
				.catch((e) => {
					toast.error("Credentials already taken" + e);
					console.log(e);
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
					alt="The E-commerce logo"
					src="/Logo.png"
					className="mx-auto h-20 w-auto"
				/>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Register an account
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Name
						</label>
						<div className="mt-2">
							<input
								id="name"
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("name")}
							/>
							{errors.name && (
								<ErrorMsg content={errors.name?.message} />
							)}
						</div>
					</div>
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
								{...register("email")}
							/>
							{errors.email && (
								<ErrorMsg content={errors.email?.message} />
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
								{...register("password")}
							/>
							{errors.password && (
								<ErrorMsg content={errors.password?.message} />
							)}
						</div>
					</div>

					<div>
						<input
							type="submit"
							className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Submit"
						/>
					</div>
				</form>

				<p className="flex flex-row gap-2 items-center justify-center mt-10 text-center text-sm text-gray-500">
					Already a member ?
					<Link
						href="/login"
						className="font-semibold leading-6 text-sky-500 hover:text-sky-700"
					>
						Log in
					</Link>
				</p>
			</div>
		</div>
	);
};
