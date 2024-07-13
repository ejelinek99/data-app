import {defineStyleConfig} from '@chakra-ui/react'

export const DataTableHeaderTheme = defineStyleConfig({
    baseStyle: (props) => ({
        width: '100%',
        height: '100px',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 4,
        paddingX: 4,
        backgroundColor: props.colorMode === 'light' ? '#FFFFFF' : '#232529',
        borderBottom: '1px solid #ccc',
        pos: 'fixed',
        top: 0
    })
})
