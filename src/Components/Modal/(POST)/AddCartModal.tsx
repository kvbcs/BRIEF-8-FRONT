"use client";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { AllProductsProps } from "@/Utils/types";
import AddCartForm from "@/Components/Forms/(POST)/AddCartForm";
import { FaCartPlus } from "react-icons/fa6";

export const AddCartModal = ({ product }: { product: AllProductsProps }) => {
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
				className="bg-sky-500 text-center rounded-lg text-white w-fit flex flex-row justify-center gap-2 items-center p-2 hover:bg-sky-700"
			>
				<FaCartPlus />
				Add
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
						<AddCartForm product={product} />
					</div>
				</Box>
			</Modal>
		</>
	);
};
