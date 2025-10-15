import { Typewriter } from "@/components/typewriter";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [yiyan, setYiyan] = useState("");

  useEffect(() => {
    axios
      .get("https://v1.hitokoto.cn")
      .then((response) => setYiyan(response.data.hitokoto))
      .catch(() => setYiyan("加载一言失败"));
  }, []);

  const imageUrl = "https://t.alcy.cc/moez"

  return (
    <Box className="w-full h-screen flex" alignItems="center" justifyContent="center">
      {/* 文本区域 */}
      <Box
        className="rounded-lg flex flex-col relative !pt-5"
        width={{ base: "90%", md: "md" }}
        height={{ base: "90%", md: "lg" }}
        boxShadow="2xl"
        alignItems="center"
        justifyContent="center"
        backgroundColor={{ base: "white", _dark: "gray.800" }}
      >
        <Box>
          <Text className="!text-3xl text-purple-500">页面找不到了</Text>
        </Box>

        <Box className="!pt-5" width={"90%"}>
          <Image src={imageUrl} borderRadius="md" />
        </Box>

        {/* 暗黑模式切换按钮 */}
        <Box position="absolute" top={4} right={4}>
          <ColorModeButton />
        </Box>

        {/* 一言 */}
        <Box className="bottom-5 text-center px-4" width="full">
          <Typewriter text={yiyan || "加载中..."} typingSpeed={100} />
        </Box>
        
      </Box>
    </Box>
  )
}