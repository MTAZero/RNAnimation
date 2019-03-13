export default (text = '', maxWord = 50) => {
    if (!text || typeof text !== 'string') return ''

    const words = text.split(' ')
    if (words.length <= maxWord) return text

    const testRemakeString = words.slice(0, maxWord - 1).join(' ')
    const finishPosition = testRemakeString.length

    const suffix = testRemakeString.charAt(testRemakeString.length - 1) === '.' ? '' : '...'

    return text.substr(0, finishPosition) + suffix
}
