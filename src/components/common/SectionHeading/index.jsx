import React from "react";
import { Container } from "./SectionHeading.styled";

const SectionHeading = ({ title, desc }) => {
	return (
		<Container>
			<h1>{title}</h1>
			<p>{desc}</p>
		</Container>
	);
};

export default SectionHeading;
