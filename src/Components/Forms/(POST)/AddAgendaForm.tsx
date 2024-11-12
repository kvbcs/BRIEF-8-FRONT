"use client";
import { AllAgendaProps, AllEventsProps } from "@/Utils/types";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addAgendaEvent } from "@/Services/agendaService";

const AddAgendaForm = ({
	event,
	setisLoading,
	handleClose,
}: {
	event: AllEventsProps;
	setisLoading: any;
	handleClose: any;
}) => {
	console.log(event.id);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<AllAgendaProps>({ defaultValues: { eventId: event.id } });

	const onSubmit: SubmitHandler<AllAgendaProps> = (data) => {
		const agendaId = window.localStorage.getItem("agenda");
		addAgendaEvent(data, agendaId!)
			.then((res) => {
				setisLoading(true);
				console.log(res);
				toast.success("Event added to agenda !");
				handleClose();
			})
			.catch((e) => {
				toast.error("You must be logged in" + e);
				console.log(e);
				console.log(data);
			});
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/2 mx-auto">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
					Add to agenda
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					<div>
						<label
							htmlFor="title"
							className="block text-sm font-medium leading-6 text-black"
						>
							Event title
						</label>
						<div className="mt-2">
							<img src={event.title} alt="" />{" "}
						</div>
					</div>
					<div>
						<label
							htmlFor="quantity"
							className="block text-sm font-medium leading-6 text-black"
						>
							Event quantity
						</label>
						<div className="mt-2">
							<input
								id="quantity"
								type="number"
								defaultValue={1}
								{...register("quantity")}
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
							/>
						</div>
					</div>

					<div>
						<input
							type="submit"
							className="my-8 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Submit"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddAgendaForm;