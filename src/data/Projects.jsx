import taofoods from "../images/tao-foods.png";
import omooba from "../images/../images/omooba-express.png";
import webflycks from "../images/../images/webflycks.png";

export const MyProjects = [
	{
		thumbnail: taofoods,
		title: "Tao foods",
		type: "Voluntary",
		details:
			"This is a voluntary project I did for a restaurant in my locality to enable them have an online presence and smoother operation in general. The project includes the front-end, coded in React, an express.js backend API, and an admin dashboard for quick control and visualization. ",
		tags: [
			"React",
			"Styled Components",
			"Material UI",
			"Firebase",
			"Mongoose",
			"Express js",
			"Redux toolkit",
		],
		live: "http://tao-foods.netlify.app",
		liveProjectText: "Live Site",
		code: "https://github.com/Chimexx/tao-foods-client",
	},

	{
		thumbnail: omooba,
		title: "Omooba Express",
		type: "Paid",
		details:
			" Omooba Express is an agency banking firm in Nigeria, They provide Point of sales terminals to individuals and businesses. This project is about creating an online presence, a signup system for prospective agents and also a mini admin section to pull submitted data. I used Firebase for hosting and storage ",
		tags: ["React", "Styled Components", "Firebase", "BootStrap"],
		live: "http://omooba-express.com",
		liveProjectText: "Live Site",
		code: "https://github.com/Chimexx/omooba-express",
	},
	{
		thumbnail: webflycks,
		title: "Webflycks",
		type: "Personal",
		details:
			"A personal project I built to enable me have a solid grasp of the use of Axios, Redux and APIs",
		tags: ["React", "Styled Components", "Redux Toolkit"],
		live: "http://webflycks.netlify.app",
		liveProjectText: "Live Site",
		code: "https://github.com/Chimexx/webflycks-movie-app",
	},
];
