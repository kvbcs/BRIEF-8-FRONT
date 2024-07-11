"use client";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import AddProductForm from "../Forms/AddProductForm";

export const AddProductModal = () => {
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
				className="bg-sky-500 text-center rounded-lg text-white w-fit flex flex-row justify-center gap-3 items-center p-4 text-2xl hover:bg-[#CAAD4F] mt-1"
			>
				<IoMdAddCircle />
				Add product
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
						></span>
						<AddProductForm />
					</div>
				</Box>
			</Modal>
		</>
	);
};
