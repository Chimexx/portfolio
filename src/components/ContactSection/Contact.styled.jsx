import styled, { keyframes } from "styled-components";

const float = keyframes`
from{
    transform: translateX(0px);
}
65%{
        transform: translateX(10px);
}

to{
    transform: translateX(0px);
}
`;

export const Section = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	max-width: 985px;
	margin: 3rem auto;
	align-items: center;

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
		width: 100vw;
		min-height: 100vh;
		padding: 0 20px;
	}
`;
export const Wrapper = styled.div`
	display: flex;
	margin: 3rem auto;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column-reverse;
	}
`;
export const Content = styled.div`
	text-align: justify;
	flex: 1;

	p {
		line-height: 30px;
	}

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
	}
`;
export const ImgContainer = styled.a`
	display: flex;
	flex: 1;
	width: 100%;

	img {
		margin: auto;
		width: 80%;
		animation: ${float} 3s ease-in-out infinite;
	}

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
		margin-bottom: 20px;
		width: 60%;
	}
`;

export const Links = styled.div`
	display: flex;
	align-items: center;
	margin-top: 20px;

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
	}
`;

export const Link = styled.a`
	display: inline-block;
	color: ${({ theme, whatsapp }) => (whatsapp ? "#00ee77" : theme.colors.orangeWeb)};
	align-items: center;
	margin-right: 20px;

	.icon {
		margin-right: 5px;
		font-size: 15px;
		color: ${({ theme, whatsapp }) => (whatsapp ? "#00ee77" : theme.colors.orangeWeb)};
	}

	div {
		display: flex;
		align-content: center;
	}

	&:last-child {
		margin-right: 0px;
	}

	&::after {
		content: "";
		display: block;
		height: 2px;
		width: 0%;
		background-color: ${({ theme, whatsapp }) => (whatsapp ? "#00ee77" : theme.colors.orangeWeb)};
		transition: ease-in-out all 300ms;
		margin-bottom: 10px;
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
