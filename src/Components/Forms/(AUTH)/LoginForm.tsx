"use client";
import { useStoreConnect } from "@/Components/stores/connextTest";
import { ErrorMsg } from "@/Components/Error";
import { loginService } from "@/Services/authService";
import { AuthProps, LoginProps } from "@/Utils/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { loginSchema } from "@/Utils/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export const LoginForm = () => {
	const { setIsConnected } = useStoreConnect((state) => state);

	const { push } = useRouter();
	const [isLoading, setisLoading] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<LoginProps>({
		mode: "all",
		resolver: yupResolver(loginSchema),
	});

	const onSubmit: SubmitHandler<LoginProps> = (data) => {
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
						window.localStorage.setItem("agenda", res.data.agenda);
						toast.success("Login successful !");
						setIsConnected(true);
						push("/events");
						setisLoading(false);
					}
					if (res.status === 403) {
						toast.error("Invalid credentials");
					}
				})
				.catch((e) => {
					toast.error("Invalid credentials");
				});
		} catch (e) {
			toast.error("Server error");
		}
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					alt="Ecommerce logo"
					src="/Logo.png"
					className="mx-auto h-20 w-auto"
				/>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Log in to your account
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-6 md:w-2/3 m-auto"
				>
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
								<ErrorMsg content={errors.email.message} />
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
								<ErrorMsg content={errors.password.message} />
							)}
						</div>
					</div>

					<div>
						<input
							type="submit"
							className="flex w-full justify-center rounded-full bg-gradient-to-t from-[gold] to-[#FEB537] px-3 py-1.5 text-sm font-semibold leading-6 text-black hover:text-blue-700 hover:border-blue-700 shadow-2xl hover:scale-125 transition ease-in-out hover:cursor-pointer border-2 border-black"
							value="Submit"
						/>
					</div>
				</form>

				<p className="mt-10 text-center text-sm text-gray-500">
					Not a member ?{" "}
					<Link
						href="/register"
						className="font-semibold leading-6 text-blue-700 hover:text-sky-500"
					>
						Register
					</Link>
				</p>
			</div>
		</div>
	);
};
