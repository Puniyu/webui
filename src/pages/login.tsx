import {
	Box,
	Heading,
	Text,
	Input,
	Image,
	InputGroup,
	Button,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { IoKeyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "@/assets/logo.png";
import { APP_NAME } from "@/common";
import { ColorModeButton } from "@/components/ui/color-mode";

// TODO:
// - 更换一言接口为自有接口
// - 登录功能实现
export default function Login() {
	document.title = `登录 - ${APP_NAME} WebUI`;
	const [yiyan, setYiyan] = useState("");

	useEffect(() => {
		axios
			.get("https://v1.hitokoto.cn")
			.then((response) => setYiyan(response.data.hitokoto))
			.catch((error) => console.error("Failed to fetch yiyan:", error));
	}, []);


	return (
		<Box
			className="w-full h-screen"
			display="flex"
			_dark={{ bg: "black" }}
			alignItems="center"
			justifyContent="center"
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.8,
					ease: "easeOut",
					delay: 0.1,
				}}
			>
				<Box
					className="!p-7"
					borderWidth={1}
					borderRadius="lg"
					width={{ base: "90%", md: "400px" }}
					boxShadow="2xl"
					backdropFilter="blur(10px)"
					backgroundColor={{ base: "white", _dark: "black" }}
					opacity={0.95}
					margin="auto"
					position="relative"
				>
					<Box position="absolute" top={4} right={4}>
						<ColorModeButton />
					</Box>

					<Image src={logo} className="size-32" margin={"auto"} />

					<Heading as="h1" textAlign="center" mb={2} color="purple.700">
						PuniYu
					</Heading>

					<Text textAlign="center" mb={6} color="gray.500">
						欢迎回来, 请输入您的访问令牌以继续
					</Text>

					<Text className="text-pink-300">访问令牌</Text>
					<InputGroup startElement={<IoKeyOutline />} marginTop={"5px"}>
						<Input
							colorPalette="pink"
							placeholder="输入您的令牌..."
							type="password"
						/>
					</InputGroup>

					<motion.div whileHover={{ scale: 1.1 }} className="w-full !mt-5">
						<Button
							className="w-full !bg-gradient-to-r from-pink-300 to-orange-600 mt-10 hover:from-pink-400 hover:to-orange-700"
							border={"none"}
							boxShadow={"sm"}
							borderRadius={"1rem"}
						>
							登录
						</Button>
					</motion.div>

					{/* 一言 */}
					<Typewriter text={yiyan || "加载中..."} typingSpeed={100} />
				</Box>
			</motion.div>
		</Box>
	);
}

/**
 * 打字机效果组件
 */
function Typewriter({
	text,
	typingSpeed,
}: {
	text: string;
	typingSpeed: number;
}) {
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
		<Text className={"text-center text-blue-300"} mt={6}>
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
}
