import React from 'react'
import { HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';


const ExchangeCart = ({ name, img, rank, url }) => {
    return (
        
        <a href={url}>

            <VStack w={"52"} shadow={"lg"} p={8} borderRadius={"lg"} transition={"all 0.3s"} m={4} bgColor={"transparent"} color={"white"} border={"3px solid white"}
             css = {{ "&:hover" : {transform : "scale(1.1) "} }}
            >
                <Image src={img} w={10} h={10} objectFit={"contain"} alt='Exchange'></Image>


                <Heading size={"md"} noOfLines={1}>
                    {rank}
                </Heading>

                <Text noOfLines={1}>
                    {name}
                </Text>
            </VStack>

        </a>

    )
}

export default ExchangeCart
