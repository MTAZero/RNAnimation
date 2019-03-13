import queryString from "query-string"

export default (originUrl, queries = {}) => {
    const search = queryString.extract(originUrl)
    const parsed = queryString.parse(search)
    const appendParsed = {
        ...parsed,
        ...queries
    }

    return originUrl + '?' + queryString.stringify(appendParsed)
}
