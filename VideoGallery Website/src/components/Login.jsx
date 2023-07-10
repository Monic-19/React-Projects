import { Container, Heading, VStack ,Input, Button, Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={"100vw"} h={'100vh'} bgColor={'blackAlpha.900'} p={'16'}>

      <form>

        <VStack alignItems={'strech'} spacing={'8'} width={['full' , '96']} m={'auto'} my={'16'} color={'purple.300'}>
          <Heading>Welcome Back</Heading>

        <Input placeholder={"Email"} type='email' required></Input>

        <Input placeholder={"Password"} type='password' required></Input>

        <Button variant={"link"} alignSelf={'flex-end'}> 
          <Link to={'/forgetpassword'}>Forget Password</Link>
        </Button>

        <Button colorScheme={'purple'} type={'submit'}>
            Log In
        </Button>

        <Text textAlign={'right'}>New User ? {"    "}
        <Button variant={'link'} colorScheme='purple'>
          <Link to={'/signup'}>Sign Up</Link>
         </Button>
        </Text>


        </VStack>
      </form>
    </Container>
  )
}

export default Login
