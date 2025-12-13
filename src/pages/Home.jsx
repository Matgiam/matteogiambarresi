import "../styling/reset.css";
import "../styling/index.css";
import LandingScreen from "../components/LandingScreen";
import ProjectsText from "../components/Projectstext";
import ScrollingText from "../components/ScrollingText";
import ProjectCard from "../components/ProjectCard";
import Projects from "../components/Projects";
import AboutMeSection from "../components/AboutMeSection";
import AboutMeSection2 from "../components/AboutMeSection2";
import FoolishMindsText from "../components/FoolishMinds";
import FoolishMindsFoto from "../components/FoolishMindsFoto";
import Contact from "../components/Contact";
import ArrowUp from "../components/ArrowUp";
import Footer from "../components/Footer";
function Home() {
	return (
		<div>
			<LandingScreen />
			<ArrowUp />
			<ProjectsText />
			<Projects />
			<ScrollingText
				direction="left"
				content="Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects "
			/>
			{/* <ProjectCard />
			<ScrollingText
				direction="right"
				content=" design design design design design design design design design design design design design design design design design design"
			/> */}

			<AboutMeSection />
			<AboutMeSection2 />
			<FoolishMindsFoto />
			<FoolishMindsText />
			<Contact />
			<Footer />
		</div>
	);
}
export default Home;

/* To do*/
/* 
*- Animations whole website using framer-motion*
*- adding the images*
*- adding the good content (text)*
*- e-mail service*
*- responsive for mobile (first version not compatible with other widths)
*- hamburgermenu*



- navigation like shift

- responsive for mobile and tablet

- adding linkedin icon in contact section



- using real data

*/
