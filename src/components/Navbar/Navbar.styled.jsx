import styled, { keyframes, css } from "styled-components";

const navItemFade = keyframes`
from{
opacity:0;
transform: translate(50px);
}
to{
  opacity:1 ;
  transform: translate(0px);

}
`;

//Animation delay, enables the links to rollout one after the other
// 7 indicates the number of links

const navItemAnim = ({ index }) => css`
	animation: ${navItemFade} 0.9s ease forwards ${index / 7 + 0.1}s;
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.oxfordBlue};
	z-index: 100;
	position: fixed;
	height: 80px;
	width: 100%;
	padding: 0 20px;
	transition: all ease-in-out 800ms;
	box-shadow: 0 0px 3px rgb(0 0 0 / 0.9);
	top: ${({ dir }) => (dir === "down" ? "-80px" : 0)};

	@media (max-width: ${({ theme }) => theme.mobile}) {
		height: 50px;
	}
`;
export const Menu = styled.div`
	cursor: pointer;
	background: ${({ theme }) => theme.colors.luscent};
	border-radius: 10px;
	display: none;
	padding: 0.5rem;
	position: absolute;
	right: 20px;
	z-index: 100;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		display: inline-block;
	}
`;
export const LineOne = styled.div`
	width: 20px;
	height: 1px;
	margin: 5px 0;
	transition: ${({ theme }) => theme.transition};
	transform: ${({ menuOpen }) => (menuOpen ? "   translate(0px, 3px)  rotate(-45deg) " : "none")};
	background-color: ${({ theme }) => theme.colors.orangeWeb};
`;

export const LineTwo = styled.div`
	width: 20px;
	height: 1px;
	margin: 5px 0;
	transition: ${({ theme }) => theme.transition};
	transform: ${({ menuOpen }) => (menuOpen ? " rotate(45deg) translate(-2px, -2px)" : "none")};
	background-color: ${({ theme }) => theme.colors.orangeWeb};
`;
export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: 14px;
	flex-wrap: wrap;
	transition: ${({ theme }) => theme.transition};

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 18rem;
		height: 100vh;
		background-color: ${({ theme }) => theme.colors.bdazzledBlue};
		position: fixed;
		top: 0;
		right: ${({ menuOpen }) => (menuOpen ? 0 : "-18rem")}; //opposite of width
		padding: 3rem;
		justify-content: flex-start;
		align-content: center;
		flex-direction: column;
		z-index: 98;
		box-shadow: 0 0px 3px rgb(0 0 0 / 0.9);
	}
`;

export const ListItem = styled.li`
	margin: 0.2rem 0.7rem;
	&:last-child {
		margin-right: 0;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin: 1rem 0.2rem;
		opacity: 0;
		${({ menuOpen }) => (menuOpen ? navItemAnim : null)};
	}
`;

export const Navlink = styled.a`
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.cultured};
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
export const SocialIcons = styled.div`
	display: none;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 200px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		a {
			margin: 0 0.5rem;
			font-size: 2rem;
		}
	}
`;
