import {useColorMode, Button} from '@chakra-ui/react'

export const ColorModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
    )
}
