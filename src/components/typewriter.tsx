import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import { motion } from "motion/react";

export const Typewriter = ({
	text,
	typingSpeed,
}: {
	text: string;
	typingSpeed: number;
}) => {
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		setDisplayText("");
		setCurrentIndex(0);
	}, [text]);

	useEffect(() => {
		if (currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setDisplayText((prevText) => prevText + text[currentIndex]);
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}, typingSpeed);

			return () => clearTimeout(timeout);
		}
	}, [currentIndex, text, typingSpeed]);

	return (
		<Text className="text-center text-blue-400" mt={6}>
			{displayText}
			{currentIndex < text.length && (
				<motion.span
					animate={{ opacity: [1, 0] }}
					transition={{ duration: 0.5, repeat: Infinity }}
					style={{ display: "inline-block" }}
				>
					|
				</motion.span>
			)}
		</Text>
	);
};