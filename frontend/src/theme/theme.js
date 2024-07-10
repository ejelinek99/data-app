// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import {extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
    components: {
        Heading: {
            baseStyle: {
                color: 'red'
            }
        }
    }
})

export default theme
