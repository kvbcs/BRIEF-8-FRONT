import { ErrorMsgProps } from "@/Utils/types";
import React from "react";

export const ErrorMsg = ({ content }: ErrorMsgProps) => {
	return <p className="text-red-500 text-lg italic">{content}</p>;
};
