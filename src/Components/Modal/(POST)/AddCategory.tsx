"use client";
import AddCategoryForm from "@/Components/Forms/(POST)/AddCategoryFrom";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { IoIosCloseCircleOutline, IoMdAddCircle } from "react-icons/io";

export const AddCategoryModal = ({ setisLoading }: any) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const style = {
		position: "absolute" as "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 600,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	return (
		<>
			<button
				onClick={handleOpen}
				className="bg-blue-700 text-center rounded-lg text-white w-fit flex flex-row justify-center gap-2 items-center p-3 hover:bg-sky-500 hover:scale-125 transition ease-in-out text-3xl font-bold"
			>
				<IoMdAddCircle size={26} />
				Add a category
			</button>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<div>
						<span
							className="absolute right-10 top-10 cursor-pointer"
							onClick={handleClose}
						>
							<IoIosCloseCircleOutline color="#222" size={48} />
						</span>
						<AddCategoryForm
							setisLoading={setisLoading}
							handleClose={handleClose}
						/>
					</div>
				</Box>
			</Modal>
		</>
	);
};
