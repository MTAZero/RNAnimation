import queryString from "query-string"
import getHistory from "../../store/getHistory"
import parseSearchQuery from "./parseSearchQuery"

const history = getHistory()

const _cleanObject = (obj) => {
    const newObject = {}

    for (let propName in obj) {
        if (!obj.hasOwnProperty(propName) || !obj[propName]) {
            continue
        }

        newObject[propName] = obj[propName]
    }

    return newObject
}

export default (query, push = false) => {
    const parsed = parseSearchQuery()
    const changed = Object.assign({}, parsed, query)
    const clean = _cleanObject(changed)

    if (push) {
        return history.push({
            search: queryString.stringify(clean)
        })
    }

    history.replace({
        search: queryString.stringify(clean)
    })
}
