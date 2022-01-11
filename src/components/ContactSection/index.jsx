import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import contact from "../../images/contact.svg";
import SectionHeading from "../common/SectionHeading";
import { Content, ImgContainer, Section, Wrapper, Links, Link } from "./Contact.styled";

const Contact = () => {
	return (
		<Section id="contact">
			<SectionHeading title="Contact" desc="Get in touch with me" />
			<Wrapper>
				<Content>
					<p>
						I'ld love it if you reached out to me, Don't hesitate to say "Hi!" and I'll get back
						to you ASAP!. I'm open for collaboration and work opportunities.
					</p>
					<Links>
						<div>
							<FaEnvelope className="icon" />
							<Link href="mailto:mezie.cjo@gmail.com" target="_blank">
								Mail me
							</Link>
						</div>
						<div>
							<FaWhatsapp className="icon" whatsapp />
							<Link
								href="https://api.whatsapp.com/send?phone=2348039690547"
								whatsapp
								target="_blank"
							>
								Whatsapp
							</Link>
						</div>
					</Links>
				</Content>
				<ImgContainer>
					<img src={contact} alt="contact" />
				</ImgContainer>
			</Wrapper>
		</Section>
	);
};

export default Contact;
