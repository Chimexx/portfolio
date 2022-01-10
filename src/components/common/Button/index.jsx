import React from "react";
import { GlobalButton } from "./Button.styled";

const Button = ({ text, link, primary, margin }) => {
	return (
		<GlobalButton primary={primary} href={link} margin={margin} target="_blank">
			{text}
		</GlobalButton>
	);
};

export default Button;
