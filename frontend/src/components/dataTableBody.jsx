import {Table, Thead, Tbody, Tr, Th, Td} from '@chakra-ui/react'

export const DataTableBody = ({data}) => {
    if (!data) return

    return (
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
    )
}
