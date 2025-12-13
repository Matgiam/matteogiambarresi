import { useState } from "react";
import Home from "../pages/Home.jsx";
import Projects from "../components/Projects.jsx";
import LandingScreen from "../components/LandingScreen";
import ProjectCard from "../components/ProjectCard.jsx";
import CardStack from "../components/Cardstacker.jsx";
import AboutMeSection from "../components/AboutMeSection.jsx";
import Contact from "../components/Contact.jsx";
import MobileMenu from "../components/Menu.jsx";
import { Link, Route, Routes, BrowserRouter } from "react-router";
function App() {
	return (
		<BrowserRouter basename="/matteogiambarresi">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
