import {extendTheme, defineStyleConfig} from '@chakra-ui/react'

const DataTableHeader = defineStyleConfig({
    baseStyle: (props) => ({
        width: '100%',
        height: '100px',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 4,
        paddingX: 4,
        borderBottom: props.colorMode === 'light' ? '1px solid black' : '1px solid #f5f5f5',
        backgroundColor: props.colorMode === 'light' ? '#f5f5f5' : 'black'
    })
})

const Select = defineStyleConfig({
    baseStyle: {
        border: '1px solid black'
    }
})

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const styles = {
    global: (props) => ({
        body: {
            bgColor: props.colorMode === 'light' ? '#f5f5f5' : '#121212'
        }
    })
}

const theme = extendTheme({
    config,
    styles,
    components: {
        Heading: {
            baseStyle: (props) => ({
                color: props.colorMode === 'light' ? 'black' : 'white'
            })
        },
        Container: {
            variants: {
                dataTable: {
                    paddingX: 0,
                    maxW: '100%'
                }
            }
        },
        Button: {
            variants: {
                primary: (props) => ({
                    width: '200px',
                    height: '40px',
                    outline:
                        props.colorMode === 'light'
                            ? '1px solid black'
                            : '1px solid RGBA(255, 255, 255, 0.48)',
                    color: props.colorMode === 'light' ? 'black' : 'white',
                    backgroundColor: props.colorMode === 'light' ? '#f5f5f5' : 'black',
                    borderRadius: '0.25rem',
                    _hover: {
                        backgroundColor: props.colorMode === 'light' && 'white',
                        outlineColor: props.colorMode === 'dark' && '#f5f5f5'
                    }
                })
            }
        },
        DataTableHeader,
        Select
    }
})

export default theme
