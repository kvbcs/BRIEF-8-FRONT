"use client";
import { AuthProps } from "@/Utils/types";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/Utils/registerSchema";
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
	} = useForm<AuthProps>({
		mode: "all",
		resolver: yupResolver(registerSchema),
	});

	const onSubmit: SubmitHandler<AuthProps> = async (data) => {
		try {
			registerService(data)
				.then((res) => {
					if (res.status === 201) {
						setisLoading(true);
						toast.success("Register successful !");
						push("/login");
					}
				})
				.catch((e) => {
					toast.error("Credentials already taken");
				});
		} catch (e) {
			toast.error("Server error");
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
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-6 md:w-2/3 m-auto"
				>
					<div>
						<label
							htmlFor="firstName"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							First Name
						</label>
						<div className="mt-2">
							<input
								id="firstName"
								type="text"
								className="block w-full border-0 py-1.5 text-gray-900 shadow-2xl rounded-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 pl-3"
								{...register("firstName")}
							/>
							{errors.firstName && (
								<ErrorMsg content={errors.firstName?.message} />
							)}
						</div>
					</div>
					<div>
						<label
							htmlFor="lastName"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Last Name
						</label>
						<div className="mt-2">
							<input
								id="lastName"
								type="text"
								className="block w-full border-0 py-1.5 text-gray-900 shadow-2xl rounded-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 pl-3"
								{...register("lastName")}
							/>
							{errors.lastName && (
								<ErrorMsg content={errors.lastName?.message} />
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
								className="block w-full border-0 py-1.5 text-gray-900 shadow-2xl rounded-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 pl-3"
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
								className="block w-full border-0 py-1.5 text-gray-900 shadow-2xl rounded-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 pl-3"
								{...register("password")}
							/>
							{errors.password && (
								<ErrorMsg content={errors.password?.message} />
							)}
						</div>
					</div>
					<div className="flex justify-evenly w-full">
						<input
							type="checkbox"
							id="gdpr"
							className="w-4 shadow-2xl"
							required
							{...register("gdpr")}
						/>
						<label htmlFor="gdpr" className="font-bold text-sm">
							I accept the{" "}
							<Link
								href="/privacy-policy"
								className="text-blue-700 hover:text-sky-500"
								target="_blank"
							>
								Terms of Service
							</Link>
						</label>
					</div>

					<div>
						<input
							type="submit"
							className="flex w-full justify-center rounded-full border-2 border-black hover:border-blue-700 bg-gradient-to-t from-[gold] to-[#FEB537] px-3 py-1.5 text-sm font-semibold leading-6 text-black hover:text-blue-700 shadow-2xl hover:cursor-pointer hover:scale-125 transition ease-in-out"
							value="Submit"
						/>
					</div>
				</form>

				<p className="flex flex-row gap-2 items-center justify-center mt-10 text-center text-sm text-gray-500">
					Already a member ?
					<Link
						href="/login"
						className="font-semibold leading-6 text-blue-700 hover:text-sky-500"
					>
						Log in
					</Link>
				</p>
			</div>
		</div>
	);
};
