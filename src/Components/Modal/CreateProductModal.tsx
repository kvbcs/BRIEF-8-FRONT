import { AllProductsProps } from '@/Utils/types';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

const CreateProductModal = () => {

    	const {
			register,
			handleSubmit,
			watch,
			formState: { errors },
		} = useForm<AllProductsProps>();

		const onSubmit: SubmitHandler<AllProductsProps> = (data) =>
			postCreateCrypto(data)
				.then((res) => {
					console.log(res);
					setIsReloadNeeded(true);
					toast.success("Success");
					handleClose();
				})
				.catch((e) => {
					toast.error("Error");
					console.log(e);
				});
  return (
    <div>CreateProductModal</div>
  )
}

export default CreateProductModal