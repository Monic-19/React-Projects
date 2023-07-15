import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

const Error = ({msg}) => {

  return (
    <Alert
  status='error'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='70vh'
  gap='3vh'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize="3xl">
    Error Occured
  </AlertTitle>
  <AlertDescription maxWidth='sm'  fontSize="2xl">
    {msg}. <br></br>
    Please try again later.
  </AlertDescription>
</Alert>
  )
}

export default Error
