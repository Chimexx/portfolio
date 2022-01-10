import styled from "styled-components";

export const GlobalButton = styled.a`
	background: ${({ primary, theme }) => (primary ? theme.colors.bdazzledBlue : "none")};
	color: ${({ primary, theme }) => (primary ? theme.colors.cultured : theme.colors.orangeWeb)};
	padding: 7px 14px;
	margin: ${({ margin }) => margin};
	border: 1px solid ${({ primary, theme }) => (primary ? theme.colors.cultured : theme.colors.orangeWeb)};
	border-radius: 5px;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	display: inline-block;

	&:hover {
		background: ${({ primary, theme }) => (primary ? theme.colors.cultured : theme.colors.orangeWeb)};
		color: ${({ primary, theme }) => (primary ? theme.colors.orangeWeb : theme.colors.cultured)};
		border: 1px solid ${({ theme }) => theme.colors.orangeWeb};
	}
`;
