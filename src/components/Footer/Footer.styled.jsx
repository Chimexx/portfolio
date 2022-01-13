import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 2rem 0;
	background-color: ${({ theme }) => theme.colors.black};
	padding: 20px;

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
	}
`;
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #777777;

	h5 {
		font-weight: 200;
		text-align: center;
		margin-bottom: 5px;
	}
`;
export const Hr = styled.hr`
	background: linear-gradient(to right, #36d1dc 0%, #ff7b00 50%, #36d1dc 100%);
	border: 0;
	height: 1px;
	opacity: 0.2;

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
		height: 0.5px;
	}
`;

export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: 14px;
	flex-wrap: wrap;

	@media (max-width: ${({ theme }) => theme.mobile}) {
	}
`;

export const ListItem = styled.li`
	margin: 0.2rem 0.7rem;
	&:last-child {
		margin-right: 0;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
	}
`;

export const Navlink = styled.a`
	text-transform: uppercase;
	color: #c5c5c5;
	letter-spacing: 1.5px;

	&::after {
		content: "";
		display: block;
		height: 2px;
		width: 0%;
		background-color: ${({ theme }) => theme.colors.orangeWeb};
		transition: ease-in-out all 300ms;
	}

	&:hover {
		&::after {
			width: 100%;
		}
	}
`;
