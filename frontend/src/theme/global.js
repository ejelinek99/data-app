export const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

export const styles = {
    global: (props) => ({
        body: {
            bgColor: props.colorMode === 'light' ? '#F6F7F8' : '#17181A'
        }
    })
}
