import {useState} from 'react'
import {Heading, Select, Button, Flex, useStyleConfig} from '@chakra-ui/react'
import {ColorModeSwitch} from './colorMode'
import {months} from '../constants'

export const DataTableHeader = ({selectedMonth, onFilterChange}) => {
    // State to track select box value
    const [headerSelectedMonth, setHeaderSelectedMonth] = useState(selectedMonth)
    const styles = useStyleConfig('DataTableHeader')

    return (
        <Flex sx={styles} as={'header'}>
            <Heading as="h1" size="lg">
                Employee Information
            </Heading>
            <Flex align="center">
                <Select
                    value={headerSelectedMonth}
                    onChange={(e) => setHeaderSelectedMonth(e.target.value)}
                >
                    {months.map((month) => (
                        <option key={month} value={month}>
                            {month}
                        </option>
                    ))}
                </Select>
                <Button
                    ml={4}
                    variant={'primary'}
                    onClick={() => onFilterChange(headerSelectedMonth)}
                >
                    Apply Filter
                </Button>
                <ColorModeSwitch />
            </Flex>
        </Flex>
    )
}
