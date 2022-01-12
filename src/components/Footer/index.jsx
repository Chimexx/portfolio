import React from "react";
import { NavItems } from "../../data/NavItems";
import { Container, Wrapper, Hr, List, ListItem, Navlink } from "./Footer.styled";

const Footer = () => {
	return (
		<>
			<Hr />
			<Container>
				<Wrapper>
					<List>
						{NavItems.map((navItem, index) => (
							<ListItem key={index}>
								<Navlink href={navItem.href}>{navItem.text}</Navlink>
							</ListItem>
						))}
					</List>
					<h5>Hand Coded in React, with the help of Styled Components!</h5>
					<h5>&#169; Copyright {new Date().getFullYear().toString()}</h5>
				</Wrapper>
			</Container>
		</>
	);
};

export default Footer;
