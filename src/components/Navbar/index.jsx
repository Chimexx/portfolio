import React, { useState } from "react";
import { NavItems } from "../../data/NavItems";
import {
	LineOne,
	LineTwo,
	Menu,
	Nav,
	List,
	ListItem,
	Navlink,
	SocialIcons,
	LogoContainer,
} from "./Navbar.styled";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import useScrollDirection from "../../hooks/useScrollDirection";

const Navbar = () => {
	const scrollDirection = useScrollDirection("down");

	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<>
			<Nav dir={scrollDirection}>
				<LogoContainer></LogoContainer>
				<Menu onClick={() => setMenuOpen(!menuOpen)}>
					<LineOne menuOpen={menuOpen} />
					<LineTwo menuOpen={menuOpen} />
				</Menu>
				<List menuOpen={menuOpen}>
					{NavItems.map((navItem, index) => (
						<ListItem
							key={index}
							index={index}
							menuOpen={menuOpen}
							onClick={() => setMenuOpen(false)}
						>
							<Navlink href={navItem.href}>{navItem.text}</Navlink>
							{navItem.hasSocial ? (
								<SocialIcons>
									<Navlink href="#" target="_blank">
										<FaFacebook />
									</Navlink>
									<Navlink href="#" target="_blank">
										<FaTwitter />
									</Navlink>
									<Navlink href="#" target="_blank">
										<FaLinkedin />
									</Navlink>
									<Navlink href="#" target="_blank">
										<FaGithub />
									</Navlink>
								</SocialIcons>
							) : null}
						</ListItem>
					))}
				</List>
			</Nav>
		</>
	);
};

export default Navbar;
