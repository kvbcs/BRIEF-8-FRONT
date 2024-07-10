import React from "react";

const page = () => {
	return (
		<div className="min-h-[80vh] max-h-fit w-full flex flex-col justify-between">
			<h2 className="text-center text-2xl font-bold">Cart</h2>
			<div className="border-t-2 border-black flex flex-row w-full justify-between py-4">
				<h2>Total : $0</h2>
				<button className="bg-green-500 rounded-lg p-2 text-white hover:bg-green-700">
					Buy
				</button>
			</div>
		</div>
	);
};

export default page;
