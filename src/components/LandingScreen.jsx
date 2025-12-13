import { motion } from "motion/react";
import MobileMenu from "./Menu";
function LandingScreen() {
	return (
	<div className="wrapper" style={{ position: "relative" }}>
			<header>
				<MobileMenu></MobileMenu>
				<div className="name">
					<div className="flex">
						<motion.h1
							animate={{ y: [-700, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							id="home"
						>
							M
						</motion.h1>

						<motion.h1
							animate={{ y: [-800, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
							id="home"
						>
							A
						</motion.h1>

						<motion.h1
							animate={{ y: [-900, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
							id="home"
						>
							T
						</motion.h1>

						<motion.h1
							animate={{ y: [-1000, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
							id="home"
						>
							T
						</motion.h1>

						<motion.h1
							animate={{ y: [-1100, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
							id="home"
						>
							E
						</motion.h1>

						<motion.h1
							animate={{ y: [-1200, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
							id="home"
						>
							O
						</motion.h1>
					</div>
				</div>
				<div className="header-text">
					<motion.h2
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
					>
						Passionate about front-end <br /> developing, 3D and music.
					</motion.h2>
					<div className="landing_image">
						<img src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1757963335/Matteo_o3pyvu.png" alt="Matteo Giambarresi" />
					</div>
					<nav>
						<ul>
							<motion.li
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
							>
								<h3>
									<a href="#projects">Projects</a>
								</h3>
							</motion.li>
							<motion.li
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
							>
								<h3>
									<a href="#about">About me</a>
								</h3>
							</motion.li>
							<motion.li
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
							>
								<h3>
									<a href="#contact">Contact</a>
								</h3>
							</motion.li>
						</ul>
						<div className="scroll_down">
							<motion.h3
								initial={{ y: -50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
							>
								Scroll down
							</motion.h3>
							<motion.svg
								initial={{ y: -50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
								xmlns="http://www.w3.org/2000/svg"
								width="3vw"
								height="3vh"
								viewBox="0 0 33 33"
								fill="none"
							>
								<path
									d="M16.5 6.875V26.125M16.5 26.125L26.125 16.5M16.5 26.125L6.875 16.5"
									stroke="white"
									strokeWidth="4"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</motion.svg>
						</div>
					</nav>
				</div>
			</header>
		</div>
	);
}

export default LandingScreen;
