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
	display: flex;
	flex-direction: column;
	max-width: 985px;
	margin: 3rem auto;
	align-items: center;

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
		width: 100vw;
		min-height: 0;
		padding: 0 20px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	margin-top: 3rem;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column-reverse;
	}
`;
export const Content = styled.div`
	flex: 1;

	p {
		line-height: 30px;
		font-size: 20px;
		font-weight: 200;
		text-align: left;

		@media screen and (max-width: ${({ theme }) => theme.mobile}) {
			text-align: center;
		}
	}

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
export const ImgContainer = styled.a`
	display: flex;
	flex: 1;
	width: 60%;

	img {
		margin: auto;
		width: 40%;
		animation: ${float} 3s ease-in-out infinite;

		@media screen and (max-width: ${({ theme }) => theme.mobile}) {
			width: 50%;
		}
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

	div {
		display: flex;
		align-items: center;
		margin-right: 20px;

		&:last-child {
			margin-right: 0px;
		}

		.icon {
			margin-right: 5px;
			font-size: 20px;
			color: ${({ theme }) => theme.colors.cultured};
		}
	}

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
	}
`;

export const Link = styled.a`
	color: ${({ theme }) => theme.colors.orangeWeb};

	&::after {
		content: "";
		display: block;
		height: 2px;
		width: 0%;
		background-color: ${({ theme, whatsapp }) =>
			whatsapp === "true" ? "#00ee77" : theme.colors.orangeWeb};
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
