import axios from 'axios'
import {makeSlug} from './string'
const host = 'http://localhost:5000'

export function addContent(content) {
    return axios.post(`${host}/addContent`, content)
}

export function loadContents() {
    return axios.get(`${host}/loadContents`)
}

export function deleteAllContents() {
    return axios.delete(`${host}/deleteAllContents`)
}

export async function findContent(category, slug = '') {
    const contents = (await loadContents()).data
    let results

    if (category)
        results = contents.filter(
            (content) => makeSlug(content.category) === category
        )

    if (category && slug !== '')
        results = contents.find(
            (content) =>
                makeSlug(content.category) === category &&
                makeSlug(content.title) === slug
        )

    return results ? results : {}
}
