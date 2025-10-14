import {
	Box,
	Heading,
	Text,
	Input,
	Image,
	InputGroup,
	Button,
	IconButton,
	Link,
	Flex
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { IoKeyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "@/assets/logo.png";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Typewriter } from "@/components/typewriter";
import { APP_NAME, DOCS_URL, REPO_URL } from "@/utils/app";
import { FiBookOpen, FiGithub } from "react-icons/fi";

// TODO:
// - 登录功能实现
export default function Login() {
	useEffect(() => {
		document.title = `登录 - ${APP_NAME} WebUI`;
	});

	const [yiyan, setYiyan] = useState("");

	useEffect(() => {
		axios
			.get("https://v1.hitokoto.cn")
			.then((response) => setYiyan(response.data.hitokoto))
			.catch(() => setYiyan("加载一言失败"));
	}, []);


	return (
		<Box
			className="w-full h-screen"
			display="flex"
			_dark={{ bg: "black" }}
			alignItems="center"
			justifyContent="center"
		>
			<Box>

				{/* 表单主体内容 */}
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

						{/* 暗黑模式切换按钮 */}
						<Box position="absolute" top={4} right={4}>
							<ColorModeButton />
						</Box>



						{/* 头像区域 */}
						<Box className="flex justify-center">
							<motion.div
								initial={{ rotate: -360, scale: 0.8, opacity: 0 }}
								animate={{ rotate: 0, scale: 1, opacity: 1 }}
								transition={{
									type: "spring",
									stiffness: 300,
									duration: 1.5
								}}
								whileHover={{
									scale: 1.1,
									rotate: 5
								}}
							>
								<Image
									src={logo}
									className="!size-28 rounded-[50%]"
								/>
							</motion.div>
						</Box>


						<Heading as="h1" textAlign="center" mb={2} color={{ base: "purple.400", _dark: "white" }} >
							PuniYu
						</Heading>

						<Text textAlign="center" mb={6} color="gray.500">
							欢迎回来, 请输入您的访问令牌以继续
						</Text>

						<Text className="text-pink-400">访问令牌</Text>
						<InputGroup startElement={<IoKeyOutline />} marginTop="5px">
							<Input
								colorPalette="pink"
								placeholder="输入您的令牌..."
								type="password"
							/>
						</InputGroup>

						<motion.div
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
							className="w-full !mt-5"
						>
							<Button
								className="w-full !bg-gradient-to-r from-pink-300 to-orange-600 mt-10 hover:from-pink-400 hover:to-orange-700"
								border="none"
								boxShadow="sm"
								borderRadius="1rem"
							>
								登录
							</Button>
						</motion.div>

						{/* 一言 */}
						<Typewriter text={yiyan || "加载中..."} typingSpeed={100} />
					</Box>
				</motion.div>

				{/* 底部信息 */}
				<Box className="!pt-10">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							delay: 0.3,
						}}
					>

						<Flex gap={20} justifyContent="center">
							<Link href={REPO_URL} target="_blank" _hover={{ textDecoration: 'none' }}>
								<Flex
									alignItems="center"
									gap={2}
									_hover={{ color: "purple.400" }}
								>
									<IconButton
										variant="plain"
										aria-label="GitHub"
										color="inherit"
										_hover={{ color: "inherit" }}
									>
										<FiGithub className="!size-8" />
									</IconButton>
									<Text color="inherit">GitHub</Text>
								</Flex>
							</Link>


							<Link href={DOCS_URL} target="_blank" _hover={{ textDecoration: 'none' }}>
								<Flex
									alignItems="center"
									gap={2}
									_hover={{ color: "purple.400" }}
								>
									<IconButton
										variant="plain"
										aria-label="Docs"
										color="inherit"
										_hover={{ color: "inherit" }}
									>
										<FiBookOpen className="!size-8" />
									</IconButton>
									<Text color="inherit">Docs</Text>
								</Flex>
							</Link>
						</Flex>

						<Box className="!pt-5">
							<Text className="text-center text-gray-500 mt-5">Made with ❤️ by {APP_NAME}</Text>
							<Text className="text-center text-gray-500 mt-5">Copyright © {new Date().getFullYear()} {APP_NAME} All rights reserved.</Text>
						</Box>

					</motion.div>

				</Box>

			</Box>

		</Box >
	);
}
