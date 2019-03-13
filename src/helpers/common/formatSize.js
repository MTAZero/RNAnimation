const sufixes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
export default (bytes) => {
    if (!bytes) return '0 Bytes'

    const i = Math.floor(Math.log(bytes) / Math.log(1024))

    return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sufixes[i]
}

