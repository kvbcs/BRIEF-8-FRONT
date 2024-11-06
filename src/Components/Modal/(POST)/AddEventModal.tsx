"use client";
import AddEventForm from "@/Components/Forms/(POST)/AddEventForm";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { IoIosCloseCircleOutline, IoMdAddCircle } from "react-icons/io";

export const AddEventModal = ({ setisLoading }: any) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const style = {
		position: "absolute" as "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 600,
		height: "95%",
		bgcolor: "blue",
		overflow: "auto",
		borderRadius: "50px",
		border: "2px solid #000",
		boxShadow: 24,
		p: 0,
	};

	return (
		<>
			<button
				onClick={handleOpen}
				className="bg-sky-500 text-center rounded-lg text-white w-fit flex flex-row justify-center gap-2 items-center p-2 hover:bg-sky-700"
			>
				<IoMdAddCircle />
				Add an event
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
						<AddEventForm
							handleClose={handleClose}
							setisLoading={setisLoading}
						/>
					</div>
				</Box>
			</Modal>
		</>
	);
};
