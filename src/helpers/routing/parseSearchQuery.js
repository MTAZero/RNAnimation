import queryString from "query-string"
import getHistory from "../../store/getHistory"

export default () => {
    const history = getHistory()
    const search = history.location.search
    return queryString.parse(search)
}
