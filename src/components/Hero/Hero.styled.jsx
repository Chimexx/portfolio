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
	height: calc(100vh - 80px);
	margin-top: 80px;
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center;
	object-fit: cover;
	z-index: 8;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin-top: 50px;
		width: 100%;
		height: 100%;
		background-size: 250%;
	}
`;
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 985px;
	margin: 0 auto;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 100%;
		padding: 0 10px;
	}
`;

export const Title = styled.h1`
	font-family: "Raleway", sans-serif;
	text-align: left;
	font-size: 100px;
	font-weight: 100;
	margin-bottom: 10px;
	margin-left: 338.4px;
	color: ${({ theme }) => theme.colors.bdazzledBlue};

	@media (max-width: ${({ theme }) => theme.mobile}) {
		font-size: 50px;
		margin: 20px 0;
		text-align: center;
	}
`;
export const Button = styled.a`
	font-family: "Raleway", sans-serif;
	text-align: center;
	font-size: 100px;
	font-weight: 100;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.colors.bdazzledBlue};

	@media (max-width: ${({ theme }) => theme.mobile}) {
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
		font-size: 20px;
		line-height: 24px;
		font-weight: 200;
		text-align: center;
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
export const Content = styled.div`
	display: flex;
	flex: 2;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-left: 30px;
	margin-bottom: 30px;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin-bottom: 0px;
		margin: 10px 0;

		align-items: center;
	}
`;
export const ImgContainer = styled.div`
	flex: 1;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin: 20px 0;
	}
`;
export const Level1 = styled.div`
	width: 225px;
	height: 225px;
	border: 2px solid ${({ theme }) => theme.colors.bdazzledBlue};
	padding: 0px;
	border-radius: 50%;
	opacity: 0.4;
	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 175px;
		height: 175px;
	}
`;
export const Level2 = styled.div`
	position: absolute;
	width: 250px;
	height: 250px;
	border: 2px solid ${({ theme }) => theme.colors.bdazzledBlue};
	border-radius: 50%;
	opacity: 0.2;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 200px;
		height: 200px;
	}
`;
export const Img = styled.img`
	position: absolute;
	width: 200px;
	height: 200px;
	border: 2px solid ${({ theme }) => theme.colors.bdazzledBlue};
	border-radius: 50%;
	padding: 5px;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin: 0px;
		width: 150px;
		height: 150px;
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
	margin: 30px auto;

	svg {
		font-size: 50px;
		color: ${({ theme }) => theme.colors.cultured};
		animation: ${bounce} 4s infinite;
		padding: 10px;
		background-color: ${({ theme }) => theme.colors.bdazzledBlue};
		border-radius: 50%;

		@media (max-width: ${({ theme }) => theme.mobile}) {
			font-size: 40px;
			padding: 5px;
		}

		&:hover {
			color: ${({ theme }) => theme.colors.orangeWeb};
		}
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin-top: 10px;
	}
`;

export const IconBar = styled.div`
	position: fixed;
	margin: auto;
	right: 0;
	top: 40vh;
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
export const Hr = styled.hr`
	background: ${({ theme }) => theme.colors.cultured};
	opacity: 0.1;

	@media (max-width: ${({ theme }) => theme.mobile}) {
	}
`;
