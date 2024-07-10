import {ChakraProvider, Heading} from '@chakra-ui/react'
import theme from './theme/theme'

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Heading>Hello World</Heading>
        </ChakraProvider>
    )
}

export default App
