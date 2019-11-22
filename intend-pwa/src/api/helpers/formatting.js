const funcs = {
    formatName(name) {
        return name.replace(/(^|-)[a-z]/g, match => {
            return match.replace('-', '').toUpperCase()
        })
    }
}
export default funcs