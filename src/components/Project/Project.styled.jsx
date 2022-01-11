import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0px;
	padding: 20px 20px 0 20px;

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		margin: 20px 0 5px 0;
		padding: 0;
	}
`;
export const ImgContainer = styled.a`
	display: flex;
	flex: 1;
	position: relative;
	perspective: 500px;
	width: 100%;

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
		margin-bottom: 20px;
	}
`;

export const Description = styled.div`
	flex: 1;
	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
	}
`;

export const Img = styled.img`
	width: 90%;
	transition: ${({ theme }) => theme.transition};
	transform: rotateY(20deg);

	&:hover {
		transform: rotateY(0deg);
	}

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
		margin: auto;
		width: 100%;
		transform: rotateY(0deg);
	}
`;

export const Title = styled.h2`
	margin-bottom: 0.7rem;
	color: ${({ theme }) => theme.colors.orangeWeb};
`;
export const Type = styled.h4`
	font-weight: 500;
	margin-bottom: 0.7rem;

	em {
		font-family: "sans-serif";
	}

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
	}
`;

export const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 10px;

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
	}
`;

export const Details = styled.p`
	text-align: justify;
	font-weight: 200;
	line-height: 20px;
	margin-bottom: 10px;
	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
	}
`;

export const Link = styled.a`
	color: ${({ theme }) => theme.colors.orangeWeb};
	align-items: center;
	margin-right: 20px;

	.icon {
		margin-right: 5px;
		padding-top: 3px;
	}

	&:last-child {
		margin-right: 0px;
	}

	&::after {
		content: "";
		display: block;
		height: 2px;
		width: 0%;
		background-color: ${({ theme }) => theme.colors.orangeWeb};
		transition: ease-in-out all 300ms;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.cultured};
		&::after {
			width: 100%;
		}
	}

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
	}
`;

export const Span = styled.span`
	padding: 2px 10px;
	margin: 0 5px 5px 0;
	font-size: 14px;
	font-weight: 200;
	background-color: ${({ theme }) => theme.colors.luscent};
	border-radius: 20px;

	&:last-child {
		margin-right: 0px;
	}
	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
	}
`;
export const Links = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
	}
`;