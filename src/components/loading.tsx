import { Box, Text } from "@chakra-ui/react";
import { motion } from "motion/react";

// 加载页面
export default function Loading() {
    const text = "Loading...".split("");

    return (
        <Box className="w-full h-screen flex" alignItems="center"
            justifyContent="center">

            {/* 文本区域 */}
            <Box>
                <Box className="flex" justifyContent="center">
                    {text.map((char, index) => (
                        <motion.div
                            key={index}
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.1,
                            }}
                            style={{ display: "inline-block", margin: "0 2px" }}
                        >
                            <Text className="text-pink-300 !text-3xl text-center">
                                {char}
                            </Text>
                        </motion.div>
                    ))}
                </Box>


                {/* 加载进度条 */}
                <Box>
                    <motion.div
                        animate={{
                            scaleX: [0.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                        }}
                        style={{
                            transformOrigin: "left center",
                        }}
                    >
                        <Box className="w-100 h-5 !mt-5 bg-purple-300" borderRadius={"full"}></Box>
                    </motion.div>
                </Box>

            </Box>
        </Box>
    )
}