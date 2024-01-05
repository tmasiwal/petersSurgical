import './App.css'
import { Box, Flex } from '@chakra-ui/react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import PurchasedBox from './Components/PurchasedBox';
import Emission from './Components/Emission';
import EmissionBySupplier from './Components/EmissionBySupplier';

function App() {
  

  return (
    <Flex w="100%" h="100vh">
      <Sidebar position="fixed" h="100%" />
      <Flex
        w="calc(100% - 249px)"
        bg="rgba(2, 171, 108, 0.01)"
        overflowY="auto"
        flexDirection={"column"}
      >
        <Navbar />
        <PurchasedBox />
        <Emission />
        {/* <Flex>
          <EmissionBySupplier />
        </Flex> */}
      </Flex>
    </Flex>
  );
}

export default App
