import {useState} from 'react'
import {Heading, Select, Button, Flex} from '@chakra-ui/react'
import {months} from '../constants'

export const DataTableHeader = ({currentMonth, onFilterChange}) => {
    const [headerSelectedMonth, setHeaderSelectedMonth] = useState(currentMonth)

    return (
        <Flex justify="space-between" align="center" mb={4}>
            <Heading as="h1" size="lg">
                Employee Information
            </Heading>
            <Flex align="center">
                <Select
                    value={headerSelectedMonth}
                    onChange={(e) => setHeaderSelectedMonth(e.target.value)}
                    mr={2}
                >
                    {months.map((month) => (
                        <option key={month} value={month}>
                            {month}
                        </option>
                    ))}
                </Select>
                <Button onClick={() => onFilterChange(headerSelectedMonth)}>Apply Filter</Button>
            </Flex>
        </Flex>
    )
}
