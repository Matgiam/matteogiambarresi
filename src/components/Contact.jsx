import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault(); 

		emailjs
			.sendForm(
				"service_j3sbexk", 
				"template_9t82q8s", 
				form.current,
				"qFOlVk_wG5pnyDf0m" 
			)
			.then(
				() => {
					alert("Email sent successfully!");
					form.current.reset(); 
				},
				(error) => {
					alert("Failed to send email: " + error.text);
				}
			);
	};

	return (
		<div className="wrapper2 contact">
			<header id="contact">
				<div className="project_text contact_text">
					<motion.h1
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true, amount: 0.2 }}
					>
						Contact
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: false, amount: 0.2 }}
					>
						If you'd like to get in touch, feel free to reach out!
					</motion.p>
				</div>

				<div>
					<form ref={form} className="contact_form" onSubmit={sendEmail}>
						<motion.input
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3 }}
							type="text"
							placeholder="Name"
							name="name"
							required
						/>
						<br /> <br />
						<motion.input
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.35 }}
							type="email"
							placeholder="Email"
							name="email"
							required
						/>
						<br /> <br />
						<motion.input
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4 }}
							type="text"
							placeholder="Subject"
							name="subject"
							required
						/>
						<br /> <br />
						<motion.textarea
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.45 }}
							rows={10}
							placeholder="Message"
							name="message"
							required
						/>
						<br /> <br />
						<motion.button
							type="submit"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.5 }}
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 1.0 }}
							style={{ marginTop: "1vw", cursor: "pointer" }}
						>
							Send
						</motion.button>
					</form>
				</div>
			</header>
		</div>
	);
}

export default Contact;
