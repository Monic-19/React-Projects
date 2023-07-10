import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend,AiFillYoutube ,AiFillInstagram ,AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
   <Box bgColor={'blackAlpha.800'} minH={'40'} p="16" color={'white'}>

    <Stack direction={["column", "row"]}>

      <VStack w={'full'} alignItems={'strech'} px={4}>
      <Heading size={'md'} textTransform={'uppercase'}>
        Subscribe to grt updates
      </Heading>

      <HStack borderBottom={'2px solid white'} py={2}> 
        <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' ></Input>
        <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
          <AiOutlineSend size={'20'}></AiOutlineSend>
        </Button>
      </HStack>
      </VStack>

      <VStack w={"full"} borderLeft={['none', '1px solid white']} borderRight={['none' , '1px solid white']}> 
      <Heading textTransform={'uppercase'} textAlign={'center'}>Video gallery</Heading>
      <Text>@ All rights reserved</Text>
      </VStack>

      <VStack w={"full"} > 
      <Heading size={'md'} textTransform={'uppercase'} textAlign={['center' , 'left']}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'black'} href="#">
              Youtube
            </a>
            <AiFillYoutube size={'20px'}></AiFillYoutube>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'black'} href="#">
              Instagram
            </a>
            <AiFillInstagram size={'20px'}></AiFillInstagram>
          </Button>

          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'black'} href="#">
              Github
            </a>
            <AiFillGithub size={'20px'} ></AiFillGithub>
          </Button>
      </VStack>
    </Stack>
   </Box>
  )
}

export default Footer
