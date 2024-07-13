import {useColorMode, Button} from '@chakra-ui/react'
import {SunIcon, MoonIcon} from '@chakra-ui/icons'

export const ColorModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <Button ml={4} variant={'primary'} width={'40px'} onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    )
}
