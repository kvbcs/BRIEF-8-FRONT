"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaUserPen } from "react-icons/fa6";

const page = () => {
	const { push } = useRouter();

	return (
		<main className="h-full w-full">
			{/* Hero section -----------------------------------------------------------------------------------------------------------------------------------------*/}
			{/* Hero section -----------------------------------------------------------------------------------------------------------------------------------------*/}
			{/* Hero section -----------------------------------------------------------------------------------------------------------------------------------------*/}
			{/* Hero section -----------------------------------------------------------------------------------------------------------------------------------------*/}

			<section className="bg-gradient-to-b from-sky-400 to-blue-700 h-[90vh] w-full flex flex-col md:flex-row shadow-2xl rounded-b-3xl">
				{/* First div -----------------------------------------------------------------------------------------------------------------------------------------*/}
				{/* First div -----------------------------------------------------------------------------------------------------------------------------------------*/}

				<div className="h-full p-10 lg:p-20 w-full md:w-1/2 flex flex-col justify-center gap-8 items-center">
					<h1 className="text-2xl md:text-4xl text-white lg:text-6xl font-bold text-center">
						Welcome to
						<br />
						our E-Commerce
					</h1>
					<p className="lg:text-2xl">
						Register to start buying our products today ! You can
						add any products you like to your cart and buy them.{" "}
					</p>
					<button
						onClick={() => {
							push("/register");
						}}
						className="md:flex bg-white hover:bg-black font-bold hover:scale-110 text-xs md:text-base transition ease-in-out flex-row items-center gap-2 w-fit flex hover:text-white p-3 rounded-lg"
					>
						<FaUserPen size={26} />
						Register Now
					</button>
				</div>

				{/* Second div -----------------------------------------------------------------------------------------------------------------------------------------*/}
				{/* Second div -----------------------------------------------------------------------------------------------------------------------------------------*/}

				<div className=" h-1/2 md:h-full w-full md:w-1/2">
					<img
						src="https://cdni.iconscout.com/illustration/premium/thumb/ecommerce-illustration-download-in-svg-png-gif-file-formats--add-to-cart-shopping-bag-e-commerce-pack-illustrations-3145686.png?f=webp"
						alt="E-commerce logo"
						className="object-contain lg:object-cover h-full w-full"
					/>
				</div>
			</section>
			<h2 className="mb-5 md:mb-0 mt-20 text-3xl md:text-4xl font-bold text-center w-full">
				Discover our products
			</h2>

			{/* 3 containers section -----------------------------------------------------------------------------------------------------------------------------------------*/}
			{/* 3 containers section -----------------------------------------------------------------------------------------------------------------------------------------*/}
			{/* 3 containers section -----------------------------------------------------------------------------------------------------------------------------------------*/}
			{/* 3 containers section -----------------------------------------------------------------------------------------------------------------------------------------*/}

			<section className="mb-20 h-fit md:h-[80vh] gap-8 md:gap-4 lg:gap-0 w-full flex flex-col items-center md:flex-row justify-around">
				{/* Electronics div -----------------------------------------------------------------------------------------------------------------------------------------*/}
				{/* Electronics div -----------------------------------------------------------------------------------------------------------------------------------------*/}
				<div
					className=" h-[400px] md:h-[80%] w-[90%] lg:w-1/4 bg-sky-600 hover:bg-sky-400 hover:scale-110 transition ease-in-out shadow-2xl rounded-lg flex flex-col 
        items-center justify-around"
				>
					<img
						src="https://cdni.iconscout.com/illustration/premium/thumb/electronic-devices-illustration-download-in-svg-png-gif-file-formats--phone-mobile-smartphone-notebook-isometrics-pack-network-communication-illustrations-2902667.png?f=webp"
						alt="An image of electronics equipement"
						className="object-cover h-1/2"
					/>
					<p className="p-8 text-justify h-1/2 flex items-center text-white justify-center overflow-auto">
						Discover cutting-edge electronics designed to make life
						simpler and more exciting. From high-definition TVs and
						powerful speakers to smart devices and must-have
						gadgets, find the latest technology to enhance your
						everyday experiences.
					</p>
				</div>
				{/* Clothes div -----------------------------------------------------------------------------------------------------------------------------------------*/}
				{/* Clothes div -----------------------------------------------------------------------------------------------------------------------------------------*/}
				<div className=" h-[400px] md:h-[80%] w-[90%] lg:w-1/4 bg-sky-600 hover:bg-sky-400 hover:scale-110 transition ease-in-out rounded-lg flex flex-col items-center justify-around shadow-2xl">
					<img
						src="https://cdni.iconscout.com/illustration/premium/thumb/clothes-on-hanger-illustration-download-in-svg-png-gif-file-formats--flea-marketplace-with-home-furniture-pack-interiors-illustrations-5481182.png"
						alt="An image of different clothing products"
						className="object-cover h-1/2"
					/>
					<p className="p-8 text-justify h-1/2 flex items-center text-white justify-center overflow-auto">
						Find your style with our wide selection of clothing for
						every occasion. From timeless classics to the latest
						trends, our collection includes versatile pieces that
						keep you comfortable and confident.
					</p>
				</div>{" "}
				{/* Furniture div -----------------------------------------------------------------------------------------------------------------------------------------*/}
				{/* Furniture div -----------------------------------------------------------------------------------------------------------------------------------------*/}
				<div className=" h-[400px] md:h-[80%] w-[90%] lg:w-1/4 bg-sky-600 hover:bg-sky-400 hover:scale-110 transition ease-in-out shadow-2xl rounded-lg flex flex-col items-center justify-around">
					<img
						src="https://cdni.iconscout.com/illustration/premium/thumb/furniture-store-illustration-download-in-svg-png-gif-file-formats--room-living-buying-couch-interior-home-pack-e-commerce-shopping-illustrations-4245502.png?f=webp"
						alt="An image of a lot of furniture"
						className="object-cover h-1/2"
					/>
					<p className="p-8 text-justify h-1/2 flex items-center justify-center overflow-auto text-white">
						Create a space you love with our carefully curated
						selection of furniture. Blending style, comfort, and
						functionality, our pieces are designed to elevate every
						room in your home.
					</p>
				</div>{" "}
			</section>

			{/* Thank you section -----------------------------------------------------------------------------------------------------------------------------------------*/}
			{/* Thank you section -----------------------------------------------------------------------------------------------------------------------------------------*/}
			{/* Thank you section -----------------------------------------------------------------------------------------------------------------------------------------*/}
			{/* Thank you section -----------------------------------------------------------------------------------------------------------------------------------------*/}

			<section className="mt-40 w-full h-[50vh] flex flex-col md:flex-row-reverse bg-gradient-to-b from-sky-400 to-blue-700 ">
				<div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center p-10">
					<h2 className="text-white text-5xl w-full text-center">
						Thanks for shopping !
					</h2>
				</div>
				<div className="w-full md:w-1/2 h-1/2 md:h-full">
					<img
						src="https://cdni.iconscout.com/illustration/premium/thumb/people-doing-party-in-night-club-illustration-download-svg-png-gif-file-formats--surprise-dj-pack-illustrations-3184274.png"
						alt="An image for thanking our customers"
						className="object-cover h-full w-full"
					/>
				</div>
			</section>
		</main>
	);
};

export default page;
