import React from 'react';
import { Box, Button, HStack, Image, Heading, Text, Stack, VStack } from '@chakra-ui/react';
import {Link} from "react-router-dom";
import './home.css';
import vg from "../../assets/images/bg.png"//vg is vector graphics
import {CgGoogle, CgYoutube} from "react-icons/cg"
import {SiCoursera, SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import introVideo from "../../assets/videos/intro.mp4"

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center','flex-end']} spacing='6'>
            {/* change here */}
            <Heading children="Learn from the experts"  />
            <Text 
            fontSize={'2xl'} fontFamily='cursive' 
            textAlign={["center","left"]} children="Find valuable content at reasonable price" />
            <Link to="/courses">
              <Button size={"lg"} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>

<Image className='vector-graphics' boxSize={"md"} src={vg} objectFit="contain"/>

        </Stack>
      </div>

      <Box padding={"8"} bg="blackAlpha.800">
        <Heading 
        textAlign={"center"}
        fontFamily="body"
        color={'yellow.400'}
        children="Our Brands"
        />
        <HStack className='brandsBanner' 
        justifyContent={'space-evenly'} 
        marginTop='3'
        >
        <CgGoogle/>
        <CgYoutube/>
        <SiCoursera/>
        <SiUdemy/>
        <DiAws/>
        </HStack>
      </Box>
      <div className="container2">
        <video 
        // autoPlay
        controls controlsList='nodownload nofullscreen noremoteplayback'
        disablePictureInPicture
        disableRemotePlayback 
        src={introVideo}
        >
        </video>
      </div>
    </section>
  );
};

export default Home;
