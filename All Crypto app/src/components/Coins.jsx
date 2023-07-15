import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '../index';
import { Container, HStack, Button, Text } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';
import CoinCard from './CoinCard';

const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const btns = new Array(10).fill(1);
  // console.log(btns) 

  useEffect(() => {

    const fetchData = async () => {

      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        // console.log(data);
        setCoins(data);
        setLoading(false);

      } catch (error) {
        setLoading(false);
        setError(true);
      }

      // console.log(page)
    }
    fetchData();

  }, [currency, page])

  if (error) {
    return <Error msg={"Error while fetching Coins"}></Error>
  }


  function SetPage(page) {
    setLoading(true);
    setPage(page);
  }

  function PrevPage() {

  }

  function nextPage() {

  }

  function changeCurrency(value) {
    setCurrency(value);
    // console.log(currency)
  }





  return (
    <Container maxW={"full"} bgColor={"blackAlpha.900"} pt={10}>
      {
        loading ? (<Loader></Loader>) :
          (
            <div>

              <HStack wrap={"wrap"} justifyContent={"center"} mb={5} gap={4}>
                <Text fontSize='3xl' color={"white"}>Select Currency : </Text>
                <Button variant='outline' leftIcon={"₹"} colorScheme='twitter' size='md' onClick={() => { changeCurrency("inr") }} >INR</Button>
                <Button variant='outline' leftIcon={"$"} colorScheme='twitter' size='md' onClick={() => { changeCurrency("usd") }} >USD</Button>
                <Button variant='outline' leftIcon={"€"} colorScheme='twitter' size='md' onClick={() => { changeCurrency("eur") }} >EURO</Button>
              </HStack>

              <HStack wrap={"wrap "} justifyContent={"center"}>
                {
                  coins.map((coin) => (

                    <div key={coin.id}>
                      <CoinCard name={coin.name} img={coin.image} id={coin.id} symbol={coin.symbol} price={coin.current_price} currency={currency}></CoinCard>
                    </div>
                  ))
                }
              </HStack>

              <HStack p={6} mt={5} gap={7} justifyContent={"center"}>

                {
                  btns.map((btn, index) => (
                    <Button key={index} colorScheme='teal' variant='outline' onClick={() => { SetPage(index + 1) }}>{index + 1}</Button>
                  ))
                }
                
              </HStack>
            </div>
          )
      }
    </Container>
  )
}

export default Coins
