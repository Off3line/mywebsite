import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationPanel from './layouts/NavigationPanel';
import { Box, ChakraBaseProvider } from '@chakra-ui/react';
import Content from './components/Content';

function App() {
  return (
    <ChakraBaseProvider>
      <Box >
      <NavigationPanel/>
      <Content/>
      </Box>
    </ChakraBaseProvider>
  );
}

export default App;
