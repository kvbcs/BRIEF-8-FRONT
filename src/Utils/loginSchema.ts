import * as yup from "yup";

export const loginSchema = yup.object({
	email: yup
		.string()
		.required("This field is required")
		.email("Email must be a valid format")
		.typeError("Email must be valid"),
	password: yup
		.string()
		.required("This field is required")
		.min(8, "Minimum 8 characters")
		.matches(/[a-z]/, "Password must contain at least one lowercase letter")
		.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
		.matches(/[0-9]/, "Password must contain at least one number")
		.matches(
			/[!@#$%^&*(),.?":{}|<>]/,
			"Password must contain at least one special character"
		),
});
