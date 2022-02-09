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
	Hr,
} from "./Project.styled";

const Project = ({ img, title, live, tags, details, liveProjectText, code, type, privateRepo }) => {
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
						{!privateRepo && (
							<Link href={code} target="_blank">
								<FaGithub className="icon" />
								View Code
							</Link>
						)}
						<Link href={live} target="_blank">
							<FaLink className="icon" />
							{liveProjectText}
						</Link>
					</Links>
				</Description>
			</Container>
			<Hr />
		</>
	);
};

export default Project;
