import { motion } from "motion/react";
function FoolishMindsFoto() {
	return (
		<header>
			<div className="foolish">
				<motion.img
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
					viewport={{ once: false, amount: 0.2 }}
					src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1757963618/foolish_minds_hn6jup.jpg"
					alt="Foolish Minds"
				/>
			</div>
		</header>
	);
}

export default FoolishMindsFoto;
