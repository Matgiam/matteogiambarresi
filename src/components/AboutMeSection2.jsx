import { motion } from "motion/react";
function AboutMeSection2() {
	return (
		<header>
			<div className="about-container2">
				<motion.div
					whileInView={{ y: [200, 0], opacity: [0, 1] }}
					transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
					viewport={{ once: true, amount: 0 }}
					className="about-content2"
				>
					<p>I can work with multiple tools going from coding to design to music.</p>
				</motion.div>
				<div className="icons">
					<div className="rectangles2">
						<motion.div
							whileInView={{ y: [50, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
							className="rectangle4"
						>
							{" "}
							<img src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1757964384/ai_icon_m0aluw.png" alt="" />
						</motion.div>
						<motion.div
							whileInView={{ y: [70, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
							className="rectangle4"
						>
							<img src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1757964389/ps_icon_tnzelc.png" alt="" />
						</motion.div>
						<motion.div  
							whileInView={{ y: [90, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
							className="rectangle4"
						>
							<img src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1757964389/pr_icon_kxxmwh.png" alt="" />
						</motion.div>
						<motion.div
							whileInView={{ y: [110, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
							className="rectangle4"
						>
							{" "}
							<img src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1757964384/figma_icon_oohyrw.png" alt="" />
						</motion.div>
						<motion.div
							whileInView={{ y: [130, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
							className="rectangle4"
						>
							{" "}
							<img src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1757964389/vscode_icon_ya7xmd.png" alt="" />
						</motion.div>
						<motion.div
							whileInView={{ y: [150, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
							className="rectangle4"
						>
							<img src="https://res.cloudinary.com/dhvigmhgw/image/upload/v1760543357/image_2025-10-15_174915872_gim9pd.png" alt="" />
						</motion.div>
						<motion.div
							whileInView={{ y: [170, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="rectangle4"
						>
							{" "}
							<img src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1757964389/react_icon_ih1pgp.png" alt="" />
						</motion.div>
						<motion.div
							whileInView={{ y: [190, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
							className="rectangle4"
						>
							<img src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1757964384/html_icon_xo56hj.png" alt="" />
						</motion.div>
						<motion.div
							whileInView={{ y: [210, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
							className="rectangle4"
						>
							<img src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1757964384/css_icon_cl5log.png" alt="" />
						</motion.div>
						<motion.div
							whileInView={{ y: [230, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
							className="rectangle4"
						>
							<img src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1757964385/mongodb_icon_weygaa.png" alt="" />
						</motion.div>
						<motion.div
							whileInView={{ y: [250, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
							className="rectangle4"
						>
							<img src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1757964385/motion_icon_th9yqm.png" alt="" />
						</motion.div>
						<motion.div
							whileInView={{ y: [270, 0], opacity: [0, 1], rotate: [-10, 0] }}
							transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
							className="rectangle4"
						>
							<img src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1757964384/ableton_icon_lsr4og.webp" alt="" />
						</motion.div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default AboutMeSection2;
