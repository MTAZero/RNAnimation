import axios from "axios"
import getEnv from "../../helpers/common/getEnv"
// import {getAccessToken, logoutUser} from "../AuthServices"
// import {getUserLanguage} from "../LocaleServices"

const _makeRequest = createRequest => async args => {
    const _headers = args.headers ? args.headers : {}

    const defaultHeaders = {
        'X-App-Version': '1.1.0',
        // 'X-Language': getUserLanguage()
    }

    args = {
        ...args,
        headers: {
            ...defaultHeaders,
            ..._headers
        },
    }

    try {
        const {data} = await createRequest(args)

        return data
    } catch (e) {
        throw e
    }
}

const _makeAuthRequest = createRequest => async (args) => {
    const requestHeaders = args.headers ? args.headers : {}
    const accessToken = getAccessToken()

    let headers = {
        'Authorization': `Bearer ${accessToken}`,
        'cache-control': 'no-cache',
        'pragma': 'no-cache'
    }

    args = {
        ...args,
        headers: {
            ...headers,
            ...requestHeaders
        }
    }

    try {
        return await _makeRequest(createRequest)(args)
    } catch (e) {
        const {response} = e

        if (!response || !response.data) {
            throw e
        }

        if (response.status >= 400 && response.status <= 403) {
            logoutUser()
        }
    }
}

export default (options = {}) => {
    const baseUrlValidated = options.baseUrl || getEnv('baseAPIUrl')
    const instance = axios.create({
        baseURL: baseUrlValidated,
        timeout: 10000,
    })

    return {
        makeRequest: _makeRequest(instance),
        makeAuthRequest: _makeAuthRequest(instance),
    }
}