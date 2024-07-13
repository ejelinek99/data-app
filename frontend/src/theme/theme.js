import {extendTheme, defineStyleConfig} from '@chakra-ui/react'
import {tableTheme} from './table'

const DataTableHeader = defineStyleConfig({
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

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const styles = {
    global: (props) => ({
        body: {
            bgColor: props.colorMode === 'light' ? '#F6F7F8' : '#17181A'
        }
    })
}

const theme = extendTheme({
    config,
    styles,
    components: {
        Heading: {
            baseStyle: (props) => ({
                color: props.colorMode === 'light' ? '#17181A' : '#FFFFFF'
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
                        props.colorMode === 'light' ? '1px solid #3282B8' : '1px solid #FFFFFF',
                    color: props.colorMode === 'light' ? '#3282B8' : '#FFFFFF',
                    backgroundColor: props.colorMode === 'light' ? '#FFFFFF' : '#17181A',
                    borderRadius: '0.25rem',
                    _hover: {
                        backgroundColor: props.colorMode === 'light' && '#FFFFFF',
                        outlineColor: props.colorMode === 'light' ? '#0F4C75' : '#3282B8',
                        color: props.colorMode === 'light' ? '#0F4C75' : '#3282B8'
                    }
                })
            }
        },
        DataTableHeader,
        Table: tableTheme
    }
})

export default theme
