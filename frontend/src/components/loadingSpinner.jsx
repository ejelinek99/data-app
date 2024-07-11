import {Flex, Spinner} from '@chakra-ui/react'

export const LoadingSpinner = () => {
    return (
        <Flex height="100vh" width="100vw" justifyContent="center" alignItems="center">
            <Spinner size="xl" />
        </Flex>
    )
}
