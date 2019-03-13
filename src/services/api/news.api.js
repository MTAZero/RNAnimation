import createAPIServices from './createAPIServices'
import {GET, POST} from "../../constants/HTTPConstants"

const api = createAPIServices()

export const getNews = () => {
    return api.makeRequest({
        method: GET,
        url: '/news'
    })
}
