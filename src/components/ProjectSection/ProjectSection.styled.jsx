import styled from "styled-components";

export const Section = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	max-width: 985px;
	margin: 0 auto;
	align-items: center;

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
		width: 100vw;
		min-height: 100vh;
		padding: 0 20px;
	}
`;
