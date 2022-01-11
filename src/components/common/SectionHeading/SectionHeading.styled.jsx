import styled from "styled-components";

export const Container = styled.div`
	text-align: center;
	margin: 2rem 0 2rem 0;

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
		/* text-align: left; */
		margin: 0.5rem 0;
	}

	h1 {
		text-transform: uppercase;
		display: inline-block;
		font-size: 2rem;
		margin: 0.5rem 0 1rem 0;
		position: relative;

		@media screen and (max-width: ${({ theme }) => theme.mobile}) {
			font-size: 1.5rem;
		}

		&::after {
			content: "";
			display: block;
			height: 3px;
			width: 50%;
			background-color: ${({ theme }) => theme.colors.orangeWeb};
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	p {
		font-family: "Raleway", sans-serif;
		text-align: center;
		font-size: 20px;
		font-weight: 200;

		@media screen and (max-width: ${({ theme }) => theme.mobile}) {
			font-size: 16px;
		}
	}
`;
