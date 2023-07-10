import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack
} from '@chakra-ui/react'

import {BiMenuAltLeft} from "react-icons/bi";
import { Link } from 'react-router-dom';



const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Button pos={"fixed"} top={4} right={4} colorScheme='purple' p={0} w={10} h={10} onClick={onOpen} zIndex={20}>
        <BiMenuAltLeft size={23} />
        </Button>

      <Drawer isOpen={isOpen}  placement='right' onClose={onClose} > 
         
      <DrawerContent backgroundColor={'blackAlpha.800'}>
          <DrawerCloseButton />

          <DrawerHeader color={'white'}>VIDEO GALLERY</DrawerHeader>

          <DrawerBody>
           <VStack alignItems={'flex-start'}>
              
              <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={"/"}>HOME</Link>
              </Button>

              <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={"/videos"}>VIDEOS</Link>
              </Button>

              <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={"/videos?category=free"}>FREE VIDEOS</Link>
              </Button>

              <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={"/upload"}>UPLOAD VIDEOS</Link>
              </Button>
           </VStack>

          
          </DrawerBody>

          <DrawerFooter justifyContent={'space-evenly'}>
            <Button onClick={onClose} variant='outline' mr={3} colorScheme='purple'>
              <Link to={"/login"}>Log In</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple'>
              <Link to={"/signup"}>Sign Up</Link>
            </Button>
          </DrawerFooter>

        </DrawerContent>

      </Drawer>
    </div>
  )
}

export default Header
