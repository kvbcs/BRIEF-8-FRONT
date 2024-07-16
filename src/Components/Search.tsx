import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = ({
	setSearch,
}: {
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
	return (
		<div className="w-full h-[60%] flex flex-row items-center">
			<input
				onChange={(e: any) => {
					setSearch(e.target.value);
				}}
				type="text"
				placeholder="Search..."
				className="rounded-lg p-2 border-black border-2 flex flex-row items-center w-full rounded-tr-none rounded-br-none"
			/>
			<button
				type="submit"
				className="bg-sky-500 hover:bg-sky-700 border-black border-2 p-2 rounded-lg h-full flex flex-row items-center justify-center rounded-bl-none rounded-tl-none"
			>
				<FaMagnifyingGlass color="white" size={24} />
			</button>
		</div>
	);
};

export default Search;
