import React from "react";
import { MyProjects } from "../../data/Projects";
import SectionHeading from "../common/SectionHeading";
import { Section } from "./ProjectSection.styled";
import Project from "../Project";

const ProjectSection = () => {
	return (
		<Section id="projects">
			<SectionHeading title="Projects" desc="Some of my work" />
			<div>
				{MyProjects?.map((project, index) => {
					return (
						<Project
							key={index}
							img={project.thumbnail}
							title={project.title}
							live={project.live}
							tags={project.tags}
							type={project.type}
							details={project.details}
							code={project.code}
							privateRepo={project.privateRepo}
							liveProjectText={project.liveProjectText}
						/>
					);
				})}
			</div>
			<hr />
		</Section>
	);
};

export default ProjectSection;
