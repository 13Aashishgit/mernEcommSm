import { useState } from 'react'
import { Button,Box, useColorModeValue } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar' 
import HomePage from './pages/HomePage.jsx'
import CreatePage  from './pages/CreatePage.jsx';
function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("white","black")}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/create' element={<CreatePage/>}></Route>
      </Routes>
    </Box>
  )
}

export default App
