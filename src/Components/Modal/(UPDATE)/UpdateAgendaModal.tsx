"use client";
import UpdateAgendaForm from "@/Components/Forms/(UPDATE)/UpdateAgendaForm";
import { updateAgendaProps } from "@/Utils/types";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const UpdateAgendaModal = ({
	agenda,
	setisLoading,
	isLoading
}: {
	agenda: updateAgendaProps;
		setisLoading: any;
	isLoading: any
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
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
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
						<UpdateAgendaForm
							handleClose={handleClose}
							setisLoading={setisLoading}
							isLoading={isLoading}
							agenda={agenda}
						/>
					</div>
				</Box>
			</Modal>
		</>
	);
};
