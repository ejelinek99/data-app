import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    flexRender,
    createColumnHelper
} from '@tanstack/react-table'
import {Box, Flex, Table, Thead, Tbody, Tr, Th, Td, useColorMode} from '@chakra-ui/react'
import {TriangleDownIcon, TriangleUpIcon} from '@chakra-ui/icons'

const columnHelper = createColumnHelper()

// Utilize column helper to define headers for the table data
const columns = [
    columnHelper.accessor('First name', {
        cell: (info) => info.getValue(),
        header: 'First Name'
    }),
    columnHelper.accessor('Last name', {
        cell: (info) => info.getValue(),
        header: 'Last Name'
    }),
    columnHelper.accessor('Location', {
        cell: (info) => info.getValue(),
        header: 'Location'
    }),
    columnHelper.accessor('Birthday', {
        cell: (info) => info.getValue(),
        header: 'Birthday'
    }),
    columnHelper.accessor('Age', {
        cell: (info) => info.getValue(),
        header: 'Age'
    })
]

export const DataTableBody = ({data}) => {
    const {colorMode} = useColorMode()

    const activeArrowColor = colorMode === 'light' ? '#0766D1' : '#09b0ec'
    const inactiveArrowColor = '#CCC'

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        initialState: {sorting: [{id: 'Birthday', desc: false}]}
    })

    return (
        <Flex justifyContent={'center'} maxWidth={'1285px'} marginX={'auto'} mt={'116px'}>
            <Table variant="simple">
                <Thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <Th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    cursor="pointer"
                                >
                                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                                        <Box>
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        </Box>
                                        <Flex flexDirection={'column'}>
                                            <TriangleUpIcon
                                                aria-label="sorted ascending"
                                                color={
                                                    header.column.getIsSorted() === 'asc'
                                                        ? activeArrowColor
                                                        : inactiveArrowColor
                                                }
                                                mb="-1px"
                                            />
                                            <TriangleDownIcon
                                                aria-label="sorted descending"
                                                color={
                                                    header.column.getIsSorted() === 'desc'
                                                        ? activeArrowColor
                                                        : inactiveArrowColor
                                                }
                                                mt="-1px"
                                            />
                                        </Flex>
                                    </Flex>
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody>
                    {table.getRowModel().rows.map((row) => (
                        <Tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <Td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Flex>
    )
}
