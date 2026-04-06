import { motion } from "motion/react";
import { Button } from "../ui/button";

export default function StickyCTA() {
	return (
		<motion.div
			className="fixed bottom-[12vh] md:bottom-[10vh] right-16 md:right-12 z-[999]"
			animate={{ y: [0, -8, 0] }}
			transition={{
				duration: 1.6,
				ease: "easeInOut",
				repeat: Infinity,
			}}
		>
			<Button className="rounded-full px-6 py-4 text-xs font-bold uppercase tracking-widest shadow-lg">
				<a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
					AGENDA TU CITA
				</a>
			</Button>
		</motion.div>
	);
}
