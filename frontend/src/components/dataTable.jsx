import {LoadingSpinner} from './loadingSpinner'
import {DataTableBody} from './dataTableBody'
import {Container} from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'

export const DataTable = () => {
    const {isPending, isLoading, isFetching, error, data} = useQuery({
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
            <DataTableBody data={data} />
        </Container>
    )
}
