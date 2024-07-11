import {ChakraProvider} from '@chakra-ui/react'
import {DataTable} from './components/dataTable'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import theme from './theme/theme'

function App() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <DataTable />
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default App
