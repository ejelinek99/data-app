import {extendTheme} from '@chakra-ui/react'
import {TableTheme} from './table'
import {DataTableHeaderTheme} from './dataTableHeader'
import {config, styles} from './global'
import {SelectTheme} from './select'

const theme = extendTheme({
    config,
    styles,
    components: {
        Heading: {
            baseStyle: (props) => ({
                color: props.colorMode === 'light' ? '#0766D1' : '#FFFFFF'
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
                        props.colorMode === 'light' ? '1px solid #0766D1' : '1px solid #FFFFFF',
                    color: props.colorMode === 'light' ? '#0766D1' : '#FFFFFF',
                    backgroundColor: props.colorMode === 'light' ? '#FFFFFF' : '#232529',
                    borderRadius: '0.25rem',
                    _hover: {
                        backgroundColor: props.colorMode === 'light' && '#FFFFFF',
                        outlineColor: props.colorMode === 'light' ? '#032954' : '#0766D1',
                        color: props.colorMode === 'light' ? '#032954' : '#0766D1'
                    }
                })
            }
        },
        DataTableHeader: DataTableHeaderTheme,
        Table: TableTheme,
        Select: SelectTheme
    }
})

export default theme
