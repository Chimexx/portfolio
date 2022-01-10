import styled, { keyframes } from "styled-components";
import HeroImage from "../../images/hero_image.svg";

const bounce = keyframes`
0%, 20%, 40%, 60%, 80%, 100% {
	transform: translateY(0);
}
30% {
	transform: translateY(-20px);
}
50% {
	transform: translateY(-10px);
}
70% {
	transform: translateY(-3px);
}
`;

export const Section = styled.div`
	background: url(${HeroImage});
	margin: auto;
	margin-top: 80px;
	height: calc(100vh - 80px);
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center;
	object-fit: cover;
	z-index: 8;
	position: relative;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin-top: 50px;
		height: calc(100vh-50px);
		background-size: 180%;
	}
`;
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 985px;
	margin: 0 auto;
	align-items: center;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 100%;
		padding: 0 10px;
	}
`;

export const Title = styled.h1`
	font-family: "Raleway", sans-serif;
	text-align: center;
	font-size: 100px;
	font-weight: 100;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.colors.bdazzledBlue};

	@media (max-width: ${({ theme }) => theme.mobile}) {
		font-size: 40px;
		margin-bottom: 5px;
	}
`;
export const Para = styled.p`
	font-size: 24px;
	font-weight: 100;
	margin-bottom: 20px;
	line-height: 30px;
	text-align: justify;
	color: ${({ theme }) => theme.colors.cultured};

	@media (max-width: ${({ theme }) => theme.mobile}) {
		font-size: 16px;
		line-height: 20px;
		text-align: justify;
	}
`;
export const Span = styled.span`
	font-weight: 300;
	text-transform: capitalize;
	color: ${({ theme }) => theme.colors.bdazzledBlue};
`;
export const Intro = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
	}
`;
export const Text = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-left: 30px;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin: 10px;
		align-items: center;
		margin-left: 0px;
	}
`;
export const Img = styled.img`
	margin: 20px;
	width: 200px;
	border: 2px solid ${({ theme }) => theme.colors.cultured};
	padding: 2px;
	border-radius: 50%;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin: 10px;
		width: 100px;
	}
`;
export const Btngrp = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	@media (max-width: ${({ theme }) => theme.mobile}) {
	}
`;
export const ArrowDown = styled.a`
	margin-top: 70px;
	bottom: 2px;

	svg {
		font-size: 30px;
		color: ${({ theme }) => theme.colors.cultured};
		animation: ${bounce} 4s infinite;

		&:hover {
			color: ${({ theme }) => theme.colors.orangeWeb};
		}
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin-top: 20px;
	}
`;

export const IconBar = styled.div`
	position: absolute;
	margin: auto;
	right: 0;
	top: 25vh;
	background-color: #555;
	width: 50px;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		display: none;
	}
`;
export const SocialLink = styled.a`
	display: block;
	text-align: center;
	padding: 10px;
	transition: ${({ theme }) => theme.transition};
	color: white;
	width: 50px;
	font-size: 20px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.oxfordBlue};
		color: ${({ theme }) => theme.colors.orangeWeb};
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
	}
`;
