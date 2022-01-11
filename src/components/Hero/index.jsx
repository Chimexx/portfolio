import React from "react";
import me from "../../images/me.jpg";
import { FaArrowDown, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from "../common/Button";
import {
	Section,
	Title,
	Para,
	Wrapper,
	Span,
	Img,
	Btngrp,
	Intro,
	Text,
	ArrowDown,
	IconBar,
	SocialLink,
	Hr,
} from "./Hero.styled";
import { NavItems } from "../../data/NavItems";

const Hero = () => {
	return (
		<>
			<Section id="about">
				<Wrapper>
					<Title>MEZIE.ME</Title>
					<Intro>
						<Img src={me} />
						<Text>
							<Para>
								Hi! My name is Chimezie J. Okoro, I'm a Nigeria-based
								<Span> MERN Stack developer</Span>, but more inclined towards frontend
								development. I derive satisfaction from creating clean and effective software
								experience.
							</Para>

							<Para>
								I have a diverse set of skills which includes, but not limited to Adobe
								Illustrator, Adobe Photoshop, HTML, CSS, Javascript, Typescript, React and
								Node.js.
							</Para>
							<Btngrp>
								<Button text="Projects" href="#projects" />
							</Btngrp>
						</Text>
					</Intro>
					<ArrowDown href="#projects">
						<FaArrowDown />
					</ArrowDown>
					<IconBar>
						{NavItems.map((navItem, index) =>
							navItem.hasSocial ? (
								<div key={index}>
									<SocialLink href="#" target="_blank">
										<FaFacebook />
									</SocialLink>
									<SocialLink href="#" target="_blank">
										<FaTwitter />
									</SocialLink>
									<SocialLink href="#" target="_blank">
										<FaLinkedin />
									</SocialLink>
									<SocialLink href="#" target="_blank">
										<FaGithub />
									</SocialLink>
								</div>
							) : null
						)}
					</IconBar>
				</Wrapper>
			</Section>
			<Hr />
		</>
	);
};

export default Hero;
