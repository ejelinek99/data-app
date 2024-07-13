import {tableAnatomy} from '@chakra-ui/anatomy'
import {createMultiStyleConfigHelpers} from '@chakra-ui/react'

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(tableAnatomy.keys)

const baseStyle = definePartsStyle((props) => ({
    table: {
        mb: 4,
        bgColor: props.colorMode === 'light' ? '#FFFFFF' : '#232529',
        borderRadius: '.5rem',
        boxShadow:
            props.colorMode === 'light' && '0 14px 20px 0 rgba(0,0,0,.1),inset 0 0 0 1px #ccc'
    },
    tr: {
        _last: {
            td: {
                borderBottom: 'none'
            }
        }
    }
}))

export const tableTheme = defineMultiStyleConfig({baseStyle})
