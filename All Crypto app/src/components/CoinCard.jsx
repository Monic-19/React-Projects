import { Heading, VStack ,Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({id, name, img, symbol ,price ,currency }) => {

    if(currency === "inr"){
        currency = "₹";
    }
    if(currency === "usd"){
        currency = "$";
    }
    if(currency === "eur")
    {
        currency = "€";
    }

  return (
    <div>
        <Link to={`/coin/${id}`}>

            <VStack w={"52"} shadow={"lg"} p={8} borderRadius={"lg"} transition={"all 0.3s"} m={4} bgColor={"transparent"} border={"2px solid teal"} color={'white'}
             css = {{ "&:hover" : {transform : "scale(1.1)"}   }}
            >
                <Image src={img} w={10} h={10} objectFit={"contain"} alt='Exchange'></Image>


                <Heading size={"md"} noOfLines={1}>
                    {symbol}
                </Heading>

                <Text noOfLines={1}>
                    {name}
                </Text>

                <Text noOfLines={1}>
                    {price? (`${currency} ${price}`) : ("NA")}
                </Text>
            </VStack>

        </Link>
    </div>
  )
}

export default CoinCard
