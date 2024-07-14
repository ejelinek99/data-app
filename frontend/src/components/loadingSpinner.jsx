import {Flex, Spinner, useColorMode} from '@chakra-ui/react'

export const LoadingSpinner = () => {
    const {colorMode} = useColorMode()
    return (
        <Flex
            height={'100vh'}
            width={'100vw'}
            justifyContent={'center'}
            alignItems={'center'}
            color={colorMode === 'light' ? '#0766D1' : '#09b0ec'}
            backgroundColor={'transparent'}
        >
            <Spinner size="xl" />
        </Flex>
    )
}
