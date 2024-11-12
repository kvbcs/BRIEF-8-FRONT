"use client";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AllEventsProps } from "@/Utils/types";
import AddAgendaForm from "@/Components/Forms/(POST)/AddAgendaForm";
import { TfiAgenda } from "react-icons/tfi";

export const AddAgendaModal = ({
	event,
	setisLoading,
}: {
	event: AllEventsProps;
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
		width: 500,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	return (
		<>
			<button
				onClick={handleOpen}
				className="bg-blue-700 text-center rounded-lg text-white w-fit flex flex-row justify-center gap-2 items-center p-2 hover:bg-sky-500"
			>
				<TfiAgenda />
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
						>
							<IoIosCloseCircleOutline color="#222" size={48} />
						</span>
						<AddAgendaForm
							setisLoading={setisLoading}
							handleClose={handleClose}
							event={event}
						/>
					</div>
				</Box>
			</Modal>
		</>
	);
};
