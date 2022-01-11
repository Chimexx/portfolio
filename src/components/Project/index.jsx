import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import {
	Container,
	Description,
	Img,
	ImgContainer,
	Title,
	Tags,
	Details,
	Link,
	Span,
	Type,
	Links,
} from "./Project.styled";

const Project = ({ img, title, live, tags, details, liveProjectText, code, type }) => {
	return (
		<>
			<Container>
				<ImgContainer href={live} target="_blank">
					<Img src={img} alt={title} />
				</ImgContainer>
				<Description>
					<Title>{title}</Title>
					<Type>
						<em>{type}</em>
					</Type>
					<Tags>
						{tags?.map((tag, index) => (
							<Span key={index}>{tag}</Span>
						))}
					</Tags>

					<Details>{details}</Details>
					<Links>
						<Link href={code}>
							<FaGithub className="icon" />
							View Code
						</Link>
						<Link href={live}>
							<FaLink className="icon" />
							{liveProjectText}
						</Link>
					</Links>
				</Description>
			</Container>
		</>
	);
};

export default Project;