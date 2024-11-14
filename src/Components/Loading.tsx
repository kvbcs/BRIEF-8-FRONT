import React from "react";
import { Hourglass } from "react-loader-spinner";
import Title from "./Title";

const Loading = () => {
	return (
		<div className="h-[90vh] w-full flex flex-col gap-10 items-center justify-center">
			<Title title={"LOADING DATA..."} />
			<Hourglass
				visible={true}
				height="150"
				width="150"
				ariaLabel="hourglass-loading"
				wrapperStyle={{}}
				wrapperClass=""
				colors={["#00008B", "#FFD700"]}
			/>
		</div>
	);
};

export default Loading;
