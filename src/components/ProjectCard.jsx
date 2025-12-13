import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

function ProjectCard(props) {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	return (
		<header className="rectangle">
			<motion.div className="rectangler">
				<div className="rectangle2">
					<img src={props.image} alt="" />
					<h3>{props.name}</h3>
					<div className="rectangle-content">
						<h4>{props.technologies}</h4>
						<div className="view-project">
							<motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 1 }} onClick={() => setIsOpen(true)}>
								View Project
							</motion.button>
						</div>
					</div>
				</div>
			</motion.div>

			{isOpen && (
				<div className="modal" onClick={() => setIsOpen(false)}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<motion.svg
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 1.0 }}
							onClick={() => setIsOpen(false)}
							xmlns="http://www.w3.org/2000/svg"
							width="1vw"
							viewBox="0 0 16 16"
							fill="none"
							className="modal_close-icon"
						>
							<path d="M1 1L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
							<path d="M1 15L15 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
						</motion.svg>
						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
						>
							{props.name}
						</motion.h1>
						<motion.h4
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
						>
							{props.technologies}
						</motion.h4>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
						>
							{props.content}
						</motion.p>
						<br />
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
						>
							<motion.button
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
								viewport={{ once: false, amount: 0.5 }}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 1.0 }}
								style={{ marginTop: "1vw", cursor: "pointer" }}
								onClick={() => window.open(props.link, "_blank")}
							>
								Visit website
							</motion.button>
						</motion.div>
						<motion.img
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
							src={props.image}
							alt="Foolish Minds"
						/>
						<motion.img
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
							src={props.extra1}
							alt="Foolish Minds"
						/>
						<motion.img
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
							src={props.extra2}
							alt="Foolish Minds"
						/>
						<motion.img
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
							src={props.extra3}
							alt="Foolish Minds"
						/>
					</div>
				</div>
			)}
		</header>
	);
}

export default ProjectCard;
