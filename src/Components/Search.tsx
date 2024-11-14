"use client";
import { searchEvents } from "@/Services/eventService";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = ({ setEventList, setIsLoading }: any) => {
	const [searchValue, setSearchValue] = useState("");

	function handleSearch() {
		searchEvents(searchValue).then((res) => {
			setEventList(res.results);
			setIsLoading(false);
		});
	}
	return (
		<div className="w-full h-[60%] flex flex-row items-center justify-center">
			<div className="flex flex-row w-full md:w-2/3 lg:w-1/3 rounded-xl border-2 border-slate-400 shadow-xl hover:scale-125 transition ease-in-out hover:border-slate-700">
				<input
					onChange={(e: any) => {
						setSearchValue(e.target.value);
						if (searchValue === null || "") {
							window.location.reload();
						}
					}}
					type="text"
					placeholder="Search events..."
					className="rounded-lg p-2 flex flex-row items-center w-full rounded-tr-none rounded-br-none"
				/>
				<button
					onClick={() => handleSearch()}
					type="submit"
					className="bg-blue-700 hover:bg-sky-500 p-2 rounded-lg h-full flex flex-row items-center justify-center rounded-bl-none rounded-tl-none w-1/5"
				>
					<FaMagnifyingGlass color="white" size={24} />
				</button>
			</div>
		</div>
	);
};

export default Search;
