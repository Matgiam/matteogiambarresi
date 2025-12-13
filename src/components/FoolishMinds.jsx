import { motion } from "motion/react";
function FoolishMindsText() {
	return (
		<div>
			<div className="foolish_text" id="foolishminds">
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					viewport={{ once: true, amount: 0.2 }}
				>
					Foolish Minds
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
				viewport={{ once: true, amount: 0.2 }}
				>
					We are a rock punk band originally from Ninove. <br /> The bands started in July 2021 when only me <br /> and my cousin where having an idea to <br />  play our favourite songs together.
				</motion.p>

				<motion.button
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
					viewport={{ once: false, amount: 0.5 }}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 1.0 }}
					style={{ marginTop: "1vw", cursor: "pointer" }}
					onClick={() => window.open("https://vi.be/platform/FoolishMinds", "_blank")}
				>
					Follow us
				</motion.button>
			</div>
		</div>
	);
}
export default FoolishMindsText;
