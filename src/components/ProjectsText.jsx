import { motion } from "motion/react";

export default function Projects() {
	return (
		<motion.div>
			<div className="project_text" id="projects">
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					viewport={{ once: true, amount: 0.2 }}
				>
					Projects
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					viewport={{ once: true, amount: 0.2 }}
				>
					Take a look at all the projects I have <br /> made during the past two years <br /> during my education
				</motion.p>
			</div>
		</motion.div>
	);
}
