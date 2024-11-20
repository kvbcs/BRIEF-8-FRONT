"use client";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AllEventsProps } from "@/Utils/types";
import AddAgendaForm from "@/Components/Forms/(POST)/AddAgendaForm";
import { FaCalendarPlus } from "react-icons/fa";

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
	};

	return (
		<>
			<button
				onClick={handleOpen}
				className="bg-gradient-to-b from-[gold] to-[#c7a901] text-center rounded-full text-black hover:text-white w-fit flex flex-row justify-center gap-2 items-center p-4 text-2xl font-bold hover:scale-125 transition ease-in-out"
			>
				<FaCalendarPlus size={30} />
				Add to your agenda
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
