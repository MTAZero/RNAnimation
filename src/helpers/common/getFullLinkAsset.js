import getEnv from "./getEnv"

const baseURL = getEnv('baseAPIUrl')

export default (url) => {
    const replaceDot = (url + '').replace(/^./, '')

    return `${baseURL}${replaceDot}`
}
