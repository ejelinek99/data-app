import {Table, Thead, Tbody, Tr, Th, Td, Container} from '@chakra-ui/react'
import {LoadingSpinner} from './loadingSpinner'
import {useQuery} from '@tanstack/react-query'

export const DataTable = () => {
    const {isPending, isLoading, error, data, isFetching} = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3001/data')
            return await response.json()
        }
    })

    if (isLoading || isPending || isFetching) {
        return <LoadingSpinner />
    }

    return (
        <Container maxW={'100%'}>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Location</Th>
                        <Th>Birthday</Th>
                        <Th>Age</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.map((item, index) => (
                        <Tr key={index}>
                            <Td>{item['First name']}</Td>
                            <Td>{item['Last name']}</Td>
                            <Td>{item.Location}</Td>
                            <Td>{item.Birthday}</Td>
                            <Td>{item.Age}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Container>
    )
}
