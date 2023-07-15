import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index';
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';
import ExchangeCart from './ExchangeCart';

const Exchange = () => {

    const [exchanges ,setExchanges] = useState([]);
    const [loading ,setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      
        const fetchData = async() => {
     
            try {
                const {data} = await axios.get(`${server}/exchanges`);
                // console.log(data);
                setExchanges(data); 
                setLoading(false);
                
            } catch (error) {
                setLoading(false);
                setError(true);
            }
            
        }
        fetchData();
        
    }, [])

    // console.log(exchanges)
    
    if(error){
        return <Error msg={"Error while fetching Exchanges"}></Error>
    }

  return (

    
    <Container maxW={"full"} bgColor={"blackAlpha.900"} pt={10}>
        {
            loading ? (<Loader></Loader>) : 
                      (
                        
                            <HStack wrap={"wrap "} justifyContent={"center"}>
                                {
                                    exchanges.map( (coin)=> (
                                        
                                        <div key={coin.id}>
                                          <ExchangeCart  name={coin.name} img={coin.image} rank={coin.trust_score_rank} url={coin.url}></ExchangeCart>
                                        </div>
                                    ))
                                }
                            </HStack>
                      
                      )
        }
    </Container>
  )
}

 
export default Exchange
