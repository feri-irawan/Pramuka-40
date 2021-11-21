export default function removeTags(str) {
    if (str === null || str === '') return false
    else str = str.toString()

    return str.replace(/(<([^>]+)>)/gi, '')
}
