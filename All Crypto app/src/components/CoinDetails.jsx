import { Badge, Box, Button, Container, HStack, Image, Progress, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack, } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import Error from './Error';
import axios from 'axios';
import { server } from '../index';
import { Link, Navigate, useParams } from 'react-router-dom';
import ChartData from './ChartData';
const CoinDetails = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  let ncurrency;

  if (currency === "inr") {
    ncurrency = "₹";
  }
  if (currency === "usd") {
    ncurrency = "$";
  }
  if (currency === "eur") {
    ncurrency = "€";
  }

  const params = useParams();

  function changeCurrency(value) {
    setCurrency(value);
    // console.log(currency)
  }

  useEffect(() => {

    const fetchData = async () => {

      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);

        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );

        // console.log(data);  
        setCoins(data);
        setChartArray(chartData.prices)
        // console.log(chartData)
        setLoading(false);

      } catch (error) {
        setLoading(false);
        setError(true);
      }

      // console.log(page)
    }
    fetchData();

  }, [params.id, currency, days])

  if (error) {
    return <Error msg={"Error while showing Coin data"}></Error>
  }

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  function switchChartDays(btn) {
    console.log(btn)
    if (btn === "24h") setDays("24h")
    else if (btn === "7d") setDays("7d")
    else if (btn === "7d") setDays("7d")
    else if (btn === "14d") setDays("14d")
    else if (btn === "30d") setDays("30d")
    else if (btn === "60d") setDays("60d")
    else if (btn === "200d") setDays("200d")
    else if (btn === "1y") setDays("356d")
    else if (btn === "max") setDays("max")
    setLoading(true);
  }



  return (
    <div>
      <Container maxW={"full"} bgColor={"blackAlpha.900"} pt={"1vh"}>
        {
          loading ? (<Loader></Loader>)
            :
            (
              <div>

                <Button colorScheme='twitter' mb={"3vh"} variant='outline'>
                  <Link to="/coins">Back</Link>
                </Button>

                <Box w={"full"} borderWidth={1} mb={5} bgColor={"white"} >
                  <ChartData arr={chartArray} currency={ncurrency} days={days} />
                </Box>

                <HStack p={4} wrap={"wrap"} justifyContent={"center"} gap={7}>
                  {
                    btns.map((btn) => (
                      <Button key={btn} colorScheme='twitter' variant='outline' size={"lg"} onClick={() => { switchChartDays(btn) }}>
                        {btn}
                      </Button>
                    ))
                  }

                </HStack>

                <HStack wrap={"wrap"} justifyContent={"center"} mt={10} mb={5} gap={4} pt={5}>
                  <Text fontSize='3xl' color={"white"}>Select Currency : </Text>
                  <Button leftIcon={"₹"} colorScheme='twitter' size='md' onClick={() => { changeCurrency("inr") }} >INR</Button>
                  <Button leftIcon={"$"} colorScheme='twitter' size='md' onClick={() => { changeCurrency("usd") }} >USD</Button>
                  <Button leftIcon={"€"} colorScheme='twitter' size='md' onClick={() => { changeCurrency("eur") }} >EURO</Button>
                </HStack>



                <VStack spacing={"4"} p="16" alignItems={"center"} justifyContent={"center"} color={"white"} w={"100vw"} >

                  <Text fontSize={'small'} color={"white"} alignSelf={"center"} opacity={0.7} mb={"2vh"}>Last Updated on {coins.market_data.last_updated.split("T")[0]} {coins.market_data.last_updated.split("T")[1].split("Z")}</Text>

                  <HStack gap={"10vw"}>

                    <VStack w={"30vw"} >
                      <Image src={coins.image.large} w={"200px"} h={"200px"} objectFit={"contain "}></Image>

                      <Stat>

                        <StatLabel>{coins.name}</StatLabel>
                        <StatNumber>
                          {ncurrency}
                          {" "} {coins.market_data.current_price[currency]}
                        </StatNumber>
                        <StatHelpText>
                          <StatArrow type={coins.market_data.price_change_24h_in_currency[currency] > 0 ? "increase" : "decrease"} ></StatArrow>
                          {coins.market_data.price_change_24h_in_currency[currency]}%
                        </StatHelpText>

                      </Stat>
                    </VStack>

                    <VStack w={"40vw"}>

                  <Badge fontSize={"2xl"} p={1} mb={4}>
                    {
                      `#${coins.market_cap_rank}`
                    }
                  </Badge>

                  <CustomBar
                    high={`${ncurrency}${coins.market_data.high_24h[currency]}`}
                    low={`${ncurrency}${coins.market_data.low_24h[currency]}`}
                  />

                  <Box w={"100%"} p={4}>
                    <Item title={"Max Supply : "} value={coins.market_data.max_supply}></Item>
                    <Item title={"Circulating Supply : "} value={coins.market_data.circulating_supply}></Item>
                    <Item title={"Market Cap : "} value={`${ncurrency} ${" "} ${coins.market_data.market_cap[currency]}`}></Item>
                    <Item title={"All Time Low : "} value={`${ncurrency}${" "} ${coins.market_data.atl[currency]}`}></Item>
                    <Item title={"All Time High : "} value={`${ncurrency}${" "} ${coins.market_data.ath[currency]}`}></Item>

                  </Box>

                    </VStack>



                  </HStack>

               

                  
      



                </VStack>

              </div>
            )
        }
      </Container>
    </div>
  )
}

const CustomBar = ({ high, low }) => (
  <VStack w={"70%"}>
    <Progress value={50} colorScheme={"teal"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
);

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"monospace"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);


export default CoinDetails
