import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import CardStack from "./Cardstacker";

function AboutMeSection() {
	const ref = useRef(null);

	// Track scroll relative to this section
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.2 1"], // start when section enters, end when it leaves
	});

	// Scale + fade for container
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

	// Helper to stagger paragraphs
	const createParagraphAnimation = (start, end) => {
		return {
			opacity: useTransform(scrollYProgress, [start, end], [0, 1]),
			y: useTransform(scrollYProgress, [start, end], [40, 0]),
		};
	};

	// Each paragraph reveals at different scroll intervals
	const p1 = createParagraphAnimation(0.1, 0.3);
	const p2 = createParagraphAnimation(0.3, 0.5);
	const p3 = createParagraphAnimation(0.5, 0.7);
	const p4 = createParagraphAnimation(0.7, 0.9);
	const p5 = createParagraphAnimation(0.8, 0.95);

	return (
		<header ref={ref} className="header2">
			<div className="about-container">
				<motion.div style={{ scale: scaleProgress, opacity: opacityProgress }} className="about-content">
					<h1 id="about">My story</h1>

					<motion.p style={p1}>
						Hey my name is Matteo Giambarresi, I am a 21 year old student at Erasmushogeschool Brussel where I study Multimedia & creative technology.{" "}
						<br /> <br />
					</motion.p>

					<motion.p style={p2}>
						I've learned a lot of things such as webdesign, coding, 3D-modelling, ... I fell in love with react and 3D and I would love to work in the
						front-end industry.
						<br /> <br />
					</motion.p>

					<motion.p style={p3}>
						I can speak 3 languages fluently. I can speak french, dutch and english. I am a extravert, joyful, positive person who always wants to
						bring positive energy in the environment.
						<br /> <br />
					</motion.p>
					<motion.p style={p4}>
						I know when to be serious, and I am disciplined enough to assess the work I need to complete and organize it effectively, ensuring that my
						assignments are carried out in a clear and structured way.
						<br /> <br />
					</motion.p>

				
				</motion.div>
				<CardStack />
			</div>
		</header>
	);
}

export default AboutMeSection;
