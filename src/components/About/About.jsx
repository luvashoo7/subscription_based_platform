import { Avatar, Box, Button, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react'
import introVideo from '../../assets/videos/intro.mp4'
import { RiSecurePaymentFill } from 'react-icons/ri'
import termsAndConditions from '../../assets/docs/termsAndCondition'

const Founder = ()=>(
    <Stack direction={['column','row']} 
    spacing={['4','16']} padding='8'
    >

<VStack>
    <Avatar src='https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' boxSize={['40','48']}/>
    <Text children='Co-founder' opacity={0.7}/>
</VStack>

<VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
    <Heading children='ARP Developers' size={['md', 'xl']}/>
    <Text textAlign={['center','left']} 
    children={`Hi, We are developers and our mission is to 
    provide quality content in reasonable price`}
    />
</VStack>
</Stack>
)

const VideoPlayer = ()=>(
  <Box>
     <video 
        autoPlay
        loop
        muted
        controls controlsList='nodownload nofullscreen noremoteplayback'
        disablePictureInPicture
        disableRemotePlayback 
        src={introVideo}
        >
        </video>
  </Box>
)

const TandC = ({termsAndConditions})=>(
  <Box>
    <Heading size={'md'} textAlign={['center','left']} my='4' children='Terms & Condition'/>

    <Box h={'sm'} p='4' overflowY={'scroll'}>
  <Text textAlign={['center','left']} 
  letterSpacing='widest' fontFamily={'heading'}>
    {termsAndConditions}
    </Text>
    <Heading my={'4'} size='xs' children='Refund only applicable for cancelletion within 7 days'/>
    </Box>
  </Box>
)

const About = () => {
  return (
    <Container maxW={'container.lg'} padding='16' boxShadow={"2xl"}>
        <Heading children='About Us' textAlign={['center','left']}/>

        <Founder />
        <Stack m={'8'} direction={['column','row']} alignItems='center'>
          <Text fontFamily={'cursive'} m='8' textAlign={['center', 'left']}>
            We are a video streaming platform with some 
            premium courses available only for premium users
          </Text>

        <Link to='/subscribe'>
          <Button variant={'ghost'} colorScheme='yellow'>
            Checkout Our Plan
          </Button>
        </Link>
        </Stack>


    <VideoPlayer/>

    <TandC termsAndConditions={termsAndConditions}/>

    <HStack my={'4'} p='4'>
      <RiSecurePaymentFill />
      <Heading size={'xs'} fontFamily='sans-serif' 
      textTransform={'uppercase'} children={'Payment is secured by Razorpay'}/>
    </HStack>
    </Container>
  )
}

export default About;