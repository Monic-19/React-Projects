import { Container, Heading, VStack ,Input, Button, Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={"100vw"} h={'100vh'} bgColor={'blackAlpha.900'} p={'16'}>

      <form>

        <VStack alignItems={'strech'} spacing={'8'} width={['full' , '96']} m={'auto'} my={'16'} color={'purple.300'}>
          <Heading textAlign={'center'}>VIDEO GALLERY</Heading>

        <Input placeholder={"Email"} type='email' required></Input>

        <Input placeholder={"Password"} type='password' required></Input>

        <Input placeholder={"Confirm Password"} type='password' required></Input>
       
        <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
        </Button>

        <Text textAlign={'right'}>Already A User ? {"    "}
        <Button variant={'link'} colorScheme='purple'>
          <Link to={'/login'}>Log In</Link>
         </Button>
        </Text>


        </VStack>
      </form>
    </Container>
  )
}

export default Signup
