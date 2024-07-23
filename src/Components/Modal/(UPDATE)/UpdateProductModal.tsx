"use client";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AllProductsProps } from "@/Utils/types";
import { IoIosCloseCircleOutline } from "react-icons/io";
import UpdateProductForm from "@/Components/Forms/(UPDATE)/UpdateProductForm";

export const UpdateProductModal = ({
	product,
	setisLoading,
}: {
	product: AllProductsProps;
	setisLoading: any;
}) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const style = {
		position: "absolute" as "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 600,
		height: 950,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 2,
	};
	return (
		<>
			<button
				onClick={handleOpen}
				className="bg-orange-500 rounded-full text-white w-fit flex flex-row justify-center items-center p-3 hover:bg-orange-700"
			>
				<FaEdit />
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
						<UpdateProductForm
							setisLoading={setisLoading}
							product={product}
							handleClose={handleClose}
						/>
					</div>
				</Box>
			</Modal>
		</>
	);
};
