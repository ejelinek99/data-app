import {useState} from 'react'
import {LoadingSpinner} from './loadingSpinner'
import {DataTableBody} from './dataTableBody'
import {DataTableHeader} from './dataTableHeader'
import {Container} from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'

export const DataTable = () => {
    const currentMonth = new Date().toLocaleString('default', {month: 'long'})

    // State to track the filtered data
    const [selectedMonth, setSelectedMonth] = useState(currentMonth)

    // Fetch the data
    const {isPending, isLoading, isFetching, error, data, refetch} = useQuery({
        queryKey: ['data', selectedMonth],
        queryFn: async ({queryKey}) => {
            const response = await fetch(
                `http://localhost:3001/${queryKey[0]}?month=${queryKey[1]}`
            )
            return await response.json()
        }
    })

    // Function to handle the filter change in header, refetches when changed
    const handleFilterChange = (month) => {
        setSelectedMonth(month)
        refetch({queryKey: ['data', selectedMonth]})
    }

    return (
        <Container variant={'dataTable'}>
            <DataTableHeader selectedMonth={selectedMonth} onFilterChange={handleFilterChange} />
            {isLoading || isPending || isFetching || error ? (
                <LoadingSpinner />
            ) : (
                <DataTableBody data={data} />
            )}
        </Container>
    )
}
