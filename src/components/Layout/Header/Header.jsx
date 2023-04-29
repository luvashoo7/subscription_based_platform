import React from 'react'
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
import { Button, DrawerBody, DrawerContent, 
  DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Drawer } from '@chakra-ui/react';
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri";

const LinkButton = ({ url='/', title='Home', onClose })=>
(
<Link onClick = {onClose} to = {url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const{isOpen, onOpen, onClose} = useDisclosure();

const isAuthenticated = true;
const user = {
  role:"admin"
};
const logoutHandler = ()=>{
  console.log("Logout")
  onClose();
}
  return<>
  <ColorModeSwitcher/>

  <Button 
  onClick={onOpen}
  colorScheme={'yellow'} 
  width="12" 
  height="12" 
  rounded="full" 
  zIndex={'overlay'}
  position="fixed"
  top="6"
  left="6"
  >
    <RiMenu5Fill />
  </Button>

  <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
<DrawerOverlay 
backdropFilter={'blur(2px)'}
/>
  <DrawerContent>
    <DrawerHeader borderBottomWidth={'1px'}>Course Bundler</DrawerHeader>

    <DrawerBody>
<VStack spacing = {'4'} alignItems = 'flex-start'>
  <LinkButton onclose={onclose} url="/" title="Home"/>
  <LinkButton onclose={onclose} url="/courses" title="Browse All Courses"/>
  <LinkButton onclose={onclose} url="/request" title="Request A Course"/>
  <LinkButton onclose={onclose} url="/contact" title="Contact Us"/>
  <LinkButton onclose={onclose} url="/about" title="About"/>

  <HStack 
  justifyContent={'space-evenly'} 
  position='absolute' 
  bottom={'2rem'}
  width='80%'
  >
    {isAuthenticated?(
    <>
    <VStack>
      <HStack>
      <Link onClick={onclose} to="/profile">
      <Button variant={'ghost'} colorScheme={'yellow'}>Profile</Button>
    </Link>
    <Button variant={'ghost'} onClick={logoutHandler} > <RiLogoutBoxLine/> Logout</Button>

      </HStack>
{
  user && user.role==="admin" && <Link onClick={onclose} to = "/admin/dashboard">
<Button colorScheme={"purple"} variant='ghost'>
  <RiDashboardFill style={{margin:'6px'}}/>
  Dashboard
</Button>

  </Link>
}

    </VStack>
    </>
      ):(
      <>
    <Link onClick={onclose} to="/login">
      <Button colorScheme={'yellow'}>Login</Button>
    </Link>

<p>OR</p>

    <Link onClick={onclose} to="/register">
      <Button colorScheme={'yellow'}>Signup</Button>
    </Link>

    </>)}

  </HStack>
</VStack>

    </DrawerBody>
  </DrawerContent>

  </Drawer>

  </>;
  };

export default Header;

