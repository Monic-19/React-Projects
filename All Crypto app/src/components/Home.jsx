import { Box , HStack, Image ,Text} from '@chakra-ui/react'
import React from 'react'
import img from "../assets/btc.png"
import { wrap } from 'framer-motion'

const Home = () => {
  return (
    <div>
      <Box bgColor={"blackAlpha.900"} height={"90vh"} w={"full"} >
        <HStack wrap={wrap} alignItems={"center"} justifyContent={"center"} gap={10}>
        <Image w={"90vh"} h={"90vh"} objectFit={"contain"} src={img}></Image>
        <Text fontSize={"9xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.900"} mt={"-10vh"}>All  Crypto</Text>
        </HStack>
      </Box>
    </div>
  )
}

export default Home
