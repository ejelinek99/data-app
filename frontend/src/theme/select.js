import {selectAnatomy} from '@chakra-ui/anatomy'
import {createMultiStyleConfigHelpers} from '@chakra-ui/react'

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(selectAnatomy.keys)

const baseStyle = definePartsStyle((props) => ({
    field: {
        color: props.colorMode === 'light' ? '#0766D1' : '#FFFFFF',
        backgroundColor: props.colorMode === 'light' ? '#FFFFFF' : '#232529',
        outline: props.colorMode === 'light' ? '1px solid #0766D1' : '1px solid #FFFFFF',
        fontWeight: 500
    },
    icon: {
        color: props.colorMode === 'light' ? '#0766D1' : '#FFFFFF'
    }
}))

export const SelectTheme = defineMultiStyleConfig({baseStyle})
