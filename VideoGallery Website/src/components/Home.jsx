import React from 'react';
import { Box, Container, Heading, Stack, Image, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
}

const Home = () => {
  return (
    <Box backgroundColor={'blackAlpha.900'} zIndex={5}>

      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >

        <Box w="full" h='100vh ' bgColor={"whatsapp.200"}>
          <Image src={img1}></Image>
          <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch The Future</Heading>
        </Box>

        <Box w="full" h='100vh ' bgColor={"whatsapp.200"}>
          <Image src={img2}></Image>
          <Heading bgColor={"whiteAlpha.700"} color={"black"}  {...headingOptions}>Future Is Gaming</Heading>
        </Box>

        <Box w="full" h='100vh ' bgColor={"whatsapp.200"}>
          <Image src={img3}></Image>
          <Heading bgColor={"blackAlpha.600"} color={"white"}  {...headingOptions}>Gaming Is Cool</Heading>
        </Box>

        <Box w="full" h='100vh ' bgColor={"whatsapp.200"}>
          <Image src={img4}></Image>
          <Heading bgColor={"whiteAlpha.700"} color={"black"}  {...headingOptions}>Night Life Is Gaming</Heading>
        </Box>

      </Carousel>

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'} color={'purple.600'}>

        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack h={'full'} p={"4"} alignItems={"center"} direction={['column', 'row']}>

          <Image src={img5} height={['40' , '400']} ></Image>

          <Text letterSpacing={'widest'} lineHeight={'190%'} textAlign={'center'} p={["4" , '16']}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor accusantium modi, quo non at corporis iste assumenda harum vitae illo dignissimos pariatur numquam architecto officia dolorum voluptates delectus iure, minima eius omnis quas quisquam totam? Veritatis deleniti cum quia reprehenderit dolores autem repudiandae labore dolore debitis perferendis reiciendis facere cumque, corporis unde laborum sed error culpa pariatur quos recusandae tempora vitae fugiat. Eum modi unde omnis numquam est accusamus officiis at accusantium itaque. Nemo itaque perferendis veritatis deserunt exercitationem, repellat nam quo obcaecati explicabo quisquam facere impedit, illum architecto minima, ab aspernatur temporibus nostrum repellendus. Dignissimos totam culpa quaerat cupiditate, molestias obcaecati? Delectus optio vitae nisi sit ratione? Saepe voluptatem ipsum aut maiores repellat perferendis! Eum dolore debitis, repellendus perferendis aperiam vero. Culpa, cumque nostrum. Ullam perspiciatis iure dolores id?
          </Text>

        </Stack>

      </Container>


    </Box>
  )
};



export default Home
