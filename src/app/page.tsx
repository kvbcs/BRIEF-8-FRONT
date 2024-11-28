"use client";
import Title from "@/Components/Title";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaUserPen } from "react-icons/fa6";

const page = () => {
	const { push } = useRouter();

	return (
		<main className="h-full w-full">
			<section className="bg-gradient-to-b from-blue-700 to-sky-500 h-[90vh] md:h-[80vh] w-full flex flex-col md:flex-row shadow-2xl rounded-b-3xl mb-40">
				<article className="h-1/2 md:h-full p-6 lg:p-20 w-full md:w-1/2 flex flex-col justify-evenly gap-8 items-center">
					<h1 className="text-3xl md:text-4xl text-[gold] lg:text-6xl font-bold text-center">
						Welcome to MEETUP
					</h1>
					<p className="lg:text-2xl text-white md:px-20 text-left">
						MEETUP is a website for participating in events. View,
						plan and participate in our available events now !
						Register an account to start using our services !
					</p>
					<button
						onClick={() => {
							push("/register");
						}}
						className="md:flex bg-gradient-to-t from-[gold] to-[#FEB537] border-2 border-black hover:border-white font-bold hover:scale-125 text-base md:text-3xl transition ease-in-out flex-row items-center gap-2 w-fit flex hover:text-white p-3 rounded-full"
					>
						<FaUserPen className="size-8 md:size-19" />
						Register
					</button>
				</article>

				<article className=" h-1/2 md:h-full w-full md:w-1/2">
					<Image
						src="https://cdni.iconscout.com/illustration/premium/thumb/people-doing-party-in-night-club-illustration-download-svg-png-gif-file-formats--surprise-dj-pack-illustrations-3184274.png"
						alt="A picture of people partying"
						className="object-contain lg:object-cover h-full w-full"
						width={500}
						height={500}
						loading="lazy"
					/>
				</article>
			</section>
			<Title title={"Discover Our Services"} />

			<section className="mb-20 mt-20 h-fit lg:h-[80vh] gap-8 md:gap-4 lg:gap-0 flex-wrap w-full flex flex-col items-center md:flex-row justify-around">
				<article className=" h-[400px] lg:h-[80%] w-[90%] md:w-1/2 lg:w-1/4 bg-blue-700 hover:bg-blue-600 hover:scale-110 transition ease-in-out shadow-2xl rounded-3xl flex flex-col items-center justify-around">
					<Image
						src="https://cdni.iconscout.com/illustration/premium/thumb/user-registration-illustration-download-in-svg-png-gif-file-formats--sign-up-log-register-form-create-account-or-pack-interface-illustrations-3723271.png?f=webp"
						alt="An image of people going outside"
						className="object-cover h-1/2 w-full"
						width={500}
						height={500}
						loading="lazy"
					/>
					<p className="sans-serif overflow-auto text-xl md:text-base lg:text-xl p-8 text-left h-1/2 flex items-center text-white justify-center">
						Register now and start browsing all our available events
						! Only logged in users can add events they like to their
						agenda and participate in said events.
					</p>
				</article>
				<article
					className=" h-[400px] lg:h-[80%] w-[90%] md:w-1/2 lg:w-1/4 bg-blue-700 hover:bg-blue-600 hover:scale-110 transition ease-in-out shadow-2xl rounded-3xl flex flex-col 
        items-center justify-around"
				>
					<Image
						src="https://cdni.iconscout.com/illustration/premium/thumb/event-management-illustration-download-in-svg-png-gif-file-formats--service-entertainment-catering-organize-celebrity-ceremony-pack-people-illustrations-4620528.png"
						alt="An image of different clothing products"
						className="object-cover h-1/2"
						width={500}
						height={500}
						loading="lazy"
					/>
					<p className="sans-serif overflow-auto text-xl md:text-base lg:text-xl p-8 text-left h-1/2 flex items-center text-white justify-center">
						Browse through our available events today, look at their
						descriptions, start dates and end dates and click to
						participate in the events you like !
					</p>
				</article>{" "}
				<article
					className=" h-[400px] lg:h-[80%] w-[90%] md:w-1/2 lg:w-1/4 bg-blue-700 hover:bg-blue-600 hover:scale-110 transition ease-in-out shadow-2xl rounded-3xl flex flex-col 
        items-center justify-around"
				>
					<Image
						src="https://cdni.iconscout.com/illustration/premium/thumb/ecommerce-illustration-download-in-svg-png-gif-file-formats--add-to-cart-shopping-bag-e-commerce-pack-illustrations-3145686.png?f=webp"
						alt="An image of a lot of furniture"
						className="object-cover h-1/2"
						width={500}
						height={500}
						loading="lazy"
					/>
					<p className="sans-serif overflow-auto text-xl md:text-base lg:text-xl p-8 text-left h-1/2 flex items-center text-white justify-center">
						Once you've added an event you like to your agenda, you
						can modify the quantity of seats or delete them entirely
						! Buy your seats today !
					</p>
				</article>{" "}
			</section>

			<section className="mt-40 w-full h-[50vh] flex flex-col md:flex-row-reverse bg-gradient-to-t from-blue-700 to-sky-500 ">
				<div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center p-10">
					<h2 className="text-white text-3xl md:text-5xl font-bold w-full text-center">
						Thanks for visiting MEETUP !
					</h2>
				</div>
				<div className="w-full md:w-1/2 h-1/2 md:h-full">
					<Image
						src="https://cdni.iconscout.com/illustration/premium/thumb/people-doing-party-in-night-club-illustration-download-svg-png-gif-file-formats--surprise-dj-pack-illustrations-3184274.png"
						alt="An image for thanking our customers"
						className="object-cover h-full w-full"
						width={500}
						height={500}
						loading="lazy"
					/>
				</div>
			</section>
		</main>
	);
};

export default page;
