import React, { useState } from 'react'
import { Button, Container, Heading, HStack, Input, Text, Stack, VStack,Image, Link } from '@chakra-ui/react'

const Course = ({views, title, imageSrc, id, addToPlaylistHandler, creator, 
    description, lectureCount}) =>{
    return (
<VStack className='course' alignItems={["center", "flex-start"]}>
    <Image src={imageSrc} 
    boxSize="60" 
    objectFit={'contain'} />
    <Heading 
    textAlign={["center","left"]} 
    size='sm'
    maxW='200px' 
    fontFamily={"sans-serif"} 
    noOfLines={3} children={title} />
    <Text noOfLines={2} children={description}/>

    <HStack>
    <Text fontWeight={'bold'} 
    textTransform='uppercase'
    children={'creator'}/>
    <Text fontFamily={'body'}
    textTransform='uppercase' 
    children={creator}/>
    </HStack>

    <Heading textAlign={'center'}
    size="xs"
    children={`Lectures - ${lectureCount}`}
    textTransform="uppercase"
    />
     <Heading 
     size="xs"
    children={`Views - ${views}`}
    textTransform="uppercase"
    />

    <Stack direction={['column','row']}
    alignItems='center'>
        <Link to={`/course/${id}`}>
            <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button variant={'ghost'} colorScheme={'yellow'}
        onClick={()=> addToPlaylistHandler(id)}
        >
            Add to playlist
            </Button>
    </Stack>
</VStack>
    )
}

const Courses = () => {
    const [keyword, setKeyword] = useState('');
    const [ setCategory] = useState('');

const addToPlaylistHandler = () =>{
    console.log("Added to playlist")
};

const categories=[
    'Web Development', 'Artificial Intelligence', 'Data Science', 
    'Data Structure and Algorithm', 'App Development', 'Data Science', 'Game Development'
];
    return(
   <Container  minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
    <Heading children="All Courses" m={'8'} />

<Input value={keyword} onChange={e => setKeyword(e.target.value)} 
placeholder="Search a Course..."
type={'text'} 
focusBorderColor='yellow.500'
/>
<HStack 
    overflowX={'auto'}
    paddingY={8} 
    css={{'&::-webkit-scrollbar':{display:'none',},}}
>
    {
        categories.map((item, index)=>(
            <Button key={index} onClick={()=>setCategory(item)} minW={'60'}>
                <Text children={item}/>
            </Button>
        ))
    }
</HStack>

<Stack direction={["column","row"]}
flexWrap='wrap'
justifyContent={["flex-start","space-evenly"]}
alignItems={["center","flex-start"]}
>

<Course 

title={"sample"}
description={"sample"}
views={23}
imageSrc={'https://cdn.pixabay.com/photo/2016/01/27/04/32/books-1163695_960_720.jpg'}
id={"Sample"}
creator={"Sample"}
lectureCount={2}
addToPlaylistHandler={addToPlaylistHandler}
/>

    
</Stack>
  </Container>
  );
};

export default Courses;