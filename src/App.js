import { GlobalStyles } from "./components/styles/Globals.styled";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
	const theme = {
		colors: {
			oxfordBlue: "rgba(20, 33, 61,1)",
			bdazzledBlue: "rgba(55, 91, 169, 1)",
			orangeWeb: "rgba(252, 163, 17, 1)",
			white: "rgba(255, 255, 255, 1)",
			cultured: "rgba(249, 249, 249, 1)",
			black: "rgba(0, 0, 0, 0)",
			russianViolet: "rgba(36, 0, 70, 1)",
			luscent: "rgba(255, 255, 255, 0.1)",
		},
		mobile: "768px",
		transition: "all 0.3s ease-in-out",
		defaultFont: "12px",
	};
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Navbar />
				<Hero />
				<Projects />
			</ThemeProvider>
		</>
	);
}

export default App;
