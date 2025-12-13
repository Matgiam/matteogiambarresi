
import { motion } from "motion/react";
function ArrowUp() {
	return (
		<motion.div initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }} className="arrowUp">
			<a href="#home">
				<svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" viewBox="0 0 33 30" fill="none">
					<path
						d="M16.5 26.125V6.875M16.5 6.875L26.125 16.5M16.5 6.875L6.875 16.5"
						stroke="white"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</a>
		</motion.div>
	);
}

export default ArrowUp;
