import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'

const AdminCourses = () => {

  const courses = [{
    _id:'asddaascfasd',
    title:'MERN Course',
    category:"Web Development",
    poster:{
      url:'https://cdn.pixabay.com/photo/2016/01/27/04/32/books-1163695_960_720.jpg'
    },
    createdBy:'RAPP',
    views : 124,
    numOfVideos : 12, 
}];

const {isOpen, onClose, onOpen} = useDisclosure()

    const courseDetailsHandler = userId => {
      onOpen()
    }
    const deleteButtonHandler = userId => {
      console.log(userId);
  }

  const deleteLectureButtonHandler = (courseId, lectureId)=>{
    console.log(courseId)
    console.log(lectureId)
  }

  const addLectureHandler = (e, courseId, title, description, video)=>{
    e.preventDefault()
  }




  
  return (
    <Grid css={{cursor: `url(${cursor}), default`}} 
    minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>

    <Box p={['0','8']} overflowX={'auto'}>

    <Heading textTransform={'uppercase'} children='All Courses' 
    my={'16'} textAlign={['center','left']}
    /> 

    <TableContainer w={['100vw','full']}>

    <Table variant={'simple'} size={'lg'}>
    <TableCaption>All available courses in the database</TableCaption>

    <Thead >
      <Tr>
        <Th>Id</Th>
        <Th>Poster</Th>
        <Th>Title</Th>
        <Th>Category</Th>
        <Th>Creator</Th>
        {/* text align will be right automatically */}
        <Th isNumeric>Views</Th>       
        <Th isNumeric>Lectures</Th>       
        <Th isNumeric>Action</Th>       
      </Tr>
    </Thead>

    <Tbody>

    {
      courses.map(item=>(
        <Row courseDetailsHandler={courseDetailsHandler} 
        deleteButtonHandler={deleteButtonHandler} 
        key={item._id} item= {item} />
      ))
    }

    </Tbody>

    </Table>

    </TableContainer>

    <CourseModal isOpen={isOpen} onClose={onClose} id={'sacvfc'} 
    courseTitle={'MERN Course'}
    deleteButtonHandler={deleteLectureButtonHandler}
    addLectureHandler={addLectureHandler}/>

    </Box>

    <Sidebar />

    </Grid>
  )
}


function Row({item, courseDetailsHandler, deleteButtonHandler}) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      
      <Td>

        <Image src={item.poster.url} />

      </Td>
      
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      
      <Td isNumeric> 
      <HStack justifyContent={'flex-end'}>
        <Button onClick={()=>courseDetailsHandler(item._id, item.title)} variant={'outline'} 
        color={'purple.500'}>View Lectures</Button>

        <Button onClick={()=>deleteButtonHandler(item._id)} 
        color={'purple.600'}>
          <RiDeleteBin7Fill />
        </Button>

      </HStack>

      </Td> 
    </Tr>
  );
}

export default AdminCourses